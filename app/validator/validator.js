const {
  Rule,
  LinValidator
} = require('../../core/lin-validator-v2.js')

const {
  loginType,
  getCategoryIn,
  searchType
} = require('../libs/emura')

const {
  ParameterException
} = require('../exception/httpException')


class PositiveParameter extends LinValidator {
  constructor () {
    super()
    this.id = [
      new Rule('isInt', '参数必须为正整数')
    ]
  }
}
class RegisterValidator extends LinValidator {
  constructor () {
    super()
    this.username = [
      new Rule('isLength', '最少6个字符，最多32个字符', {
        min: 6,
        max: 32
      })
    ]
    this.email = [
      new Rule('isEmail', '邮箱不符合规范')
    ]
    this.password = [
      new Rule('matches', '密码不符合规范，需至少数字+字母搭配', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]')
    ]
    this.confirmPassword = this.password
  }

  // 检验两次密码
  validatePassword (vals) {
    const password = vals.body.password
    const confirmPassword = vals.body.confirmPassword
    if (password !== confirmPassword) {
      throw new Error('两次输入密码不一致，请核对后重试')
    }
  }

}

// 登录检测
class LoginValidator extends LinValidator {
  constructor () {
    super()
    // this.username = [
    //   new Rule('isOptional'),
    //   new Rule('isLength', '最少6个字符，最多32个字符', {
    //     min: 6,
    //     max: 32
    //   })
    // ]
    // this.email = [
    //   new Rule('isOptional'),
    //   new Rule('isEmail', '邮箱不符合规范')
    // ]
    this.account = [
      new Rule('isLength', '账户不能为空', {
        min: 0,
        max: 32
      })
    ]
    this.password = [
      new Rule('matches', '密码不符合规范，需至少数字+字母搭配', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]')
    ]
  }

  // 检验type值
  validateType (vals) {
    const type = vals.body.type
    if (!type) {
      throw new ParameterException('type为必传值')
    }
    const isLegal = loginType.isIncludeType(parseInt(type))
    console.log('isLegal is', isLegal)
    if (!isLegal) {
      throw new ParameterException('type传值不合法')
    }
  }

}

// 检测评论内容
class CommentValidator extends LinValidator{
  constructor() {
    super()
    this.username = [
      new Rule('isLength', '用户名不能为空，最少6个字符，最多32个字符', {
        min: 6,
        max: 32
      })
    ]
    this.comment = [
      new Rule('isLength', '评论内容不能为空', {
        min: 6,
        max: 256
      })
    ]
  }
}

// 检测关键词
class KeywordValidator extends LinValidator {
  constructor () {
    super()
  }

  validateType (vals) {
    const type = vals.path.type
    if (!type) {
      throw new ParameterException('type为必传值')
    }
    const isLegal = searchType.isIncludeType(parseInt(type))
    if (!isLegal) {
      throw new ParameterException('type传值不合法')
    }
  }

  validateKeyword (vals) {
    const keyword = vals.path.keyword
    if (!keyword) {
      throw new ParameterException('关键词不能为空')
    }
  }
}


/**
 * get detail validate
 */
class DetailValidator extends LinValidator {
  constructor () {
    super()
    this.username = [
      new Rule('isOptional'),
      new Rule('isLength', '最少6个字符，最多32个字符', {
        min: 6,
        max: 32
      })
    ]
    this.id = [
      new Rule('isInt', 'id值必须为正整数')
    ]
  }
}

// small shop 验证
class ValidateRegister extends LinValidator {
  constructor () {
    super()
    this.username = [
      new Rule('isLength', '用户名不能为空，最少6个字符，最多32个字符', {
        min: 6,
        max: 32
      })
    ]
    this.password = [
      new Rule('matches', '至少使用数字、字母、符号其中的两种', '(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,16}$')
    ]
  }

}

// 分类的验证
class ValidateCategory extends LinValidator {
  constructor () {
    super()
    this.category = [
      new Rule('isString', 'category值不能为空')
    ]
  }
}

// 主题的验证
class ValidateTheme extends LinValidator {
  constructor () {
    super()
    this.theme = [
      new Rule('isString', 'theme值不能为空')
    ]
  }
}

// 新增地址的验证
class ValidateAddress extends LinValidator {
  constructor () {
    super()
    this.user = new Rule('isNotEmpty', '用户名不能为空')
    this.name = new Rule('isNotEmpty', '收货人不能为空')
    this.mobile = new Rule('isNotEmpty', '手机号码不符合规范', '^1[3456789]\d{9}$')
    this.area = new Rule('isNotEmpty', '地区不能为空')
    this.address = new Rule('isNotEmpty', '详细详细地址不能为空')
  }
}

// 新增订单的验证
class ValidateOrder extends LinValidator {
  constructor () {
    super()
    this.username = new Rule('isNotEmpty', '用户名不能为空')
    this.receiver = new Rule('isNotEmpty', '收货人不能为空')
    this.address = new Rule('isNotEmpty', '收货地址不能为空')
    this.tel = new Rule('isNotEmpty', '手机号码不符合规范', '^1[3456789]\d{9}$')
    this.allCount = new Rule('isNotEmpty', '总数量不能为空')
    this.account = new Rule('isNotEmpty', '总价不能为空')
    this.products = new Rule('isNotEmpty', '商品列表不能为空')
  }
}

module.exports = {
  PositiveParameter,
  RegisterValidator,
  LoginValidator,
  CommentValidator,
  KeywordValidator,
  DetailValidator,
  ValidateRegister,
  ValidateCategory,
  ValidateTheme,
  ValidateAddress,
  ValidateOrder,
}
