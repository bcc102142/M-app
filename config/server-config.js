

const serverConfig = {
    livereload: {
        enable: true
    },
    directoryListing: false,
    open: false,
    port: 3000,
    proxies: [ // 让开发服务器去请求猫眼数据
        {
            source: '/myzhanku', // 暗号
            target: 'https://api.zcool.com.cn/', // 真正的目标
        },
        {
            source: '/zhanku',
             target: 'https://m.zcool.com.cn'
            }
    ]
}


module.exports = serverConfig