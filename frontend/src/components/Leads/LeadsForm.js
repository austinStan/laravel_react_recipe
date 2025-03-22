import React, { useState } from "react";
import { LEADS_API } from "../../api/endpoints";
import api from "../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LeadsForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(LEADS_API, data);
      console.log(response);

      if ([200, 201]?.includes(response.status)) {
        toast.success("Successfully registered");
        navigate("/leads");
        setError({});
      } else {
        const message = response?.data?.message;
        console.log(response?.data);
        const allErrors = response?.data?.errors;
        toast.error(message);
        setError(allErrors);
        navigate("/leads");
      }
    } catch (error) {
      toast.error("Failure to create a lead...");
      navigate("/leads/create");
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
              id="phone"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Valid phone number is required.
            </div>
          </div>

          <div className="col-12">
            <label for="email" className="form-label">
              Email <span className="text-body-secondary"></span>
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
