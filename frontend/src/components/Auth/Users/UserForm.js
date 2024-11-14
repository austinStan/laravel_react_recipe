import React, { useState } from "react";
import { REGISTER_API } from "../../../api/endpoints";

const UserForm = () => {
  const [data, setData] = useState({
    name: "",
    phone_number: "",
    role: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(REGISTER_API, data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };
  return (
    <React.Fragment>
      <div className="col-sm-12 mt-3">
        <h4 className="mb-3">Create User</h4>
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
                value={data.name}
                onChange={handleChange}
                required
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

            <div className="col-6">
              <label for="email" className="form-label">
                Email <span className="text-body-secondary"></span>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={data.email}
                onChange={handleChange}
                id="email"
              />
              <div className="invalid-feedback">
                Please enter a valid email address..
              </div>
            </div>
            <div className="col-6">
              <label for="role" className="form-label">
                Role <span className="text-body-secondary"></span>
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="role"
                value={data.role}
                onChange={handleChange}
              >
                <option selected>Open this select menu</option>
                <option value="Admin">Admin</option>
                <option value="Sales Manager">Sales Manager</option>
                <option value="Sales Rep">Sales Rep</option>
              </select>
            </div>
            <div className="col-6">
              <label for="password" className="form-label">
                Password <span className="text-body-secondary"></span>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={data.password}
                onChange={handleChange}
                id="password"
              />
            </div>
          </div>

          <button className="mt-2 btn btn-primary btn-sm" type="submit">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UserForm;
