const axios = require("axios")

const owner = "vVuc";
const repo = "Repository_Update_Notification_System";


const funct = async (owner, repo) => {
    try {
        const {data} = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`)
        const {author, message} = data[0].commit
        const obj = {author: author.name, date: author.date, message}
        const MinhaApi = await axios.post(`http://localhost:6565`, {author: author.name, date: author.date, message})

        console.log(MinhaApi.data)
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

funct(owner, repo)