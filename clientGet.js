const clientGet = async (client, owner, repo) => {
    try {
        const response = await client.get(`${owner}/${repo}/commits`);
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = clientGet;