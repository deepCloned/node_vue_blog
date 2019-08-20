const fs = require('fs')

const Blog = require('../app/model/blog')



class LoadFile {
  // 读取文件
  static readFiles (_path) {
    return new Promise(function (resolve, reject) {
      fs.readFile(_path, 'utf8', function (err, res) {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }

  // 遍历内容
  static getDataList (arr) {
    arr.forEach((ele, index) => {
      Blog.create({
        title: ele.title,
        author: ele.author,
        category: ele.category,
        content: ele.content,
        comment_count: ele.comment_count,
        view_count: ele.view_count,
        like_count: ele.like_count
      })
    })
  }
}


// function read(_path) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(_path, 'utf8', function (err, res) {
//       if (err) {
//         reject(err)
//       }
//       resolve(res)
//     })
//   })
// }

// function eac(arr) {
//   arr.forEach((ele, index) => {
//     console.log(index)
//   })
// }

const result = LoadFile.readFiles('./category.json')
result.then(res => {
  res = JSON.parse(res)
  const dataList = res.article
  LoadFile.getDataList(dataList)
})