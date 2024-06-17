import React from "react";
// import CreateAccount from "../LoginSignup/CreateAccount";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import img from "../Assets/Union-logo.png";
const NavbarComponent = () => {
  return (
    <>
      <div className="container d-flex justify-content-between  border">
        <div className="nav-box">
          <a
            className="h3"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            ATG.<img src={img} alt="Img-Logo"></img>WRLD
          </a>
        </div>
        <div className="nav-box">
          <input
            type="search"
            name=""
            id="search"
            placeholder="Search for your favorite groups in ATG"
          />
          <FontAwesomeIcon id="icon-search" icon={faMagnifyingGlass} />
        </div>
        <div className="nav-box">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <button>Create account. It’s free!</button>
          </a>
        </div>
      </div>

      {/* <CreateAccount/> */}
    </>
  );
};

export default NavbarComponent;
