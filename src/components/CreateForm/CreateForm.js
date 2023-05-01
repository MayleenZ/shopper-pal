import { useState } from 'react'

export default function CreateForm() {
const [createTemplate, setCreateTemplate] = useState({
    templateName: "",
    name1: "",
    name2: "",
    name3: "",
    name4: ""
})

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        console.log(createTemplate);
        const templateData = {
            templateName: templateData.templateName,
            name1: templateData.name1,
            name2: templateData.name2,
            name3: templateData.name3,
            name4: templateData.name4,
        }

    } catch (error) {
        
    }
}


  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" >
            <label>Name of Template: </label>
            <input type="text" name="template" />
            
            <label>List 1 Name: </label>
            <input type="text" name="list1"  />
            
            <label>List 2 Name:</label>
            <input type="text" name="list2" />
            
            <label>List 3 Name:</label>
            <input type="text" name="list3"  />

            <label>List 4 Name:</label>
            <input type="text" name="list4"  />

            <button type="submit">Create Template</button>
        </form>
      </div>

    </div>
  );
}


