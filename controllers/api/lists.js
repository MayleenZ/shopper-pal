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

//get list
async function getList(req,res){
  try {
    const list = await List.findById(req.params.id)
    console.log(list);
    res.json(list)
  } catch (error) {
    console.error(error)
  }
}



//EDIT LIST
// router.put('/saved/:id/edit', listCtrl.editList)
    // <form method = "POST" action={`/logs/${log._id}/?_method=PUT`}>
async function editList(req,res){
  console.log("sending", req.body);
  try {
    const list = await List.findByIdAndUpdate(req.params.id, req.body, {new: true})
    //now mongoose method is working with the {new: true}
    console.log("returning", list);
    res.json(list)
  } catch (error) {
    console.error(error)
  }
}

//delete list 
async function deleteList(req,res){
    try {
        const list = await List.findByIdAndRemove(req.params.id);
        console.log(list + "is deleted");
        res.json(list)
    } catch (error) {
        console.error(error)
    }
}

//get all lists
async function allLists(req,res){
  try {
      const lists = await List.find({})
      res.json(lists)
  } catch (error) {
      console.error(error)
  }
}

module.exports = {
  createList, deleteList, allLists, editList, getList
};
