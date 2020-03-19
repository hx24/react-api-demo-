var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', //  默认的构建模式  另一种是production
  context: __dirname,
  entry: './src/index.js', // 入口文件
  module: {
    rules: [
      {
        test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  output: {
    //  输出文件
    path: __dirname + '/src', // 输出文件路径
    filename: 'bundle.js' // 输出文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello world app',
      template: 'index.html'
    })
  ]
}
