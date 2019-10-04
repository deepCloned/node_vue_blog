const Router = require('koa-router')

const {
  ValidateRegister,
  ValidateAddress,
} = require('../../validator/validator')
const {
  Success,
  Fail
} = require('../../exception/httpException')

const { generateToken } = require('../../../core/util')
const Auth = require('../../../middleware/auth')

const User = require('../../model/smallShop/user')
const Address = require('../../model/smallShop/address')

const user = new Router({
  prefix: '/v2/user'
})

user.post('/register', async(ctx) => {
  // 验证参数
  const v = await new ValidateRegister().validate(ctx)
  // 获取参数
  const username = v.get('body.username')
  const password = v.get('body.password')
  // 取得注册结果
  const res = await User.addUser(username, password)
  if (res) {
    throw new Success('注册成功')
  }
})

// 登录成功，颁布token
user.post('/token', async (ctx) => {
  const v = await new ValidateRegister().validate(ctx)
  const username = v.get('body.username')
  const password = v.get('body.password')
  const res = await User.validatePassword(username, password)
  // 密码比对成功，颁布token
  var token = null
  if (res) {
    token = generateToken(username, 8)
    ctx.body = {
      username,
      token: token,
      message: 'token生成成功'
    }
  }
})

// 验证token是否过期，或者使用了一个错误的token
user.get('/token/verify', new Auth().verify(), async (ctx) => {
  throw new Success('token验证成功')
})

// 获取用户地址
user.post('/address/get', new Auth(7).verify(), async (ctx) => {
  const username = ctx.request.body.user
  const res = await Address.getAddress(username)
  // 处理原始地址信息，处理成前端直接能用的
  const checkedRes = []
  for (let item of res) {
    let obj = {
      id: item.id,
      name: item.name,
      tel: item.tel,
      address: item.province + item.city + item.county + item.addressDetail,
      isDefault: item.isDefault
    }
    checkedRes.push(obj)
  }
  ctx.body = {
    errorCode: 0,
    message: '请求成功',
    addresses: checkedRes
  }
})

// 新增用户地址
user.post('/address/add', new Auth(7).verify(), async (ctx) => {
  const v = await new ValidateAddress().validate(ctx)
  const res = await Address.addAddress({
    user: v.get('body.user'),
    name: v.get('body.name'),
    country: v.get('body.country'),
    province: v.get('body.province'),
    city: v.get('body.city'),
    county: v.get('body.county'),
    addressDetail: v.get('body.addressDetail'),
    tel: v.get('body.tel'),
    postalCode: v.get('body.postalCode'),
    isDefault: v.get('body.isDefault')
  })
  if(res._options.isNewRecord) {
    throw new Success('添加新地址成功')
  }
})

// 修改原有地址，根据id号
user.post('/address/change/:id', new Auth(7).verify(), async (ctx) => {
  // 参数不传指向另一个路由，不知如何办
  const id = ctx.params.id
  if (!id) {
    throw new Fail('id值不能为空')
  }
  const v = await new ValidateAddress().validate(ctx)
  const res = await Address.changeAddress({
    id: id,
    name: v.get('body.name'),
    country: v.get('body.country'),
    province: v.get('body.province'),
    city: v.get('body.city'),
    county: v.get('body.county'),
    addressDetail: v.get('body.addressDetail'),
    tel: v.get('body.tel'),
    postalCode: v.get('body.postalCode'),
    isDefault: v.get('body.isDefault')
  })
  if (!res) {
    throw new Fail('修改失败')
  }
  throw new Success('修改地址成功')
})

// 删除原有地址
user.get('/address/delete/:id', new Auth(7).verify(), async (ctx) => {
  const id = ctx.params.id
  const res = await Address.deleteAddress(id)
  if (!res) {
    throw new Fail('删除失败')
  }
  throw new Success('删除地址成功')
})

module.exports = user
