//* Createform -> formapi ->


import { useState } from 'react'
import {sendForm} from '../../utilities/form-api'


export default function CreateForm() {
//     const [templateName, setTemplateName] = useState("")

//     const [list, setList] = useState({
//     name1: "",
//     name2: "",
//     name3: "",
//     name4: ""
// })

const [templateData, setTemplateData] = useState({
    templateName: "",
    name1: "",
    name2: "",
    name3: "",
    name4: ""
})

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        // const templateData = {
        //     templateName,
        //     listArray : [...list]
        // }
        const userTemplateData = {
            templateName: templateData.templateName,
            name1: templateData.name1,
            name2: templateData.name2,
            name3: templateData.name3,
            name4: templateData.name4
        }
        
        const template = await sendForm(userTemplateData)
        console.log(template);
    } catch (error) {
        console.error(error)
    }
}

const handleChange = (e) => {
    setTemplateData({...templateData, [e.target.name] : e.target.value, error: ''}) 
}

//put in value, onchange, handlesubmit
//backend need the user (pass the user, (req.user.id))
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name of Template: </label>
            <input type="text" name="templateName" value = {templateData.templateName} onChange={handleChange}/>
            
            <label>List 1 Name: </label>
            <input type="text" name="name1"  value = {templateData.name1} onChange={handleChange}/>
            
            <label>List 2 Name:</label>
            <input type="text" name="name2" value = {templateData.name2} onChange={handleChange}/>
            
            <label>List 3 Name:</label>
            <input type="text" name="name3" value = {templateData.name3} onChange={handleChange}/>

            <label>List 4 Name:</label>
            <input type="text" name="name4" value = {templateData.name4} onChange={handleChange}/>

            <button type="submit">Create Template</button>
        </form>
      </div>
    </div>
  );
}


