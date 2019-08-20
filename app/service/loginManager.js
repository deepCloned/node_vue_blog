const User = require('../model/user')

const {
  generateToken
} = require('../../core/util')

class LoginManager {
  static async judgePassword ({account, password, type}) {
    const user = await User.comparePassword(account, password, type)
    return await generateToken(account, 8)
  }
}

module.exports = LoginManager