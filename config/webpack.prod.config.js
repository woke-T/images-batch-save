const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js') // 引用公共的配置

const prodConfig = {
  mode: 'production', // 开发模式
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    path: path.join(__dirname, "../lib/"),
    filename: "index.js",
    libraryTarget: 'umd', // 采用通用模块定义
    libraryExport: 'default', // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
  },
}

module.exports = merge(prodConfig, baseConfig) // 将baseConfig和prodConfig合并为一个配置