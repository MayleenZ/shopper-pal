const Category = require('../../models/category')

async function createCategory(req,res){
    try {
        const category = await Category.create(req.body);
        console.log(category);
    } catch (error) {
        console.error(error)
    }
}




module.exports = {createCategory}