const Sequelize = require('sequelize')
const sequelize = require('../../database/smallShop')

const Model = Sequelize.Model

class Theme extends Model {
  static async getTheme () {
    return await Theme.findAll()
  }
}

Theme.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  theme: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  }
}, {
  sequelize
})

module.exports = Theme