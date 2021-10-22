/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";
import avatar from "../../assets/ava.png";
import avatar1 from "../../assets/bell.png";
import avatar2 from "../../assets/menu.png";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
      <button class="openbtn" onclick={() => openSidebar()}>☰</button>
        <a className="active_link" href="#">
          Dashboard
        </a>
        <a className="non_active_link" href="#">
          Game
        </a>
        <a className="non_active_link" href="#">
          Developer
        </a>
        <a className="non_active_link" href="#">
          User
        </a>
      </div>
    
      <div className="navbar__right">
      <a href="#!">
          <img width="20" src={avatar1} alt="avatar" />
        </a>
        <a href="#!">
          <img width="50" src={avatar} alt="avatar" />
        </a>
        <a href="#!">
          <img width="50" src={avatar2} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;