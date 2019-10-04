const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const serve = require('koa-static')
const path = require('path')

const { PORT } = require('./config/config')

const Initialize = require('./core/init')

const catchError = require('./middleware/exception')

const app = new Koa()

// 初始化时调用
// require('./app/model/user')
// require('./app/model/blog')
// require('./app/model/comment')
// require('./app/model/favor')

// 创建shop里面所有的表
const initShop = require('./core/initShop')
initShop()

app.use(cors())

app.use(bodyParser())

app.use(catchError)

app.use(serve(path.join(__dirname) + '/public'))

Initialize.loaderRouter(app)

app.listen(PORT)