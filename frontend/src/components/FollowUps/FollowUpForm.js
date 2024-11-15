import React, { useEffect, useState } from "react";
import { FOLLOW_UP_API, LEADS_API } from "../../api/endpoints";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

const FollowUpForm = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]); // State to hold the fetched data
  const [followUp, setFollowUp] = useState([]); //
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(false); // State to handle
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
      navigate("/followup");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error(error.message);
      navigate("/followup/create");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API request using Axios
        const response = await api.get(LEADS_API);

        setLeads(response.data); // Update state with fetched data
        setLoading(false); // Stop the loading spinner
      } catch (error) {
        setError(error); // Set error if request fails
        setLoading(false); // Stop the loading spinner
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <div className="col-sm-12 mt-3">
      <h4 className="mb-3">Create Follow Up</h4>
      <form className="needs-validation" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="firstName" className="form-label">
              Leads
            </label>

            <select
              class="form-select"
              aria-label="Default select example"
              name="lead_id"
              value={data.lead_id}
              onChange={handleChange}
            >
              <option selected>Open this select menu</option>
              {leads?.map((lead) => {
                return <option value={lead?.id}>{lead?.name}</option>;
              })}
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
