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

// 分类类型检验
class CategoryValidator extends LinValidator{

  // validateCategory (vals) {
  //   const category = vals.body.category
  //   console.log(category)
  //   if (!category) {
  //     throw new Error('category为必传值')
  //   }
  //   const isLegal = getCategoryIn(category)
  //   if (!isLegal) {
  //     throw new Error('category传值不合法')
  //   }
  // }
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
 * validate blog
 */
class BlogValidator extends LinValidator {
  constructor () {
    super()
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

module.exports = {
  PositiveParameter,
  RegisterValidator,
  LoginValidator,
  CategoryValidator,
  CommentValidator,
  KeywordValidator,
  BlogValidator,
  DetailValidator
}
