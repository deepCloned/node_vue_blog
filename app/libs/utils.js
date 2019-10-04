/**
 * 生成任意两个数之间的随机数
 */
const generateRandom = function (start, end) {
  return Math.floor(Math.random() * (end - start + 1) + 1)
}

/**
 * 生成订单信息，缩略图、订单概述
 * 如果用户名只买了一种商品，就使用它的标题、图片
 * 如果用户买了多种，就使用第一个商品的标题+等、图片
 */
const getTitle = function (arr) {
  const obj = {
    title: null,
    coverImage: null
  }
  if (arr.length === 1) {
    obj.title = arr[0].name
    obj.coverImage = arr[0].image
  } else {
    obj.title = arr[0].name + '等'
    obj.coverImage = arr[0].image
  }
  return obj
}

module.exports = {
  generateRandom,
  getTitle
}
