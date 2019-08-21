const Router = require('koa-router')

const Auth = require('../../../middleware/auth')

const Blog = require('../../model/blog')
const Comment = require('../../model/comment')
const Favor = require('../../model/favor')

const {
  categoryList,
  searchType
} = require('../../libs/emura')

const {
  PositiveParameter,
  CategoryValidator,
  CommentValidator,
  KeywordValidator,
  BlogValidator,
  DetailValidator
} = require('../../validator/validator')

const {
  Fail,
  Success,
  Forbidden,
  ParameterException
} = require('../../exception/httpException')

const blogRouter = new Router({
  prefix: '/v1/blog'
})

// get latest blog
blogRouter.get('/latest', async (ctx) => {
  const res = await Blog.getDataByTime()
  if (!res) {
    throw new Success('没有找到相关数据')
  }
  ctx.body = res
})

// get hot blog

blogRouter.get('/hot', async (ctx) => {
  const res = await Blog.getHotBlog()
  if (!res) {
    throw new Success('没有找到相关数据')
  }
  ctx.body = res
})

// get blog by category
blogRouter.get('/:category', async (ctx) => {
  // const v = await new CategoryValidator().validate(ctx)
  const category = ctx.params.category
  if (!category) {
    throw new Error('category为必传值')
  }
  let selectCategory = categoryList.getCategoryValue(category)
  const dataList = await Blog.getBlogByCategory(selectCategory)
  ctx.body = dataList
})

// get blog by id
blogRouter.post('/detail', async (ctx) => {
  const v = await new DetailValidator().validate(ctx)
  const id = v.get('body.id')
  const username = v.get('body.username')
  if (!username) {
    let blog = await Blog.addViewCount(id)
    ctx.body = blog
    return
  }
  let blog = await Blog.addViewCount(id)
  let likeStatus = await Favor.getLikeData(username, id)
  blog.setDataValue('like_status', likeStatus)
  ctx.body = blog
})

// get comment
blogRouter.get('/comment/:id', async (ctx, next) => {
  const v = await new PositiveParameter().validate(ctx)
  const id = v.get('path.id')
  if (!id) {
    throw new ParameterException()
  }
  let res = await Comment.getComment(id)
  ctx.body = res
})

// add comment
blogRouter.post('/comment/add', new Auth().verify(), async (ctx, next) => {
  const v = await new CommentValidator().validate(ctx)
  let addResult = await Comment.addComment({
    username: v.get('body.username'),
    blogId: v.get('body.blogId'),
    comment: v.get('body.comment')
  })
  throw new Success('评论成功')
})

// reduce comment
blogRouter.post('/comment/delete', new Auth(7).verify(), async (ctx, next) => {
  const username = ctx.request.body.username
  const id = ctx.request.body.id
  if (username === ctx.auth.account) {
    let deleteResult = await Comment.deleteComment(id)
  }
  throw new Forbidden('没有权限执行该操作')
})

// search blog by type && keyword
blogRouter.get('/search/:type/:keyword', async (ctx, next) => {
  const v = await new KeywordValidator().validate(ctx)
  const type = parseInt(v.get('path.type'))
  const keyword = v.get('path.keyword')
  const blog = await Blog.getBlogByType(type, keyword)
  ctx.body = blog
})

/**
 * add new blog
 */
blogRouter.post('/add', new Auth(7).verify(), async (ctx, next) => {
  const v = await new BlogValidator().validate(ctx)
  const username = ctx.auth.account
  const addRes = await Blog.addBlog({
    title: v.get('body.title'),
    author: username,
    category: v.get('body.category'),
    content: v.get('body.content')
  })
  if (addRes._options.isNewRecord) {
    throw new Success('文章发表成功')
  }
})

/**
 * like or dislike
 */
blogRouter.post('/like', new Auth(7).verify(), async (ctx, next) => {
  const blogId = ctx.request.body.blogId
  const username = ctx.auth.account
  const addLikeResult = await Favor.like(blogId, username)
  throw new Success('收藏成功')
})

blogRouter.post('/like/cancel', new Auth(7).verify(), async (ctx, next) => {
  const blogId = ctx.request.body.blogId
  const username = ctx.auth.account
  const addLikeResult = await Favor.cancelLike(blogId, username)
  throw new Success('取消收藏成功')
})

/**
 * delete blog
 */
blogRouter.post('/delete', new Auth(7).verify(), async (ctx, next) => {
  const v = await new PositiveParameter().validate(ctx)
  const id = v.get('body.id')
  const deleteResult = await Blog.deleteBlog(id)
  throw new Success('删除文章成功')
})

module.exports = blogRouter
