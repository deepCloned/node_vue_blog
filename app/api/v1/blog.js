const Router = require('koa-router')

const Auth = require('../../../middleware/auth')

// 引入模型，操作模型映射到数据库
const Blog = require('../../model/blog')
const Comment = require('../../model/comment')
const Favor = require('../../model/favor')

const {
  categoryList,
  searchType
} = require('../../libs/emura')

// 引入验证函数
const {
  PositiveParameter,
  CategoryValidator,
  CommentValidator,
  KeywordValidator,
  BlogValidator,
  DetailValidator
} = require('../../validator/validator')

// 引入抛出异常的方法
const {
  Fail,
  Success,
  Forbidden,
  ParameterException
} = require('../../exception/httpException')

// 设置路由前缀
const blogRouter = new Router({
  prefix: '/v1/blog'
})

// 获取最新博客
blogRouter.get('/latest', async (ctx) => {
  const res = await Blog.getDataByTime()
  if (!res) {
    throw new Success('没有找到相关数据')
  }
  ctx.body = res
})

// 获取热门博客
blogRouter.get('/hot', async (ctx) => {
  const res = await Blog.getHotBlog()
  if (!res) {
    throw new Success('没有找到相关数据')
  }
  ctx.body = res
})

// 通过类别获取博客
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

// 通过 id 值获取每一个博客
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

// 获取该篇文章的评论
blogRouter.get('/comment/:id', async (ctx, next) => {
  const v = await new PositiveParameter().validate(ctx)
  const id = v.get('path.id')
  if (!id) {
    throw new ParameterException()
  }
  let res = await Comment.getComment(id)
  ctx.body = res
})

// 添加评论
blogRouter.post('/comment/add', new Auth().verify(), async (ctx, next) => {
  const v = await new CommentValidator().validate(ctx)
  let addResult = await Comment.addComment({
    username: v.get('body.username'),
    blogId: v.get('body.blogId'),
    comment: v.get('body.comment')
  })
  throw new Success('评论成功')
})

// 删除评论
blogRouter.post('/comment/delete', new Auth(7).verify(), async (ctx, next) => {
  const username = ctx.request.body.username
  const id = ctx.request.body.id
  if (username === ctx.auth.account) {
    let deleteResult = await Comment.deleteComment(id)
  }
  throw new Forbidden('没有权限执行该操作')
})

// 通过
blogRouter.get('/search/:type/:keyword', async (ctx, next) => {
  const v = await new KeywordValidator().validate(ctx)
  const type = parseInt(v.get('path.type'))
  const keyword = v.get('path.keyword')
  const blog = await Blog.getBlogByType(type, keyword)
  ctx.body = blog
})

// 新增一篇博客
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

// 喜欢 / 取消喜欢博客
blogRouter.post('/like', new Auth(7).verify(), async (ctx, next) => {
  const id = ctx.request.body.id
  const username = ctx.auth.account
  const addLikeResult = await Favor.like(id, username)
  throw new Success('收藏成功')
})

blogRouter.post('/like/cancel', new Auth(7).verify(), async (ctx, next) => {
  const id = ctx.request.body.id
  const username = ctx.auth.account
  const addLikeResult = await Favor.cancelLike(id, username)
  throw new Success('取消收藏成功')
})

// 删除博客
blogRouter.post('/delete', new Auth(7).verify(), async (ctx, next) => {
  const v = await new PositiveParameter().validate(ctx)
  const id = v.get('body.id')
  const deleteResult = await Blog.deleteBlog(id)
  throw new Success('删除文章成功')
})

module.exports = blogRouter
