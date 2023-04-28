const ReadyTemplate = require('../../models/readyTemplate')

async function createReadyTemplate(req,res){
    try {
        const readyTemplate = await ReadyTemplate.create(req.body)
        console.log(readyTemplate);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    createReadyTemplate
}