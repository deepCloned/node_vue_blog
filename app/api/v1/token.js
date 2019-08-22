const Router = require('koa-router')

const LoginManager = require('../../service/loginManager')

const { loginType } = require('../../libs/emura')

const User = require('../../model/user')

const Auth = require('../../../middleware/auth')

const {
  LoginValidator
} = require('../../validator/validator')

const {
  Success
} = require('../../exception/httpException')

const tokenRouter = new Router({
  prefix: '/v1'
})

tokenRouter.post('/token', async (ctx, next) => {
  let loginV = await new LoginValidator().validate(ctx)
  const type = loginV.get('body.type')
  var token = null
  switch (type) {
    case loginType.USERNAME:
      token = await LoginManager.judgePassword({
        account: loginV.get('body.account'),
        password: loginV.get('body.password'),
        type: type
      })
      ctx.body = {
        token: token,
        message: 'token生成成功',
        username: User.username
      }
      break;
    case loginType.EMAIL:
      token = await LoginManager.judgePassword({
        account: loginV.get('body.account'),
        password: loginV.get('body.password'),
        type: type
      })
      ctx.body = {
        token: token,
        message: 'token生成成功',
        username: User.username
      }
      break;
    default:
      break;
  }
})

tokenRouter.get('/token/verify', new Auth().verify(), async (ctx) => {
  ctx.body = {
    message: 'token验证成功',
    errorCode: 0
  }
})

module.exports = tokenRouter
