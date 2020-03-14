const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js') // 引用公共配置

const devConfig = {
  mode: 'development', // 开发模式
  entry: path.join(__dirname, "../example/src/app.js"), // 项目入口，处理资源文件的依赖关系
  output: {
    path: path.join(__dirname, "../example/src/"),
    filename: "bundle.js", // 使用webpack-dev-sevrer启动开发服务时，并不会实际在`src`目录下生成bundle.js，打包好的文件是在内存中的，但并不影响我们使用。
  },
  devServer: {
    contentBase: path.join(__dirname, '../example/src/'),
    compress: true,
    port: 8080, 
    open: false
  },
}
module.exports = merge(devConfig, baseConfig) // 将baseConfig和devConfig合并为一个配置
