const fs = require('fs')

const Product = require('../../app/model/smallShop/product')
const Banner = require('../../app/model/smallShop/banner')
const Category = require('../../app/model/smallShop/category')
const Theme = require('../../app/model/smallShop/theme')
const ThemeHead = require('../../app/model/smallShop/themeHead')

// 初始化数据
class LoadFile {
  // 读取文件
  static readFiles (_path) {
    return new Promise(function (resolve, reject) {
      fs.readFile(_path, 'utf8', function (err, res) {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }

  // 遍历产品
  static getProduct (arr) {
    arr.forEach((ele, index) => {
      Product.create({
        productId: ele.productId,
        title: ele.title,
        theme: ele.theme,
        category: ele.category,
        price: ele.price,
        amount: ele.amount,
        image: ele.image,
      })
    })
  }

  // banner
  static getBanner (arr) {
    arr.forEach((ele) => {
      Banner.create({
        productId: ele.productId,
        image: ele.image
      })
    })
  }

  // theme
  static getTheme (arr) {
    arr.forEach((ele) => {
      Theme.create({
        theme: ele.theme,
        image: ele.image
      })
    })
  }

  // category
  static getCatgory (arr) {
    arr.forEach((ele) => {
      Category.create({
        category: ele.category,
        image: ele.image,
        name: ele.name
      })
    })
  }

  // themeHead
  static getThemeHead (arr) {
    arr.forEach((ele) => {
      ThemeHead.create({
        theme: ele.theme,
        headImage: ele.headImage
      })
    })
  }
}

const product = LoadFile.readFiles('./product.json')
product.then(res => {
  res = JSON.parse(res)
  const dataList = res.product
  LoadFile.getProduct(dataList)
})

const banner = LoadFile.readFiles('./banner.json')
banner.then(res => {
  res = JSON.parse(res)
  const dataList = res.banner
  LoadFile.getBanner(dataList)
})

const category = LoadFile.readFiles('./category.json')
category.then(res => {
  res = JSON.parse(res)
  const dataList = res.category
  LoadFile.getCatgory(dataList)
})

const theme = LoadFile.readFiles('./theme.json')
theme.then(res => {
  res = JSON.parse(res)
  const dataList = res.theme
  LoadFile.getTheme(dataList)
})

const themeHead = LoadFile.readFiles('./themeHead.json')
themeHead.then(res => {
  res = JSON.parse(res)
  const dataList = res.head
  LoadFile.getThemeHead(dataList)
})