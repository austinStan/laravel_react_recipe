import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/api";
import { toast } from "react-toastify";

const FollowUpDetails = () => {
  const { id } = useParams();
  const [followUp, setFollowUp] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const [data, setData] = useState({
    status: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchFollowUp = async () => {
      try {
        const response = await api.get(
          `http://localhost:8000/api/followups/${id}/`
        );
        setFollowUp(response.data);
      } catch (err) {
        setError("Error fetching user data");
        console.error(err);
      }
    };
    fetchFollowUp();
  }, [id]);

  const handleFollowUpStatusUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await api.patch(
        `http://localhost:8000/api/followups/${id}/status/`,
        data
      );
      setData(response.data);
      toast.success("Successfully updated status");
      navigate(`/followup`);
    } catch (error) {
      console.log(error);
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error(error.response.data?.message);

      navigate(`/followup`);
    }
  };

  return (
    <div className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Dashboard</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <a href="/followup">FollowUp</a>
          </li>
        </ol>
      </nav>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="fw-bold">Lead</td>
            <td>{followUp?.lead?.name}</td>
          </tr>
          <tr>
            <td className="fw-bold">Scheduled At</td>
            <td>{followUp?.scheduled_at}</td>
          </tr>
          <tr>
            <td className="fw-bold">Status</td>
            <td>
              <span
                class={`badge bg-${
                  followUp?.status === "Pending"
                    ? "secondary"
                    : followUp?.status === "Missed"
                    ? "danger"
                    : "success"
                }`}
              >
                {followUp?.status}{" "}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="col-sm-12 mt-3">
        <form onSubmit={handleFollowUpStatusUpdate}>
          <div className="row g-3">
            <div className="col-sm-12">
              <label for="firstName" className="form-label">
                Action
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="status"
                value={data.status}
                onChange={handleChange}
              >
                <option selected>Open this select menu</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Missed">Missed</option>
              </select>
              <div className="invalid-feedback">Valid name is required.</div>
            </div>
          </div>

          <button className="mt-2 btn btn-primary btn-sm" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FollowUpDetails;
