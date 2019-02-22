
const jobsFooter = require("../../views/jobs/jobs-footer.html");
const jobsHeader = require("./jobsHeader-controller");
const jobsMain = require("./jobsMain-controller");

const render = () => {
    $('#footer').append(jobsFooter);
    jobsHeader.render();
    jobsMain.render();
}


module.exports = {
    render
}

