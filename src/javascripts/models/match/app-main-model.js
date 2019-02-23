const api = require('../../api')

const getTestMock = () => {
    return api.mock({ url: 'http://localhost:5000/content' })
}
module.exports = {
    getTestMock
}
