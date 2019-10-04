const Sequelize = require('sequelize')
const sequelize = require('../../database/smallShop')
const bcrypt = require('bcryptjs')

const {
  UserExistedException,
  NotFound,
  Fail
} = require('../../exception/httpException')

const Model = Sequelize.Model

class User extends Model {
  /**
   * 注册
   * 通过用户名去查找是否存在
   * 如果存在，抛出异常提示用户重新输入用户名
   * 如果不存在，写入数据库
   */
  static async addUser (username, password) {
    const isExited = await User.findOne({
      where: {
        name: username
      }
    })
    if (isExited) {
      throw new UserExistedException()
    } else {
      const res = await User.create({
        name: username,
        password: password
      })
      return res
    }
  }

  // 登录验证用户名和密码
  static async validatePassword (username, password) {
    const user = await User.findOne({
      where: {
        name: username
      }
    })
    if (!user) {
      throw new NotFound('该用户不存在，核对后重试')
    }
    const realPassword = user.password
    const res = bcrypt.compareSync(password, realPassword)
    if (!res) {
      throw new Fail('密码不正确')
    }
    return user
  }
}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  openId: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    set (val) {
      const degreen = 10
      let salt = bcrypt.genSaltSync(degreen)
      let hash = bcrypt.hashSync(val, salt)
      this.setDataValue('password', hash)
    }
  }
}, {
  sequelize
})

module.exports = User