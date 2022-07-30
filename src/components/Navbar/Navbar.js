import React from "react";
import task_manager from "../../assets/images/task_manager.png";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";

function Navbar() {
    const { loggedInUser } = useSelector((state) => state.auth);
  return (
    <nav className="navbar__items">
      {/* <h1 > */}
      <div className="navbar__logo">
        <img className="icon" src={task_manager} alt="logo"></img>
        <h1>Task Manager</h1>
      </div>

      <div className="menu__icon"> </div>
      <ul className="nav__menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.className} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button>Logout</Button>
      {loggedInUser ? <h2 className="username">{loggedInUser.username}</h2> : null}
    </nav>
  );
}

export default Navbar;
