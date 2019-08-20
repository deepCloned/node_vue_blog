const Sequelize = require('sequelize')

const sequelize = require('../database/sequelize')

const User = require('./user')

const Blog = require('./blog')

const {
  Success,
  NotFound,
  Fail
} = require('../exception/httpException')

const Model = Sequelize.Model

class Comment extends Model {

  // 获取评论
  static async getComment (id) {
    const commentList = await Comment.findAll({
      where: {
        blog_id: id
      },
      attributes: {excludes: ['updated_at']}
    })
    return commentList
  }

  // 增加评论
  static async addComment ({username, blogId, comment}) {
    const commentData = {
      username,
      blog_id: blogId,
      comment
    }
    const commentReuslt = await Comment.create(commentData)
    const addResult = await Blog.addCount(blogId, 'comment_count', 'add')
    console.log(addResult)
    return commentReuslt
  }

  //increment decrement
  // 删除评论操作
  static async deleteComment (id) {
    const comment = await Comment.findOne({
      where: {
        id
      }
    })
    if (!comment) {
      throw new Fail('亲，您已经删除过该评论了')
    }
    const result = await Comment.destroy({
      where: {
        id
      }
    })
    if (result) {
      const artId = await comment.blog_id
      const addResult = await Blog.addCount(artId, 'comment_count', 'reduce')
      throw new Success('删除评论成功')
    }
    return result
  }
}

Comment.init({
  username: {
    type: Sequelize.STRING
  },
  blog_id: {
    type: Sequelize.STRING
  },
  comment: {
    type: Sequelize.STRING
  }
}, {
  sequelize
})

module.exports = Comment