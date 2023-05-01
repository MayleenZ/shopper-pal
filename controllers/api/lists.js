const List = require("../../models/list");


//create list for a template
async function createList(req, res) {
  try {
    const list = await List.create(req.body.listName, req.params.templateId);
    console.log(list);
  } catch (error) {
    console.error(error);
  }
}


//delete list from a template
async function deleteList(req,res){
    try {
        const list = await List.findByIdAndDelete(req.params.listId);
        console.log(list + "is deleted");
    } catch (error) {
        console.error(error)
    }
}


module.exports = {
  createList, deleteList
};
