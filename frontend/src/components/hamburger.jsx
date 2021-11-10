import React, { useState } from "react";
import "./hamburger.css";

function Hamburger({ stateChanger, ...rest }) {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className={"wrapper"}>
      <div
        onClick={() => {
          handleToggle();
          stateChanger(isActive ? "ShowNav" : "ShowHome");
        }}
        className={isActive ? "icon nav-icon-5" : "icon nav-icon-5 open"}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Hamburger;
