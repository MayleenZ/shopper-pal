import { useState, useEffect } from "react";
import * as formAPI from "../utilities/form-api";

function SavedPage() {
  const [lists, setLists] = useState([]);

  //to get all lists
  useEffect(function () {
    async function getLists() {
      const lists = await formAPI.getLists();
      setLists(lists);
    }
    getLists();
  }, []);

  //to delete list
  const handleSubmit = async (e, list) => {
    e.prevent.default();
    try {
      const deletedList = await formAPI.deleteList(list._id);
      console.log(deletedList);
      const lists = await formAPI.getLists();
      setLists(lists);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Saved Lists</h1>
      <button><a href="/create">Add New List</a></button>
      {lists.map((list) => {
        return (
          <div>
            <h3>
              <a href={`/saved/${list._id}`}>{list.listName}</a>
            </h3>
            <ol>
              <li>{list.item1}</li>
              <li>{list.item2}</li>
              <li>{list.item3}</li>
              <li>{list.item4}</li>
              <li>{list.item5}</li>
            </ol>
            <button type = "submit" value="DELETE" onClick = {(e) => handleSubmit(e, list._id)}>Delete List</button>
            <button type = "submit" >Edit List</button>
          </div>
        );
      })}
    </div>
  );
}

export default SavedPage;

