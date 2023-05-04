import Edit from "../components/EditForm/EditForm";

function EditPage({ user }) {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
      </style>
      <Edit user={user} />
    </div>
  );
}

export default EditPage;
