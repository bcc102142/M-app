const api = require('../../api')
// 获取电影
// const getFilmsList = (callback) => {
//     api.request({
        
//         url: '/v2/api//discoverListNew?contentType=0&p=1&ps=10&recommendLevel=3',
//         success: (data) => {
//             callback(data)
//         }
//     })
// }


const getFilmsList = () => {
    return api.request({ url: '/v2/api//discoverListNew?contentType=0&p=1&ps=10&recommendLevel=3' })
}

module.exports = {
    getFilmsList
}