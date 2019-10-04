const Sequelize = require('sequelize')
const sequelize = require('../../database/smallShop')

const {
  NotFound,
  Fail
} = require('../../exception/httpException')

const Model = Sequelize.Model

class Order extends Model {
  // 写入数据
  static async addOrder (data) {
    return await Order.create({
      username: data.username,
      receiver: data.receiver,
      address: data.address,
      tel: data.tel,
      allCount: data.allCount,
      account: data.account,
      coverImage: data.coverImage,
      title: data.title,
      products: data.products,
      serialNumber: data.serialNumber,
      paymentStatus: data.paymentStatus
    })
  }

  // 更改订单状态
  static async changePaymentStatus (id, status) {
    let order = await Order.getOrderById(id)
    if (!order) {
      throw new NotFound('对不起，订单不存在')
    }
    return await order.updata({
      paymentStatus: status
    })
  }

  // 根据 id 号查找订单
  static async getOrderById (id) {
    return await Order.findOne({
      where: {
        id
      }
    })
  }

  // 获取某一用户所有的订单
  static async getOrderByUser (username) {
    return await Order.findAll({
      where: {
        username
      }
    })
  }

  // 用户付款成功，更改订单状态
  static async Ordering (id) {
    const order = await Order.getOrderById(id)
    if (!order) {
      throw new NotFound('该订单不存在，请稍后重试')
    }
    if (order.paymentStatus) {
      throw new Fail('该订单已付款，请勿重复付款', 400, 10006)
    }
    return order.update({
      paymentStatus: true
    })
  }
}

/**
 * 用户名 收货人 手机号 地址 数量 总价 缩略图  订单标题 具体商品（图片，id， 商品名，数量，价格）、订单编号、下单时间、付款状态
 */

Order.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  receiver: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tel: {
    type: Sequelize.STRING,
    allowNull: false
  },
  allCount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  account: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  coverImage: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  products: {
    type: Sequelize.JSON,
    allowNull: false
  },
  serialNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  paymentStatus: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, { sequelize })

module.exports = Order
