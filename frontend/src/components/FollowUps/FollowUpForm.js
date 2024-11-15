import React, { useState } from "react";
import { FOLLOW_UP_API } from "../../api/endpoints";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

const FollowUpForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    lead_id: "",
    scheduled_at: "",
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
      const response = await api.post(FOLLOW_UP_API, data);
      toast.success("Successfully registered");
      navigate("/leads");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error(error.message);
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
              Leads
            </label>

            <select
              class="form-select"
              aria-label="Default select example"
              name="leads"
              value={data.leads}
              onChange={handleChange}
            >
              <option selected>Open this select menu</option>
              <option value="Admin">Admin</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="Sales Rep">Sales Rep</option>
            </select>

            <div className="invalid-feedback">Valid name is required.</div>
          </div>

          <div className="col-sm-6">
            <label for="lastName" className="form-label">
              Time
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="scheduled_at"
              name="scheduled_at"
              value={data.scheduled_at}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Valid time is required.</div>
          </div>
        </div>

        <button className="mt-2 btn btn-primary btn-sm" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FollowUpForm;
