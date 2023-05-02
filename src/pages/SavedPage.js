import { useState, useEffect } from "react";
import * as formAPI from "../utilities/form-api";
import Edit from "../components/EditForm/EditForm";
import {useNavigate} from 'react-router-dom'

function SavedPage() {
  const [lists, setLists] = useState([]);
  const navigate = useNavigate()
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
    e.preventDefault();
    try {
      const deletedList = await formAPI.deleteList(list._id);
      console.log(deletedList);
      const lists = await formAPI.getLists();
      setLists(lists);
    } catch (error) {
      console.error(error);
    }
  };

  //to edit 
  const handleEdit = async (e, list) =>{
    e.preventDefault();
    try {
      console.log("hello");
      const editList = await formAPI.editList(list._id);
      console.log(editList);
      // const lists = await formAPI.getLists();
      // setLists(lists);
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div>
      <h1>Saved Lists</h1>
      <button><a href="/create">Add New List</a></button>
      {lists.map((list) => {
        return (
          <div key = {list._id}>
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
            <button type = "submit" value="DELETE" onClick = {(e) => handleSubmit(e, list)}>Delete List</button>


            <button type = "submit" value = "PUT" onClick = {() => navigate(`/edit/${list._id}`)}>
              Edit
            </button>
            {/* <button type = "submit" value = "PUT" onClick = {(e) => handleEdit(e, list)}>Edit List</button> */}
          </div>
        );
      })}
    </div>
  );
}

export default SavedPage;

