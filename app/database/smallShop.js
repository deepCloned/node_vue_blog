const Sequelize = require('sequelize')

const sequelize = new Sequelize('shop', 'root', '123123111', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
  loggind: true,
  timezone: '+08:00',
  define: {
    timestampes: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true
  }
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been eatablished succsss')
  })
  .catch((error) => {
    console.log('There is something wrond in server', error)
  })

sequelize.sync({
  force: false
})

module.exports = sequelize
