function Edit({list}){
    // <form method = "POST" action={`/logs/${log._id}/?_method=PUT`}>
    return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name of List: </label>
            <input type="text" name="listName" defaultValue={list.listName} onChange={handleChange}/>
            
            <label>Item 1: </label>
            <input type="text" name="item1" defaultValue={list.item1} onChange={handleChange}/>
            
            <label>Item 2:</label>
            <input type="text" name="item2"  defaultValue={list.item2} onChange={handleChange}/>
            
            <label>Item 3:</label>
            <input type="text" name="item3" defaultValue={list.item3} onChange={handleChange}/>

            <label>Item 4:</label>
            <input type="text" name="item4"  defaultValue={list.item4} onChange={handleChange}/>

            <label>Item 5:</label>
            <input type="text" name="item5"  defaultValue={list.item5} onChange={handleChange}/>

            <button type="submit">Create List</button>
        </form>
      </div>
    </div>
    )
}


export default Edit

