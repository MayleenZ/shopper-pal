import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav id="nav-bar">
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/create">Create List</Link>
      &nbsp; | &nbsp;
      <Link to="/saved">Saved Lists</Link> 
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>

      <h1>Welcome, {user.name}</h1>
    </nav>
  );
}

export default NavBar;
