import { NavLink } from "react-router-dom";
import Logo from "../../styles/images/Logo.png";

const NavBar = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="nav_logo">
        <img src={Logo} alt="logo" />
        <h1>Adopt-Tail</h1>
      </NavLink>
      <div className="nav_links">
        <NavLink
          to="/adoptionForm"
          className={({ isActive }) =>
            isActive ? "nav_link active" : "nav_link"
          }
        >
          ADOPTION FORM
        </NavLink>
        <NavLink
          to="/pets"
          className={({ isActive }) =>
            isActive ? "nav_link active" : "nav_link"
          }
        >
          OUR PETS
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
