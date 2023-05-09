import React from "react";

import "./Career.css";
import Image from "../assets/Image.png";
import Benifits from "./Benifits";
import JobList from "./job/JobList";

const Career = () => {
  return (
    <div className="container">
      <div className="career-wrapper">
        <div className="career-content">
          <div>
            <h1>Careers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              ullamcorper sed pharetra sene.
            </p>
          </div>
          <button className="btn-career">Browse Open Position</button>
        </div>
        <div className="home-img">
          <img src={Image} width={"100%"} alt="imagefor thest" />
        </div>
      </div>
      <div className="">
        <Benifits />
      </div>
      <JobList />
    </div>
  );
};

export default Career;
