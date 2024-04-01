import React, { useState } from "react";
import logo from "../images/logo-white.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [burger_class, setBurgerClass] = useState(false);
  const [burger_bar, setBurgerBar] = useState(false);

  const changeBG = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBG);

  const updateBurger = () => {
    setBurgerClass(!burger_class);
    setBurgerBar(!burger_bar);
  };

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <div className="row">
        <div className="col-12 col-md-6 flex-container flex-align-center flex-justify-end">
          <Link to="#" className="logo">
            <img src={logo} alt="cobra gym" />
          </Link>
        </div>
        <div className="col-12 col-md-6 flex-container flex-align-center flex-justify-center
        ">
          <label htmlFor="menu-btn" className="menu-icon">
            <span className="nav-icon"></span>
          </label>
          <div className="burger-menu" onClick={updateBurger}>
            <span className={burger_bar ? "click" : "unclick"}></span>
            <span className={burger_bar ? "click" : "unclick"}></span>
            <span className={burger_bar ? "click" : "unclick"}></span>
          </div>
          <ul className={burger_class ? "open" : "menu"}>
            <li>
              <Link to="main">Home</Link>
            </li>
            <li>
              <Link to="features">Features</Link>
            </li>
            <li>
              <Link to="offer">Offer</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
