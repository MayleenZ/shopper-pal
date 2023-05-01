const Item = require('../../models/item')

async function createItem(req,res){
    try {
        const item = await Item.create(req.body)
        console.log(item);
    } catch (error) {
        console.error(error)
    }
}

async function deleteItem(req,res){
    try {
        const item = await Item.findByIdAndRemove(req.params.ItemId)
        console.log(item);
    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    createItem, deleteItem
}