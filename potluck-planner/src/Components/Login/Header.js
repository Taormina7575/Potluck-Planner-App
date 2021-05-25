import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img
          className="headerImg"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.moonlibrary.org%2Fwp-content%2Fuploads%2F2018%2F10%2Fkisspng-potluck-unitarian-universalist-fellowship-dish-eat-thanks-giving-5ad1cd7398f3b0.5788961715236990596265.png&f=1&nofb=1"
          alt="logo"
        ></img>
        <h1 className='pageTitle'>Potluck Planner</h1>
      </div>
    </div>
  );
}
