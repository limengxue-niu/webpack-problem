const path = require('path') // 导入node.js中专门操作路径的模块
module.exports = {
    mode: "development", //可以设置为development(开发模式)，production(发布模式)

    // __dirname表示文件的根目录，默认
    entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
    output: {
        path: path.join(__dirname, './dist'), // 输出文件的存放路径
        filename: 'bundle.js' // 输出文件的名称
    }
}