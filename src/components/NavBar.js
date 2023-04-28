import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <Link to="/home">Home Page</Link>
      <Link to="/custom">Create Your Template</Link>
      &nbsp; | &nbsp;
      <Link to="/saved">Saved Templates</Link> <span>Welcome, {user.name}</span>{" "}
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
      <Link to = '/ready-to-use'>Ready to use Templates
      </Link>
    </nav>
  );
}

export default NavBar;
