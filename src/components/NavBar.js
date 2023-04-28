import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <Link to="/home">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/pre-made">Pre-made Templates</Link>
      &nbsp; | &nbsp;
      <Link to="/custom">Create Your Template</Link>
      &nbsp; | &nbsp;
      <Link to="/saved">Saved Templates</Link> 
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
      &nbsp; | &nbsp;
      <h1>Welcome, {user.name}</h1>
    </nav>
  );
}

export default NavBar;
