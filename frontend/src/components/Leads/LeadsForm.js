import React from "react";

const LeadsForm = () => {
  return (
    <div className="col-sm-12 mt-3">
      <h4 className="mb-3">Create Lead</h4>
      <form className="needs-validation">
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
              placeholder=""
              value=""
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
              placeholder=""
              value=""
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
            <input type="email" className="form-control" id="email" />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
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
