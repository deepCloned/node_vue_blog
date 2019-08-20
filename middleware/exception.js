const { ENV } = require('../config/config')
const { HttpException } = require('../app/exception/httpException')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
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