const userRouter = require('../app/api/v1/user')
const tokenRouter = require('../app/api/v1/token')
const blogRouter = require('../app/api/v1/blog')

const user = require('../app/api/v2/user')
const productRouter = require('../app/api/v2/product')

// 加载全部路由
class Initialize {
  static loaderRouter (app) {
    app.use(userRouter.routes()).use(userRouter.allowedMethods())
    app.use(tokenRouter.routes()).use(tokenRouter.allowedMethods())
    app.use(blogRouter.routes()).use(blogRouter.allowedMethods())

    app.use(user.routes()).use(user.allowedMethods())
    app.use(productRouter.routes()).use(productRouter.allowedMethods())
  }
}

module.exports = Initialize