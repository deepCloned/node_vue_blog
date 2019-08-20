const Sequelize = require('sequelize')

const sequelize = require('../database/sequelize')

const Model = Sequelize.Model

const Op = Sequelize.Op

const {
  NotFound
} = require('../exception/httpException')

const {
  searchType
} = require('../libs/emura')

class Blog extends Model {

  // 获取最新文章
  static async getDataByTime () {
    return await Blog.findAll({
      order: [['id', 'DESC']],
      limit: 10
    })
  }

  // 获取热门文章
  static async getHotBlog () {
    return await Blog.findAll({
      order: [['view_count', 'DESC']],
      attributes: ['id', 'title', 'author', 'view_count'],
      limit: 10
    })
  }

  /**
   * get blog by user
   */
  static async getBlogByAuthor (author) {
    return await Blog.findAll({
      where: {
        author
      },
      order: [['id', 'DESC']]
    })
  }

  // 通过类型获取blog
  static async getBlogByCategory (category) {
    return await Blog.findAll({
      where: {
        category
      },
      order: [['id', 'DESC']]
    })
  }

  // 根据id获取特定文章
  static async getBlogById (id) {
    const blog = await Blog.findOne({
      where: {
        id: id
      }
    })
    return blog
  }

  // 增加浏览记录
  static async addViewCount (id) {
    const blog = await Blog.getBlogById(id)
    if (!blog) {
      throw new NotFound('文章不存在')
    }
    const res = await blog.increment('view_count', {by: 1})
    return blog
  }

  /**
   * get blog by title or content
   */
  static async getBlogByType (type, keyword) {
    var blog
    console.log('type of', typeof type, '****', typeof searchType.title)
    if (type === searchType.title) {
      console.log('type is', type, 'keyword is', keyword)
      blog = await Blog.findAll({
        where: {
          title: {
            [Op.like]: `%${keyword}%`
          }
        }
      })
    }
    if (type === searchType.content) {
      console.log('type is', type, 'keyword is', keyword)
      blog = await Blog.findAll({
        where: {
          content: {
            [Op.like]: `%${keyword}%`
          }
        }
      })
    }
    // switch (type) {
    //   case searchType.title:
    //     console.log('searchType is title', keyword)
    //     blog = await Blog.findAll({
    //       where: {
    //         title: {
    //           [Op.like]: `%${keyword}%`
    //         }
    //       }
    //     })
    //     break
    //   case searchType.content:
    //     console.log('searchType is content', keyword)
    //     blog = await Blog.findAll({
    //       where: {
    //         content: {
    //           [Op.like]: `%${keyword}%`
    //         }
    //       }
    //     })
    //     break
    // }
    return blog
  }

  /**
   * add new blog
   */
  static async addBlog ({title, author, content, category}) {
    const blog = {
      title,
      author,
      content,
      category,
      like_count: 0,
      view_count: 0,
      comment_count: 0
    }
    return await Blog.create(blog)
  }

  /**
   * delete blog
   */
  static async deleteBlog (id) {
    const blog = await Blog.getBlogById(id)
    if (!blog) {
      throw new NotFound('对不起，文章不存在')
    }
    return await Blog.destroy({
      where: {
        id
      }
    })
  }

  // 增加/减少记录
  static async addCount (blogId, item, operate) {
    const blog = await Blog.getBlogById(blogId)
    if (!blog) {
      throw new NotFound('对不起，文章不存在')
    }
    if (operate === 'add') {
      return blog.increment(item, {by: 1})
    }
    if (operate === 'reduce') {
      return blog.decrement(item, {by: 1})
    }
    return
  }
}

Blog.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  like_count: {
    type: Sequelize.INTEGER
  },
  comment_count: {
    type: Sequelize.INTEGER
  },
  view_count: {
    type: Sequelize.INTEGER
  }
}, {
  sequelize
})

module.exports = Blog