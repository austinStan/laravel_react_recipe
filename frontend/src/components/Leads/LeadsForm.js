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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(LEADS_API, data);
      if (response.status === 201) {
        toast.success("Successfully registered");
        navigate("/leads");
        setErrors({});
      }
    } catch (error) {
      setErrors(error?.response?.data?.errors);
      toast.error("Failure to create a lead...");
      navigate("/leads/create");
    }
  };

  console.log(errors);

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

            <span className="text-danger">
              {errors.hasOwnProperty("name") ? errors?.name[0] : ""}
            </span>
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
            <span className="text-danger">
              {errors.hasOwnProperty("phone") ? errors?.phone[0] : ""}
            </span>
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
            <span className="text-danger">
              {errors.hasOwnProperty("email") ? errors?.email[0] : ""}
            </span>
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
