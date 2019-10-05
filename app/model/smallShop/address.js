const Sequelize = require('sequelize')
const sequelize = require('../../database/smallShop')

const { NotFound } = require('../../exception/httpException')

const Model = Sequelize.Model

class Address extends Model {
  // 获取用户添加过的地址
  static async getAddress (user, flag) {
    if (flag) {
      return await Address.findAll({
        where: {
          user,
          isDefault: true
        },
        attributes: ['id', 'name', 'province', 'city', 'county', 'addressDetail', 'tel', 'isDefault']
      })
    }
    return await Address.findAll({
      where: {
        user
      },
      attributes: ['id', 'name', 'province', 'city', 'county', 'addressDetail', 'tel', 'isDefault']
    })
  }

  // 新增地址
  static async addAddress ({user, name, country, province, city, county, addressDetail, tel, postalCode, isDefault}) {
    const address = await Address.getAddress(user)
    /**
     * 如果用户还没有创建过地址，则第一次创建的地址直接设置为默认地址（不管用户有没有设置）
     * 用户已经创建过地址（为默认），则如果心创建的地址设置为默认，则先把数据中原本为默认的修改为非默认，再添加本条数据
     * 如果新创建的地址不为默认，则直接写入数据库
     */
    if (address.length === 0) {
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
        isDefault: true
      })
    }

    // 用户新建了地址的时候同时设置了为默认地址
    if (isDefault === true) {
      const defaultAddress = await Address.getAddress(user, true)
      await defaultAddress[0].update({
        isDefault: false
      })
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
    
    // 用户新建地址的时候没有设置为默认地址，且数据库中已有数据，直接写入即可
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