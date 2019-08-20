const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')

const Model = Sequelize.Model

const sequelize = require('../database/sequelize')

const { loginType } = require('../libs/emura')

const {
  NotFound
} = require('../exception/httpException')

class User extends Model {

  // 判断用户名是否存在
  // 不存在返回null，存在返回该条字段
  static async getUserByUsername (username) {
    return await User.findOne({
      where: {
        username: username
      }
    })
  }

  // 邮箱是否存在
  static async getUserByEmail (email) {
    return await User.findOne({
      where: {
        email: email
      }
    })
  }

  // 根据用户名查询id号
  static async getUserId (username) {
    return await User.findOne({
      where: {
        username: username
      },
      attributes: ['id']
    })
  }

  // get username by id
  static async getUsername (id) {
    const user = await User.findOne({
      where: {
        id
      }
    })
    return user.username
  }

  // 用户名登录判断密码
  static async comparePassword (account, password, type) {
    var user = null
    if (type === loginType.USERNAME) {
      user = await User.getUserByUsername(account)
    }
    if (type === loginType.EMAIL) {
      user = await User.getUserByEmail(account)
    }
    console.log('account is', account)
    console.log('type is', typeof type)
    if (!user) {
      throw new NotFound('用户不存在')
    }
    User.username = user.username
    const realPassword = user.password
    const result = bcrypt.compareSync(password, realPassword)
    if (!result) {
      throw new Error('密码错误')
    }
    return user
  }

  // 加密
  static async encrypt (val) {
    const _this = this
      bcrypt.genSalt(degree, function (error, salt) {
        if (error) {
          throw new Error('密码加盐发生错误')
        }
        console.log('salt is', salt)
        bcrypt.hash(val, salt, function (error, hash) {
          console.log('encrypt val is', val)
          if (error) {
            throw new Error('密码加密发生错误')
          }
          console.log('encrypt hash is', hash)
          _this.setDataValue('password', hash)
        })
      })
  }
}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    set (val) {
      const degree = 10
      let salt = bcrypt.genSaltSync(degree)
      let hash = bcrypt.hashSync(val, salt)
      this.setDataValue('password', hash)
    }
  }
}, {
  sequelize
})

module.exports = User
