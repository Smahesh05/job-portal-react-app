import React, { useState } from "react";

import "./JobForm.css";

const JobForm = () => {
  const [countryCode, setCountryCode] = useState("");

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="form-heading">Job Post Application</h1>
      <div className="form-content">
        <form>
          <div className="form-group">
            <label>FirstName *</label>
            <input className="form-control" type="text" placeholder="John" />
          </div>
          <div className="form-group">
            <label>LastName *</label>
            <input className="form-control" placeholder="Dev" type="text" />
          </div>
          <div className="form-group">
            <label>Mobile No.*</label>
            <div style={{ display: "flex", gap: "0.2em" }}>
              <input
                type="text"
                style={{ width: "40px" }}
                className="form-control"
                placeholder="+91"
                value={countryCode}
                onChange={handleCountryCodeChange}
              />
              <input
                className="form-control"
                type="text"
                placeholder="112345678"
              />
            </div>
          </div>
          <div className="form-group">
            <label>email*</label>
            <input
              className="form-control"
              type="email"
              placeholder="email@gmail.com"
            />
          </div>
        </form>
        <div className="form-group message-form">
          <label>Message for hiring manager</label>
          <textarea
            className="form-control"
            style={{ height: "3.2em" }}
            type="text"
          ></textarea>
        </div>

        <div className="form-btn">
          <button className="btn btn-submit">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
