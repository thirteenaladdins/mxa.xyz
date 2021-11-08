import "./App.css";
import Home from "./pages/Home.jsx";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NavOverlay from "./pages/NavOverlay";

const modalRoot = document.getElementById("modal-root");

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="overlay">{props.children}</div>,
    modalRoot
  );
};

// hide current home div
// set nav overlay instead. Retain navigation bar.

function App() {
  const components = {
    ShowNav: <NavOverlay />,
    ShowHome: <Home />,
  };

  // default state is home
  const [displayedComponent, setComponent] = useState("ShowHome");

  const showComponent = (component) => {
    setComponent(component);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <button onClick={() => showComponent("ShowHome")}>ShowHome</button>
      <button onClick={() => showComponent("ShowNav")}>ShowNav</button>

      <div className={"home"}>{components[displayedComponent]}</div>
    </div>
  );
}

export default App;
