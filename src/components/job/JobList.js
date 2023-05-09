import React from "react";
import data from "../DUMMYDATA.json";
import { Link } from "react-router-dom";

import "./JobList.css";
import ScrollToTopLink from "../ScrollToTopLink";

const JobList = () => {
  return (
    <div className="content">
      <ul className="job-list">
        {data.map((job, id) => (
          <li key={id} className={`job-list-item`}>
            <div className="job-content">
              <div className="job-heading-content">
                <h4 className="job-item-title">{job.title}</h4>
                <div className="job-content-location">
                  <p className="job-loc">{job.location}</p>
                  <span className="job-type">{job.type}</span>
                </div>
              </div>
              <p className="job-description">{job.description}</p>
              <div className="apply-link">
                <ScrollToTopLink to={`/${job.title}`}>
                  <Link className="job-apply-link">Apply Now</Link>
                </ScrollToTopLink>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
