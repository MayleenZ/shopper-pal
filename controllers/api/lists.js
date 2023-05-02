const List = require("../../models/list");


//create list for a template
async function createList(req, res) {
  try {
    const list = await List.create(req.body);
    console.log(list);
  } catch (error) {
    console.error(error);
  }
}

//EDIT LIST



//delete list from a template
async function deleteList(req,res){
    try {
        const list = await List.findByIdAndDelete(req.params.listId);
        console.log(list + "is deleted");
    } catch (error) {
        console.error(error)
    }
}

async function allLists(req,res){
  try {
      const lists = await List.find({})
      res.json(lists)
  } catch (error) {
      console.error(error)
  }
}

module.exports = {
  createList, deleteList, allLists
};
