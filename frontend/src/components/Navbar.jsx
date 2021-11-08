import React from "react";
import "./navbar.css";

import NavOverlay from "../pages/NavOverlay";
import Hamburger from "./hamburger.jsx";

// when the button is clicked - show overlay
// maybe instead in this instance we'll have a container,
// that will be where the page scrolls,
// on click of the navigation button we change the contents,
// so the visible component is either the black bar or the scroll page...

function Navbar({}) {
  // const onButtonClick = (mode) => {
  //   setShow(mode);
  // };

  return (
    <div className="header">
      {/* <HomeLogo></HomeLogo> */}
      {/* passing true or false here? */}
      <span className="home-icon">Home</span>
      <Hamburger />
      {/* <NavOverlay></NavOverlay> */}
    </div>
  );
}

export default Navbar;
