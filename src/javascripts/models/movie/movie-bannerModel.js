


const api = require('../../api');



const getMovieList = () => {
    return api.mock({ url: 'http://localhost:6000/banner' })
}
module.exports = {
    getMovieList
}