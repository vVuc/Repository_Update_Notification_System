const {create} = require("axios");
const {config} = require("dotenv");
config();

const client = create({
    baseURL: `https://api.github.com/repos/`,
    headers: {
        Authorization: process.env.tokenGit,
    }
});

module.exports = client