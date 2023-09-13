const createFile = require("./createFile")

const clientGet = async (client, owner, repo) => {
    try {
        let commits = await client.get(`${owner}/${repo}/commits`);
        let registerCommits;

        try {
            registerCommits = await fs.readFile("./__test__/registerCommits.json", 'utf8');
        } catch (error) {
            console.log("Arquivo não encontrado, criando um.");
            registerCommits = '[]';
        }

        const registerCommitsJson = registerCommits ? JSON.parse(registerCommits) : [];

        const Test = commits.data.map(i => i.commit.message)

        if (registerCommitsJson.length !== commits.data.length) {
            await createFile(Test);
        }

    } catch (error) {
        throw error;
    }
};

module.exports = clientGet