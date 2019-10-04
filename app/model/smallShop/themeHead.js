const Sequelize = require('sequelize')
const sequelize = require('../../database/smallShop')

const Model = Sequelize.Model

class ThemeHead extends Model {
  static getImageByTheme (theme) {
    return ThemeHead.findAll({
      where: {
        theme
      }
    })
  }
}

ThemeHead.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  theme: {
    type: Sequelize.STRING
  },
  headImage: {
    type: Sequelize.STRING
  }
}, {
  sequelize
})

module.exports = ThemeHead