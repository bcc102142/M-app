const api = require('../../api')
// 获取电影
const getFilmsList = () => {
    return api.request({ url: '/ajax/movieOnInfoList?token=' })
}
const getTestMock = () => {
    return api.mock({ url: 'http://localhost:5000/content' })
}
module.exports = {
    getFilmsList,
    getTestMock
}
