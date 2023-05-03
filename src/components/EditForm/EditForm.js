import { useState, useEffect } from "react";
import * as formAPI from "../../utilities/form-api";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

function Edit() {
  const navigate = useNavigate()
  //setForm data here
  const [editedData, setEditedData] = useState({
    listName: "",
    item1: "",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
  });

  const { id } = useParams();
//   console.log(id);
  //id of the list i need to edit

  //* UseEffect -> calls get list function -> pass id -> data comes back and puts into state, form reads from state
  useEffect(function () {
    async function getLists() {
      const listData = await formAPI.getListById(id);
      setEditedData(listData);
    }
    getLists();

    console.log('effecting');
  }, []);

  //to edit
  const handleEdit = async (e, list) => {
    e.preventDefault();
    try {
      console.log(list);
      const editedData = await formAPI.editList(id, list);
      console.log(editedData);
      setEditedData(editedData);
      navigate('/saved')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={(e) => handleEdit(e, editedData)}>
          <label>Name of List: </label>
          <input
            type="text"
            name="listName"
            value={editedData.listName}
            onChange={(e) =>
              setEditedData({ ...editedData, listName: e.target.value })
            }
          />

          <label>Item 1: </label>
          <input
            type="text"
            name="item1"
            value={editedData.item1}
            onChange={(e) =>
              setEditedData({ ...editedData, item1: e.target.value })
            }
          />

          <label>Item 2:</label>
          <input
            type="text"
            name="item2"
            value={editedData.item2}
            onChange={(e) =>
              setEditedData({ ...editedData, item2: e.target.value })
            }
          />

          <label>Item 3:</label>
          <input
            type="text"
            name="item3"
            value={editedData.item3}
            onChange={(e) =>
              setEditedData({ ...editedData, item3: e.target.value })
            }
          />

          <label>Item 4:</label>
          <input
            type="text"
            name="item4"
            value={editedData.item4}
            onChange={(e) =>
              setEditedData({ ...editedData, item4: e.target.value })
            }
          />

          <label>Item 5:</label>
          <input
            type="text"
            name="item5"
            value={editedData.item5}
            onChange={(e) =>
              setEditedData({ ...editedData, item5: e.target.value })
            }
          />

          <button type="submit" >Submit Edit</button>

        </form>
      </div>
    </div>
  );
}

export default Edit;

//function call to backend
