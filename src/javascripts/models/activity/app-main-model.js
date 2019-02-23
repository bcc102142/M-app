const api = require('../../api')

const getTestMock = () => {
    return api.mock({ url: 'http://localhost:4000/content' })
}
module.exports = {
    getTestMock
}
