const List = require('../../models/list')

async function createList(req,res){
    try {
        const list = await List.create(req.body)
        console.log(list);
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createList
}