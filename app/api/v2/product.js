const Router = require('koa-router')

const Product = require('../../model/smallShop/product')
const Banner = require('../../model/smallShop/banner')
const Theme = require('../../model/smallShop/theme')
const ThemeHead = require('../../model/smallShop/themeHead')
const Category = require('../../model/smallShop/category')
const Order = require('../../model/smallShop/order')

const {
  ValidateCategory,
  ValidateTheme,
  ValidateOrder,
  PositiveParameter
} = require('../../validator/validator')

const {
  NotEnough,
  Success,
  Fail
} = require('../../exception/httpException')

const {
  generateRandom,
  getTitle
} = require('../../libs/utils')

const Auth = require('../../../middleware/auth')

const productRouter = new Router({
  prefix: '/v2/product'
})

// 获取首页所有数据
productRouter.get('/home', async (ctx) => {
  const newProduct = await Product.getNew()
  const banner = await Banner.getBanner()
  const theme = await Theme.getTheme()
  ctx.body = {
    errorCode: 0,
    message: '请求请求成功',
    data: {
      newProduct,
      banner,
      theme
    }
  }
})

// 获取全部分类产品
productRouter.get('/category', async (ctx) => {
  // 定义一个数组，push 进去每个种类的值
  let data = []
  const ca_vg = await Category.getInfoByCategory('vegetable')
  let vegetable = {
    name: ca_vg[0].dataValues.name,
    image: ca_vg[0].dataValues.image,
    products: await Product.getProductByCategory('vegetable')
  }
  data.push(vegetable)

  const ca_fruit = await Category.getInfoByCategory('fruit')
  let fruit = {
    name: ca_fruit[0].dataValues.name,
    image: ca_fruit[0].dataValues.image,
    products: await Product.getProductByCategory('fruit')
  }
  data.push(fruit)

  const ca_rice = await Category.getInfoByCategory('rice')
  let rice = {
    name: ca_rice[0].dataValues.name,
    image: ca_rice[0].dataValues.image,
    products: await Product.getProductByCategory('rice')
  }
  data.push(rice)

  const ca_tea = await Category.getInfoByCategory('tea')
  let tea = {
    name: ca_tea[0].dataValues.name,
    image: ca_tea[0].dataValues.image,
    products: await Product.getProductByCategory('tea')
  }
  data.push(tea)

  const ca_cake = await Category.getInfoByCategory('cake')
  let cake = {
    name: ca_cake[0].dataValues.name,
    image: ca_cake[0].dataValues.image,
    products: await Product.getProductByCategory('cake')
  }
  data.push(cake)

  const ca_fry = await Category.getInfoByCategory('fry')
  let fry = {
    name: ca_fry[0].dataValues.name,
    image: ca_fry[0].dataValues.image,
    products: await Product.getProductByCategory('fry')
  }
  data.push(fry)

  ctx.body = {
    errorCode: 0,
    message: '请求成功',
    data
  }

})


// 根据分类获取数据，一个是顶部的图，一个是产品
// productRouter.get('/category/:category', async (ctx) => {
//   const category = ctx.params.category
//   if (!category) {
//     throw new Error('category为必传参数')
//   }
//   ctx.body = {
//     category
//   }
// })

// 根据主题取数据
productRouter.get('/theme/:theme', async (ctx) => {
  const theme = ctx.params.theme
  if (!theme) {
    throw new Error('theme为必传参数')
  }
  const themeData = {
    image: await ThemeHead.getImageByTheme(theme),
    products: await Product.getProductByTheme(theme)
  }
  ctx.body = {
    errorCode: 0,
    message: '请求成功',
    data: themeData
  }
})

// 根据 id 号获取数据
productRouter.get('/detail/:id', async (ctx) => {
  const id = ctx.params.id
  if (!id) {
    throw new Error('id为必传参数')
  }
  const product = await Product.getProductById(id)
  if (product) {
    ctx.body = {
      errorCode: 0,
      message: '请求成功',
      data: product
    }
  }
})

/**
 * 生成订单
 * 逐一检测带生成的订单中的货物余货是否充足
 * 一旦有一个商品存货不够，则生成订单失败
 */
productRouter.post('/order', new Auth().verify(), async (ctx) => {
  const v = await new ValidateOrder().validate(ctx)
  const products = v.get('body.products')
  /**
   * 检测库存
   * 这里目前只能使用最原始的遍历
   */
  let isEnough
  for (let i = 0; i < products.length; i ++) {
    if (!(await Product.isEnough(products[i].id, products[i].count))) {
      isEnough = false
      break;
    }
    isEnough = true
  }
  if (!isEnough) {
    throw new NotEnough()
  }

  // 检测成功，减掉用户待购买数量
  for (let j = 0; j < products.length; j ++) {
    await Product.reduceAmount(products[j].id, products[j].count)
  }

  /**
   * 设置订单信息，订单概述、订单缩略图
   * title coverImage
   */
  const obj = getTitle(products)

  // 生成订单
  
  const allObj = {
    username: v.get('body.username'),
    receiver: v.get('body.receiver'),
    address: v.get('body.address'),
    tel: v.get('body.tel'),
    allCount: v.get('body.allCount'),
    account: v.get('body.account'),
    coverImage: obj.coverImage,
    title: obj.title,
    products: JSON.stringify(v.get('body.products')),
    serialNumber: 'C' + new Date().getTime() + generateRandom(1000, 9999),
    paymentStatus: false
  }

  const res = await Order.addOrder(allObj)
  if (res) {
    ctx.body = {
      errorCode: 0,
      message: '订单创建成功',
      id: res.id
    }
  }
})

// 正式付款，根据订单 id 号
productRouter.post('/order/ordering', new Auth().verify(), async (ctx) => {
  const v = await new PositiveParameter().validate(ctx)
  const id = v.get('body.id')
  const res = await Order.Ordering(id)
  if (res) {
    ctx.body = {
      errorCode: 0,
      message: '付款成功'
    }
  }
})

// 获取所有订单
productRouter.post('/order/all', new Auth().verify(), async (ctx) => {
  const username = ctx.request.body.username
  if (!username) {
    throw new Error('username为必传参数')
  }
  const res = await Order.getOrderByUser(username)
  ctx.body = {
    errorCode: 0,
    message: '获取成功',
    orderList: res
  }
})

module.exports = productRouter
