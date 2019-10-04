const Sequelize = require('sequelize')

const sequelize = require('../database/sequelize')

const Model = Sequelize.Model
const Op = Sequelize.Op

const Blog = require('./blog')

const {
  Fail,
  Success
} = require('../exception/httpException')

class Favor extends Model {
  
  // 通过用户名获取博客
  static async getBlogListByUsername (username) {
    return Favor.findAll({
      where: {
        username
      }
    })
  }

  // favor 表中存储喜欢博客的id号，在获取具体内容的时候要去存储博客的表中查找
  static async getBlogListByLikeId (username) {
    const blogList = await Favor.getBlogListByUsername(username)
    let blogIdList = []
    blogList.forEach(ele => {
      blogIdList.push(ele.blogId)
    })
    var blogs = []
    for (let i = 0; i < blogIdList.length; i ++) {
      let record = await Blog.findOne({
        where: {
          id: blogIdList[i]
        }
      })
      if (record) {
        blogs.push(record)
      }
    }
    return blogs
  } 

  
  static async getLikeData (username, blogId) {
    const record = await Favor.findOne({
      where: {
        username,
        blogId
      }
    })
    if (!record) {
      return false
    }
    return true
  }
  
  // 增加喜欢的记录，需要同时操作几个表
  static async like (blogId, username) {
    const record = await Favor.findOne({
      where: {
        username,
        blogId
      }
    })
    if (record) {
      throw new Fail('您已经收藏过该文章了')
    }
    /**
     * sequelize 事务
     */
    sequelize.transaction( async t => {
      await Favor.create({
        username,
        blogId
      }, {transaction: t})
      const blog = await Blog.getBlogById(blogId)
      await blog.increment('like_count', {by: 1, transaction: t})
    })
  }
  
  // 取消喜欢操作
  static async cancelLike (blogId, username) {
    const record = await Favor.findOne({
      where: {
        username,
        blogId
      }
    })
    if (!record) {
      throw new Fail('您还没有收藏该文章')
    }
    sequelize.transaction( async t => {
      await Favor.destroy({
        where: {
          username,
          blogId
        }
      }, {transaction: t})
      const blog = await Blog.getBlogById(blogId)
      await blog.decrement('like_count', {by: 1, transaction: t})
    })
  }
}

Favor.init({
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  blogId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  sequelize
})

module.exports = Favor