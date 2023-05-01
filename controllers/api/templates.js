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

async function addListToTemplate(req,res){
    try {
        const template = await Template.findById(req.params.templateId);
        if (!template){
            return res.status(404).json({error: "No Template found"})
        }
        const list = await List.findById(req.body.listId);
        if (!list){
            return res.status(404).json({error: "No List Found"})
        }
        template.lists.push(list._id)
        await template.save()
        res.status(201).json({message: "List added to Template"})
    } catch (error) {
        console.error(error)
    }
}

async function deleteListFromTemplate(req,res){
    try {
        const template = await Template.findById(req.params.templateId)
        const index = template.lists.indexOf(req.params.listId)
        template.lists.splice(index,1)
        await template.save()
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
    createTemplate, deleteTemplate, addListToTemplate, deleteListFromTemplate, allTemplates
}