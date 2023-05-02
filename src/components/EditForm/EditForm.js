import { useState, useEffect } from "react";
import * as formAPI from "../../utilities/form-api";
import {useParams} from 'react-router-dom'


function Edit(){
    const [lists, setLists] = useState([]);

    //setForm data here 


    const {id} = useParams()
    console.log(id);
    //id of the list i need to edit 


//* UseEffect -> calls get list function -> pass id -> data comes back and puts into state, form reads from state 



      //to edit 
  const handleEdit = async (e, list) =>{
    e.preventDefault();
    try {
      const editList = await formAPI.editList(list._id);
      console.log(editList);
      const lists = await formAPI.getLists();
      setLists(lists);
    } catch (error) {
      console.error(error)
    }
  }
    return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleEdit}>
            <label>Name of List: </label>
            {/* <input type="text" name="listName" defaultValue={list.listName}/>
            
            <label>Item 1: </label>
            <input type="text" name="item1" defaultValue={list.item1} />
        
            
            <label>Item 2:</label>
            <input type="text" name="item2"  defaultValue={list.item2} />
            
            <label>Item 3:</label>
            <input type="text" name="item3" defaultValue={list.item3}/>

            <label>Item 4:</label>
            <input type="text" name="item4"  defaultValue={list.item4}/>

            <label>Item 5:</label>
            <input type="text" name="item5"  defaultValue={list.item5}/>

            <button type="submit">Submit Edit</button> */}
        </form>
      </div>
    </div>
    )
}


export default Edit

//function call to backend 