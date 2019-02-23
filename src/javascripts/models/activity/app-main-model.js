const api = require('../../api')

const getTestMock = (page) => {
    return api.mock({ url: `http://localhost:400${page}/content` })
}
module.exports = {
    getTestMock
}
