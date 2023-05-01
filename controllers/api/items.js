const Item = require('../../models/item')

async function createItem(req,res){
    try {
        const item = await Item.create(req.body)
        console.log(item);
    } catch (error) {
        console.error(error)
    }
}




module.exports = {
    createItem
}