const basicAuth = require('basic-auth')
const jwt = require('jsonwebtoken')

const {
  secretKey
} = require('../config/config').security

const {
  Forbidden,
  Success,
} = require('../app/exception/httpException')

class Auth {
  constructor (level) {
    this.level = level
    
    // 设置权限等级
    Auth.USER = 8
    Auth.ADMIN = 16
  }
  verify () {
    var self = this
    return async (ctx, next) => {
      const token = basicAuth(ctx.req)
      if (!token || !token.name) {
        throw new Forbidden('token不存在，请登录后以获得更好体验')
      }

      try {
        // 使用var代替letconst，要不然外部访问不到，块级作用域
        var result = await jwt.verify(token.name, secretKey)
      } catch (error) {
        if (error.name === 'JsonWebTokenError') {
          throw new Forbidden('token不合法')
        }
        if (error.name === 'TokenExpiredError') {
          throw new Forbidden('token已过期，请重新登录')
        }
      }

      // 验证成功
      ctx.auth = result
      if (ctx.auth.scope < this.level) {
        throw new Forbidden('权限不足，不能访问')
      }

      await next()
    }
  }
}

module.exports = Auth

// TokenExpiredError -- 过期
// JsonWebTokenError -- 不合法
