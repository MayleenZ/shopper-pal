const customTemplate = require('../../models/customTemplate')

async function createCustomTemplate(req,res){
    try {
        const createCustom = await customTemplate.create(req.body)
        console.log(createCustom); 
    } catch (error) {
        
    }
}

module.exports = {
    createCustomTemplate
}