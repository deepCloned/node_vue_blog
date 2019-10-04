// 定义全局变量
module.exports = {
  PORT: 3000,
  ENV: 'dev',
  db: {
    database: 'blog',
    username: 'root',
    password: '123123111',
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
  },
  security: {
    secretKey: 'helloworld',
    expiresIn: 60 * 60 * 24 * 5
  }
}