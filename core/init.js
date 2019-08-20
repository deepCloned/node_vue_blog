const userRouter = require('../app/api/v1/user')
const tokenRouter = require('../app/api/v1/token')
const blogRouter = require('../app/api/v1/blog')


class Initialize {
  static loaderRouter (app) {
    app.use(userRouter.routes()).use(userRouter.allowedMethods())
    app.use(tokenRouter.routes()).use(tokenRouter.allowedMethods())
    app.use(blogRouter.routes()).use(blogRouter.allowedMethods())
  }
}

module.exports = Initialize