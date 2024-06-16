import React from "react";
import "../MainContent/MainContent.css";
import NatureImg from "../Assets/nature.png";
import RustImg from "../Assets/RustDoor.png";
import RedCarImg from "../Assets/RedCar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const MainContent = () => {
  return (
    <>
      <div className="main-container d-flex justify-content-around border">
        <div className="container-box">
          <a href="" target="_blank">
            All Post(32)
          </a>
        </div>
        <div className="container-box">
          <a href="http://" target="_blank">
            Article
          </a>
        </div>
        <div className="container-box">
          <a href="http://" target="_blank">
            Event
          </a>
        </div>
        <div className="container-box">
          <a href="http://" target="_blank">
            Education
          </a>
        </div>
        <div className="container-box">
          <a href="http://" target="_blank">
            Job
          </a>
        </div>
        <div className="d-flex btn-box">
          <div className="box">
            <button>Write post</button>
          </div>
          <div className="box">
            <button>Join Group</button>
          </div>
        </div>
      </div>
      <div className="head">
        <div className="mini-box">
          <img id="box-img" src={NatureImg} alt="img not found"></img>
          <h1> ✍️Article</h1>
          <h2 id="font-style">
            What if famous brands had regular fonts? Meet RegulaBrands!{" "}
            <FontAwesomeIcon icon={faEllipsis} />
          </h2>

          <p>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
        </div>
        <div className="mini-box">
          <img id="box-img" src={RustImg} alt="img not found"></img>
          <h1> 🔬️ Education</h1>
          <h2 id="font-style">
            Tax Benefits for Investment under National Pension Scheme launched
            by Government <FontAwesomeIcon icon={faEllipsis} />
          </h2>

          <p>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
        </div>
        <div className="mini-box">
          <img id="box-img" src={RedCarImg} alt="img not found"></img>
          <h1> 🗓️ Meetup</h1>
          <h2 id="font-style">
            Finance & Investment Elite Social Mixer @Lujiazui{" "}
            <FontAwesomeIcon icon={faEllipsis} />
          </h2>

          <p>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
        </div>
      </div>
    </>
  );
};

export default MainContent;
