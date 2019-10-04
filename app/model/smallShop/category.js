const Sequelize = require('sequelize')
const sequelize = require('../../database/smallShop')

const Model = Sequelize.Model

class Category extends Model {
  static async getInfoByCategory (category) {
    return await Category.findAll({
      where: {
        category
      }
    })
  }
}

Category.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
}, {
  sequelize
})

module.exports = Category