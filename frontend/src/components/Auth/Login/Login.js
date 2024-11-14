import React from "react";
import "../assets/auth.css";

const Login = () => {
  return (
    <main className="form-signin w-100 m-auto mt-5">
      <form>
        <h1 className="h3 mb-3 fw-normal text-center">Login</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">
          &copy; 2017–2024 <a href="/register">Register</a>
        </p>
      </form>
    </main>
  );
};

export default Login;
