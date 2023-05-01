const List = require("../../models/list");

async function createList(req, res) {
  try {
    const list = await List.create(req.body);
    console.log(list);
  } catch (error) {
    console.error(error);
  }
}

async function deleteList(req,res){
    try {
        const list = await List.findByIdAndRemove(req.params.listId);
        if (!list) {
          return res.status(404).json({ error: "List not found" });
        }
    } catch (error) {
        console.error(error)
    }
}


module.exports = {
  createList, deleteList
};
