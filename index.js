const client = require("./connection")
const clientGet = require("./constants/clientGet")

const owner = "vVuc";
const repo = "Repository_Update_Notification_System";

clientGet(client, owner, repo)
    .then((result) => {
        const items = result.data.items;
        items.forEach(item => {
            console.log(item.name);
        });
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    });


