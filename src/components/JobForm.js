import { useState } from "react";

import "./JobForm.css";

const JobForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <h1 className="form-heading">Job Post Application</h1>
      <div className="form-content">
        <form>
          <div className="form-group">
            <label>FirstName *</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
            />
          </div>
          <div className="form-group">
            <label>LastName *</label>
            <input
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Dev"
              type="text"
            />
          </div>
          <div className="form-group">
            <label>Mobile No.*</label>
            <div style={{ display: "flex", gap: "0.2em" }}>
              <input
                type="text"
                style={{ width: "40px" }}
                className="form-control"
                placeholder="+91"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              />
              <input
                className="form-control"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="112345678"
              />
            </div>
          </div>
          <div className="form-group">
            <label>email*</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
          <button className="btn btn-submit" onClick={submitHandler}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
