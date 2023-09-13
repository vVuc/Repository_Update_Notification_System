const fs = require("fs/promises");

const createFile = async (data) => {
    try {
        //TODO: resolver erro de test data
        await fs.writeFile("./__test__/registerCommits.json", JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
};

module.exports = createFile;
