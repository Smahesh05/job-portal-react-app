import React from "react";
import data from "./DUMMYDATA.json";
import { Link, useParams } from "react-router-dom";

import "./JobDetails.css";

const JobDetails = () => {
  const { title } = useParams();
  const currentJob = data.find((job) => job.title === title);

  const options = { year: "numeric", month: "short", day: "2-digit" };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className="container">
      <div className="job-details">
        <div className="job-heading">
          <div>
            <h1 className="job-title">{currentJob.title}</h1>
            <p className="heading-location" style={{ marginRight: "2rem" }}>
              {currentJob.location} |
              <span style={{ color: "lightblue", paddingLeft: "2rem" }}>
                {currentJob.type}
              </span>
            </p>
          </div>
          <Link className="job-apply-form-btn " to={`/job-form/${title}`}>
            Apply Now
          </Link>
        </div>

        <div className="job-body">
          <div className="about-role">
            <div className="about-job-role">
              <h4 className="job-detail-title">About the role</h4>
              <p>Posted:{formattedDate}</p>
            </div>
            <p className="job-details-description">
              you are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't embarrassing hidden in the middle of text. All the
              Lorem Ipsum generators on the Internet tend to repeat predefined
              chunks as necessary, making this the first true generator on the
              Internet.
            </p>
            <ul className="job-item-list">
              <li>
                You are going to use a passage of Lorem Ipsum, you need to be{" "}
              </li>
              <li>
                Sure there isn't embarrassing hidden in the middle of text. All
                the
              </li>
              <li>
                Lorem Ipsum generators on the Internet tend to repeat predefined
              </li>
              <li>Chunks as necessary, making this the first true generator</li>
            </ul>
          </div>
          <div>
            <div>
              <h4 className="job-detail-title">
                If the feeling is mutual, we offer:
              </h4>
              <p className="job-details-description">
                you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't embarrassing hidden in the middle of text. All
                the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
            </div>
            <ul className="job-item-list">
              <li>
                Sure there isn't embarrassing hidden in the middle of text. All
                the
              </li>
              <li>
                Lorem Ipsum generators on the Internet tend to repeat predefined
              </li>
            </ul>
          </div>
          <div>
            <h4 className="job-detail-title">Contact us!</h4>
            <p className="job-details-description contact">
              Reach out to discuss the opportunity & send your answers to:
              <br />
              <span>John Peeter</span>
              <br />
              saasup@mail.co +256 445 02342
            </p>
            <div className="job-form-link">
              <Link className="job-details-link" to={`/job-form/${title}`}>
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
