import React from "react";
import "../MainContent/MainContent.css";
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
      <div className="d-flex justify-content-center flex-column align-items-center head" >
<div className="mini-box"><h1>Article</h1>
<h2>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
<p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
</div>
<div className="mini-box"></div>
<div className="mini-box"></div>
      </div>
    </>
  );
};

export default MainContent;
