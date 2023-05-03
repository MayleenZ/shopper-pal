import CreateForm from "../components/CreateForm/CreateForm";

function ListFormPage({user}) {
  return (
    <div>
      <h1>Create Your List</h1>
      <CreateForm user={user}/>
      
    </div>
  );
}

export default ListFormPage;
