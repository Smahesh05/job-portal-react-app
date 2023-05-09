import React from "react";

import IconFirst from "../assets/Icon1.png";
import IconSecond from "../assets/Icon (1).png";
import IconThird from "../assets/Icon (2).png";
import IconFourth from "../assets/Icon (3).png";
import IconFive from "../assets/Icon (4).png";
import IconSix from "../assets/Icon (5).png";
import "./Benifits.css";

const Benifits = () => {
  return (
    <div className="container">
      <div className="benifit-wrapper">
        <div className="benifit-heading">
          <span className="value">Value</span>
          <h4>Values that define us</h4>
        </div>
        <ul className="benifit-list">
          <li className="benifit-item">
            <div className="benifit-item-content">
              <img src={IconFirst} className="avatar" alt="icon1" />
              <h4>Patients come first</h4>
              <p>
                Contrary to popular belief, Ipsum is not simply random text. It
                has roots in a piece.
              </p>
            </div>
          </li>
          <li className="benifit-item">
            <div className="benifit-item-content">
              <img className="avatar" src={IconSecond} alt="value avtar" />
              <h4>Competitive salary</h4>
              <p>
                Contrary to popular belief, Ipsum is not simply random text. It
                has roots in a piece.
              </p>
            </div>
          </li>
          <li className="benifit-item">
            <div className="benifit-item-content">
              <img className="avatar" src={IconThird} alt="value avtar" />
              <h4>Holidays & Parental</h4>
              <p>
                Contrary to popular belief, Ipsum is not simply random text. It
                has roots in a piece.
              </p>
            </div>
          </li>
          <li className="benifit-item">
            <div className="benifit-item-content">
              <img className="avatar" src={IconFourth} alt="value avtar" />
              <h4>Flexible hours</h4>
              <p>
                Contrary to popular belief, Ipsum is not simply random text. It
                has roots in a piece.
              </p>
            </div>
          </li>
          <li className="benifit-item">
            <div className="benifit-item-content">
              <img className="avatar" src={IconFive} alt="value avtar" />
              <h4>Medical insurance</h4>
              <p>
                Contrary to popular belief, Ipsum is not simply random text. It
                has roots in a piece.
              </p>
            </div>
          </li>
          <li className="benifit-item">
            <div className="benifit-item-content">
              <img className="avatar" src={IconSix} alt="value avtar" />
              <h4>Career growth</h4>
              <p>
                Contrary to popular belief, Ipsum is not simply random text. It
                has roots in a piece.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Benifits;
