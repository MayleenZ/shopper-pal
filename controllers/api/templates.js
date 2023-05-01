const Template = require('../../models/template')
const List = require('../../models/list')

async function createTemplate(req,res){
    try {
        const template = await Template.create(req.body)
        console.log(template); 
    } catch (error) {
        console.error(error)
    }
}

async function deleteTemplate(req,res){
    try {
        const template = await Template.findByIdAndRemove(req.params.templateId)
        console.log(template + " is deleted")
    } catch (error) {
     console.error(error)   
    }
}

async function allTemplates(req,res){
    try {
        const templates = await Template.find({})
        res.json(templates)
    } catch (error) {
        console.error(error)
    }
}


module.exports = {
    createTemplate, deleteTemplate,allTemplates
}