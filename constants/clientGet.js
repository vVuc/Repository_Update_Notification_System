const createFile = require("./createFile")
const {readFile} = require("fs/promises");

const clientGet = async (client, owner, repo) => {
    //TODO: resolver error de test data
    const {data} = await client.get(`${owner}/${repo}/commits`);

    const registerCommits = await readFile("./__test__/registerCommits.json", 'utf8');

    const registerCommitsJson = JSON.parse(registerCommits);

    const dataClient = data.map(item => item.commit.message);

    if (registerCommitsJson.length !== dataClient.length) {
        await createFile(dataClient);
    }

};

module.exports = clientGet