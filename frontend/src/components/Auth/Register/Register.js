import React from "react";
import "../assets/auth.css";

const Register = () => {
  return (
    <main className="form-signin w-100 m-auto mt-5">
      <h1 className="h3 mb-3 fw-normal text-center">Register</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <p className="mt-5 mb-3 text-body-secondary">
          &copy; 2017–2024 <a href="/login">Login</a>
        </p>
      </form>
    </main>
  );
};

export default Register;
