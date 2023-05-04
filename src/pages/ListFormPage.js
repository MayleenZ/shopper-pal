import CreateForm from "../components/CreateForm/CreateForm";

function ListFormPage({ user }) {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
      </style>
      <h1>Create Your List</h1>
      <CreateForm user={user} />
    </div>
  );
}

export default ListFormPage;
