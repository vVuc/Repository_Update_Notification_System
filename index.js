const client = require("./connection")
const owner = "vVuc"
const repo = "Repository_Update_Notification_System"
const clientGet = async () =>{
    try{
        const response = await client.get(`${owner}/${repo}/commits`)
        console.log(response.data)
    }catch (error) {
        console.error(`Error: ${error}`)
    }
};
clientGet()
 .then((result) =>{
        const items = result.data.items;
        items.forEach(item=>{
            console.log(item.name);
        })
    })
.catch((error)=>{
        console.error(`Error: ${error}`);
    })
;


