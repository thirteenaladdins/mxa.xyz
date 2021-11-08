import React from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import NavOverlay from "../pages/NavOverlay";
import Hamburger from "../components/hamburger.jsx";
import SideNav from "../components/SideNav";

// click - visible overlay
// within the home component I want to trigger whether or not
// the nav is displayed or the home feed is displayed.
// so true = nav, false = home

function Home({ show }) {
  return (
    <div className="home-container">
      <header className="home-body"></header>

      {/* {console.log(show)} */}
      {/* <SideNav></SideNav> */}
    </div>
  );
}

export default Home;
