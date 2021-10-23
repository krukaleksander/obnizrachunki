import React from "react";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="obniż rachunki logo" className="logo__img" />
      </div>
      <div className="menu">
        <div className="menu__start">start</div>
        <div className="menu__oferta">oferta</div>
        <div className="menu__onas">o nas</div>
        <div className="menu__kontakt">kontakt</div>
      </div>
    </header>
  );
}
