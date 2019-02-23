const api = require('../../api')

const getFilmsList = (p) => {
    return api.request({ url: `/v2/api//discoverListNew?contentType=0&p=${p}&ps=10&recommendLevel=3` }
    )



}

module.exports = {
    getFilmsList
}