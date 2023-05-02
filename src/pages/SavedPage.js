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
    e.prevent.default()
    try {
      const deletedList = await formAPI.deleteList(list)
      console.log(deletedList);
      const lists = await formAPI.getLists()
      setLists(lists)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Saved Lists</h1>
      {lists.map((list) => {
        return (
          <div>
            <h1>
            <a href={`/saved/${list._id}`}>{list.listName}</a>
            </h1>
          </div>
        )
      })}
    </div>
  );
}

export default SavedPage;
//map all of the forms to show up here
