const { ENV } = require('../config/config')
const { HttpException } = require('../app/exception/httpException')

// 定义中间件捕获全局错误
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    /**
     * 取得环境变量
     * 如果是开发环境下且错误类型不是我们自定义的类型，直接抛出错误（方便调试）
     * 如果是开发环境且抛出错误是自定义类型，则通过返回值反馈给前端
     * 如果不是开发环境且错误为原始错误，通过一个特定的code返回给前端，告知位置错误
     */
    const isDev = ENV === 'dev'
    const isHttpException = error instanceof HttpException
    if (isDev && !isHttpException) {
      throw error
    }
    if (isHttpException) {
      ctx.body = {
        errorCode: error.errorCode,
        message: error.message,
        path: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    }
    else {
      ctx.body = {
        errorCode: 99999,
        message: '发生了一个未知错误',
        path: `${ctx.method} ${ctx.path}`
      }
      ctx.status = 500
    }
  }
}

module.exports = catchError