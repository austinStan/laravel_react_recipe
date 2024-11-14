import React, { useState } from "react";
import { LEADS_API } from "../../api/endpoints";

const LeadsForm = () => {
  const [data, setData] = useState({
    name: "",
    phone_number: "",
    email: "",
  });
  //   const [message, setMessage] = useState("");

  //   const handlePost = async () => {
  //     try {
  //       const response = await axios.post(LEADS_API, data);
  //       setMessage(`Data posted successfully with ID: ${response.data.id}`);
  //       //   fetchData(); // Refresh data after posting
  //     } catch (error) {
  //       console.error("Error posting data:", error);
  //       setMessage("Failed to post data");
  //     }
  //   };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LEADS_API, data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="col-sm-12 mt-3">
      <h4 className="mb-3">Create Lead</h4>
      <form className="needs-validation" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="firstName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              name="name"
              required
              value={data.name}
              onChange={handleChange}
            />
            <div className="invalid-feedback">Valid name is required.</div>
          </div>

          <div className="col-sm-6">
            <label for="lastName" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone_number"
              name="phone_number"
              value={data.phone_number}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Valid phone number is required.
            </div>
          </div>

          <div className="col-12">
            <label for="email" className="form-label">
              Email <span className="text-body-secondary">(Optional)</span>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Please enter a valid email address..
            </div>
          </div>
        </div>

        <button className="mt-2 btn btn-primary btn-sm" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadsForm;
