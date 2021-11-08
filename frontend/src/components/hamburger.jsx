import React, { useState } from "react";
import "./hamburger.css";

function Hamburger() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className={"wrapper"}>
      <div
        onClick={handleToggle}
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
