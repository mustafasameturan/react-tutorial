import { url } from "../../routes/utils";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to={url("home")}>Home Page</NavLink>
      &nbsp;&nbsp;
      <NavLink to={url("home.blog")}>
        {({ isActive }) => (
          <>
            Blog
            {isActive && "(Active)"}
          </>
        )}
      </NavLink>
      &nbsp;&nbsp;
      <NavLink
        to={url("home.profile")}
        style={({ isActive }) => ({
          backgroundColor: isActive ? "red" : "transparent",
        })}
      >
        Profile
      </NavLink>
      &nbsp;&nbsp;
      <NavLink
        to={url("home.api")}
        style={({ isActive }) => ({
          backgroundColor: isActive ? "yellow" : "transparent",
        })}
      >
        API
      </NavLink>
      &nbsp;&nbsp;
      <NavLink
        to={url("home.contact")}
        style={({ isActive }) => ({
          backgroundColor: isActive ? "yellow" : "transparent",
        })}
      >
        Contact
      </NavLink>
      &nbsp;&nbsp;
      <NavLink
        to={url("home.todoApp")}
        style={({ isActive }) => ({
          backgroundColor: isActive ? "yellow" : "transparent",
        })}
      >
        Todo App
      </NavLink>
    </nav>
  );
}

export default Navbar;
