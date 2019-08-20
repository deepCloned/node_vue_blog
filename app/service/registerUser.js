const User = require('../model/user')

const {
  UserExistedException
} = require('../exception/httpException')

class RegisterUserManager {
  // 插入数据
  static async insertUserData ({username, email, password}) {
    const userExist = await User.getUserByUsername(username)
    console.log('userExist is', userExist)
    const emailExist = await User.getUserByEmail(email)
    if (userExist) {
      throw new UserExistedException()
    }
    if (emailExist) {
      throw new UserExistedException('邮箱已存在，请重试')
    }
    return User.create({
      username,
      email,
      password
    })
  }
}

module.exports = RegisterUserManager