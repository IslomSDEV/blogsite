import "./Header.css";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export function Header() {
  const [scrol, setScrol] = useState(null);

  function changeScrol() {
    if (window.scrollY >= 20) {
      setScrol(true);
    } else if (window.scrollY < 20) {
      setScrol(false);
    }
  }
  window.onscroll = () => {
    changeScrol();
  };

  return (
    <header className={`${scrol ? "header shadow" : "header"}`}>
      <div className="container">
        <div className="flexBox">
          <Link className="logoLink" to={"/"}>
            <div className="headerLogo">Islom's Blog</div>
          </Link>
          <nav className="navbar">
            <NavLink className="navLink" to={"/academy"}>
              Academy
            </NavLink>
            <NavLink className="navLink" to={"/blog"}>
              Blog
            </NavLink>
            <NavLink className="navLink" to={"/talks"}>
              Talks
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
