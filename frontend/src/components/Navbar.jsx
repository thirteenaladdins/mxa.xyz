import React, { useState } from "react";
import "./navbar.css";

import NavOverlay from "../pages/NavOverlay";
import Hamburger from "./hamburger.jsx";

// when the button is clicked - show overlay
// maybe instead in this instance we'll have a container,
// that will be where the page scrolls,
// on click of the navigation button we change the contents,
// so the visible component is either the black bar or the scroll page...

// so I'm passing the state up through the components...
// probably a convoluted way to do this but it's all I've got at the moment

function Navbar({ toggle }) {
  const [state, setState] = useState("");

  // const onButtonClick = (mode) => {
  //   setShow(mode);
  // };
  // console.log(state);
  // // toggle(state);

  return (
    <div className="header">
      {/* <HomeLogo></HomeLogo> */}
      {/* passing true or false here? */}
      <span className="home-icon">Home</span>
      <Hamburger onChange={toggle(state)} stateChanger={setState} />
      {/* <NavOverlay></NavOverlay> */}
    </div>
  );
}

export default Navbar;
