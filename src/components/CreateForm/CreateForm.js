//* Createform -> formapi ->


import { useState } from 'react'
import * as formAPI from "../../utilities/form-api";
import { useNavigate } from 'react-router-dom'

export default function CreateForm({user}) {
const navigate = useNavigate()
console.log(user._id);
const [listData, setListData] = useState({
    listName: "",
    item1: "",
    item2: "",
    item3: "",
    item4: "",
    item5: ""
})

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const userListData = {
        user: user._id,
        listName: listData.listName,
        item1: listData.item1,
        item2: listData.item2,
        item3: listData.item3,
        item4: listData.item4,
        item5: listData.item5}
        console.log(userListData);
        const list = await formAPI.sendForm(userListData)
        console.log(list);
        navigate('/saved')
    } catch (error) {
        console.error(error)
    }
}

const handleChange = (e) => {
    setListData({...listData, [e.target.name] : e.target.value, error: ''}) 
}

//put in value, onchange, handlesubmit
//backend need the user (pass the user, (req.user.id))
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
            <label>Name of List: </label>
            <input type="text" name="listName" value = {listData.listName} onChange={handleChange}/>
            
            <label>Item 1: </label>
            <input type="text" name="item1"  value = {listData.item1} onChange={handleChange}/>
            
            <label>Item 2:</label>
            <input type="text" name="item2" value = {listData.item2} onChange={handleChange}/>
            
            <label>Item 3:</label>
            <input type="text" name="item3" value = {listData.item3} onChange={handleChange}/>

            <label>Item 4:</label>
            <input type="text" name="item4" value = {listData.item4} onChange={handleChange}/>

            <label>Item 5:</label>
            <input type="text" name="item5" value = {listData.item5} onChange={handleChange}/>

            <button type="submit">Create List</button>
        </form>
      </div>
    </div>
  );
}


