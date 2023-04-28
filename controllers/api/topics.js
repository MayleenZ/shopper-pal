const Topic = require('../../models/topic')

async function createTopic(req,res){
    try {
        const topic = await Topic.create(req.body)
        console.log(topic);
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createTopic
}