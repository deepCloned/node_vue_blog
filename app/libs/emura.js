// 定义登录的类型，是通过用户名还是邮箱，给一个特定的code，前面通过传递code来辨认登录方式
const loginType = {
  USERNAME: 100,
  EMAIL: 101,
  isIncludeType
}

// 定义搜索类型，控制前端传递的类型
const searchType = {
  title: 200,
  content: 201,
  isIncludeType
}

function isIncludeType(type) {
  for (let key in this) {
    if (this[key] === type) {
      return true
    }
  }
}

const categoryList = {
  'reading': '读书',
  'story': '故事',
  'mental': '心理',
  'financial': '理财',
  'everything': '万物',
  'young': '青春',
  'culture': '文化',
  getCategoryIn,
  getCategoryValue
}

function getCategoryIn(category) {
  for (let key in this) {
    if (key === category) {
      return true
    }
  }
}

function getCategoryValue(category) {
  return this[category]
}

module.exports = {
  loginType,
  categoryList,
  searchType
}