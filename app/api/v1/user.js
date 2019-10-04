const Router = require('koa-router')
const path = require('path')

const {
  RegisterValidator,
  LoginValidator
} = require('../../validator/validator')

const Auth = require('../../../middleware/auth')

const RegisterUser = require('../../service/registerUser')
const LoginManager = require('../../service/loginManager')

const {
  Success
} = require('../../exception/httpException')

const Comment = require('../../model/comment')
const Blog = require('../../model/blog')
const Favor = require('../../model/favor')

const userRouter = new Router({
  prefix: '/v1/user'
})

// 注册（登录的时候直接获取 token）
userRouter.post('/register', async (ctx) => {
  const v = await new RegisterValidator().validate(ctx)
  const result = await RegisterUser.insertUserData({
    username: await v.get('body.username'),
    email: await v.get('body.email'),
    password: await v.get('body.password')
  })
  if (result) {
    throw new Success('注册成功')
  }
})

// 我的
userRouter.get('/my', new Auth(7).verify(), async (ctx) => {
  const username = ctx.auth.account
  const blogRes = await Blog.getBlogByAuthor(username)
  ctx.body = blogRes
})

userRouter.get('/like', new Auth(7).verify(), async (ctx) => {
  const username = ctx.auth.account
  const blogRes = await Favor.getBlogListByLikeId(username)
  ctx.body = blogRes
})


module.exports = userRouter
