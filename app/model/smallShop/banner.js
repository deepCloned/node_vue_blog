const Sequelize = require('sequelize')
const sequelize = require('../../database/smallShop')

const Model = Sequelize.Model

class Banner extends Model {
  // 查找所有数据
  static async getBanner () {
    return await Banner.findAll()
  }
}

Banner.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productId: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  }
}, {
  sequelize
})

module.exports = Banner
