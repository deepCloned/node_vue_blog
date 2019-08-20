// 定义异常基类，继承自Error
class HttpException extends Error {
  constructor (message='出现未知错误', code=400, errorCode=10000) {
    super()
    this.message = message
    this.code = code
    this.errorCode = errorCode
  }
}

// 传参异常
class ParameterException extends HttpException {
  constructor (message='传参异常', code=400, errorCode = 10001) {
    super()
    this.message = message
    this.code = code
    this.errorCode = errorCode
  }
}

// 用户已存在，请重试
class UserExistedException extends HttpException {
  constructor (message='该用户名已存在，请重试', code=400, errorCode=10002) {
    super(message, code, errorCode)
  }
}

// 操作成功
class Success extends HttpException {
  constructor (message='操作成功', code=200, errorCode=0) {
    super(message, code, errorCode)
  }
}

// 操作失败
class Fail extends HttpException {
  constructor (message='操作失败', code=400, errorCode=10005) {
    super(message, code, errorCode)
  }
}

// 禁止访问
class Forbidden extends HttpException {
  constructor (message='禁止访问', code=403, errorCode=10003) {
    super(message, code, errorCode)
  }
}

// 没有找到数据
class NotFound extends HttpException {
  constructor (message='没有找到任何数据', code=404, errorCode=10004) {
    super(message, code, errorCode)
  }
}

// const exceptionErrorCode = {
//   10000: '未知异常，一般是服务器端错误',
//   10001: '传参异常'，
//   10003: '禁止访问',
//   10004: '没有找到数据'
// }


module.exports = {
  HttpException,
  ParameterException,
  UserExistedException,
  Success,
  Fail,
  Forbidden,
  NotFound
}
