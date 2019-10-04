const Sequelize = require('sequelize')
const sequelize = require('../../database/smallShop')

const { NotFound } = require('../../exception/httpException')

const Model = Sequelize.Model

class Address extends Model {
  // 获取用户添加过的地址
  static async getAddress (user) {
    return await Address.findAll({
      where: {
        user
      },
      attributes: ['id', 'name', 'province', 'city', 'county', 'addressDetail', 'tel', 'isDefault']
    })
  }

  // 新增地址
  static async addAddress ({user, name, country, province, city, county, addressDetail, tel, postalCode, isDefault}) {
    return await Address.create({
      user,
      name,
      country,
      province,
      city,
      county,
      addressDetail,
      tel,
      postalCode,
      isDefault
    })
  }

  // 修改地址
  static async changeAddress ({id, name, country, province, city, county, addressDetail, tel, postalCode, isDefault}) {
    const res = await Address.getAddressById(id)
    if (!res) {
      throw new NotFound('没有找到相关数据')
    }
    return await res.update({
      name,
      country,
      province,
      city,
      county,
      addressDetail,
      tel,
      postalCode,
      isDefault
    })
  }

  // 删除地址，根据id号
  static async deleteAddress (id) {
    const res = await Address.getAddressById(id)
    if (!res) {
      throw new NotFound('您已经删除过了')
    }
    return await res.destroy()
  }

  // 根据id号查找数据
  static async getAddressById (id) {
    return await Address.findOne({
      where: {
        id
      }
    })
  }
}

Address.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  tel: {
    type: Sequelize.STRING
  },
  postalCode: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  },
  province: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  county: {
    type: Sequelize.STRING
  },
  addressDetail: {
    type: Sequelize.STRING
  },
  isDefault: {
    type: Sequelize.BOOLEAN
  }
}, { sequelize })

module.exports = Address