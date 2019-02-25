const path = require('path')
    //打包所有的js文件整合成一个给首页加载
const webpackConfig = {
    mode: 'development', // 配置打包模式
    entry: { // 入口
        index: path.join(__dirname, '../src/javascripts/index.js'),
        activity: path.join(__dirname, '../src/javascripts/activity.js'),
        match: path.join(__dirname, '../src/javascripts/match.js'),
        jobs: path.join(__dirname, '../src/javascripts/jobs.js'),
        movie: path.join(__dirname, '../src/javascripts/movie.js'),
        register: path.join(__dirname, '../src/javascripts/register.js'),
        normalLogin: path.join(__dirname, '../src/javascripts/normalLogin.js'),

    },
    output: { // 出口
        filename: '[name].js' // 如果配置的什么名字，就输出什么名字
    },
    module: { // 配置各个loader
        rules: [ // 放入一个一个的规则
            {
                test: /\.html$/, // 寻找引入进行来的后缀名伪html的模块
                use: 'string-loader'// 对这些模块使用什么loader
            }
        ] 
    }
}

module.exports = webpackConfig