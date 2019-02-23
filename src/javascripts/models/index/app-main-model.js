const api = require('../../api')

const getFilmsList = () => {
    return api.request({ url: '/v2/api//discoverListNew?contentType=0&p=1&ps=10&recommendLevel=3' })
}

module.exports = {
    getFilmsList
}