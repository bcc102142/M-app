

const serverConfig = {
    livereload: {
        enable: true
    },
    directoryListing: false,
    open: false,
    port: 3000,
    proxies: [ // 让开发服务器去请求猫眼数据
        {
            source: '/maoyan', // 暗号
            target: 'https://api.zcool.com.cn/', // 真正的目标
        }
    ]
}


module.exports = serverConfig