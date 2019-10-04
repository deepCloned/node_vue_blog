const Sequelize = require('sequelize')
const sequelize = require('../../database/smallShop')

const {
  NotFound
} = require('../../exception/httpException')

const Model = Sequelize.Model

class Product extends Model {
  // 获取最新数据
  static async getNew () {
    return await Product.findAll({
      order: [['id', 'DESC']],
      limit: 14
    })
  }

  // 分类查找数据
  static async getProductByCategory (category) {
    return await Product.findAll({
      where: {
        category
      }
    })
  }

  // 主题查找数据
  static async getProductByTheme (theme) {
    return await Product.findAll({
      where: {
        theme
      }
    })
  }

  // 根据 id 号获取数据
  static async getProductById (id) {
    return await Product.findOne({
      where: {
        productId: id
      }
    })
  }

  // 用户购买货物，生成订单之前检查商品数量是否足够
  static async isEnough (id, count) {
    const product = await Product.getProductById(id)
    if (!product) {
      throw new NotFound('对不起，您购买的货物不存在')
    }
    if (product.amount - count < 0) {
      return false
    } else {
      return true
    }
  }

  // 根据待生成订单操作商品库存数量
  static async reduceAmount (id, count) {
    // 既然已经通过订单检测，就一定存在不需要在判断
    const product = await Product.getProductById(id)
    return product.decrement('amount', {by: count})
  }
}

Product.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // 关联详情、产品参数、售后保障表
  productId: {
    type: Sequelize.INTEGER,
    unique: true
  },
  title: {
    type: Sequelize.STRING
  },
  theme: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT
  },
  amount: {
    type: Sequelize.INTEGER
  },
  image: {
    type: Sequelize.STRING
  }
}, {
  sequelize
})

module.exports = Product