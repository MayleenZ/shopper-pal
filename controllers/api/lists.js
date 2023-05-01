const List = require("../../models/list");
const Item = require("../../models/item");

async function createList(req, res) {
  try {
    const list = await List.create(req.body);
    console.log(list);
  } catch (error) {
    console.error(error);
  }
}

async function addItemToList(req, res) {
  try {
    const list = await List.findById(req.params.listId);
    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }

    const item = await Item.findById(req.body.itemId);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    list.items.push(item._id);

    await list.save();
    res.status(201).json({ message: "Item added to List" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function deleteItemFromList(req, res) {
    try {
      const list = await List.findById(req.params.listId);
      if (!list) {
        return res.status(404).json({ error: 'List not found' });
      }
      //finds list 

      const itemIndex = list.items.findIndex(
        (item) => item._id.toString() === req.params.itemId
      );
        //calls findIndex method on items array from list and passes in a function as an argument. function checks each item in the items array to see if its _id property, when converted to a string matches the itemId parameter in request URL, when it finds an item with a matching url then it is stored within itemIndex variable.

      if (itemIndex === -1) {
        return res.status(404).json({ error: 'Item not found' });
      }
      //returns -1 if no item was found 

      list.items.splice(itemIndex, 1);
      //splices the item from the list at specific index (finally deletes item from list)
      await list.save();
      res.status(200).json({ message: 'Item removed from list' });
    } catch (error) {
      console.error(error);
    }
  }
  
  async function updateItemfromList(req,res){
    try {
        const list = await List.findById(req.params.listId)
        if (!list){
            return res.status(404).json({error: "list not found"})
        }
        const item = list.items.id(req.params.itemId)
        if (!item){
            return res.status(404).json({error: "item not found"})
        }
        //updating values below
        item.name = req.body.name;
        item.isChecked = req.body.isChecked
        await list.save()
        res.status(200).json({message: "Item updated"})
    } catch (error) {
        console.error(error)
    }
  }


module.exports = {
  createList,
  addItemToList, deleteItemFromList, updateItemfromList
};
