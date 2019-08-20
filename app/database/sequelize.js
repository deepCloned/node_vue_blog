const Sequelize = require('sequelize')

const {
  database,
  username,
  password,
  host,
  dialect,
  port,
} = require('../../config/config').db

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port,
  logging: true,
  timezone: '+08:00',
  define: {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
  }
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successful')
  })
  .catch((error) => {
    console.log('There is something wrong in server', error)
  })

sequelize.sync({
  force: false
})

module.exports = sequelize
