import React, { useState } from "react";
import { supabase } from "../../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error message

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    supabase.auth
      .signInWithPassword({ email, password })
      .then((response) => {
        if (response?.error?.message) {
          // console.log(response);
          setError(response.error.message);
        } else {
          console.log(response.data.session.access_token);
          const token = response.data.session.access_token;
          localStorage.setItem("token", token);
          window.location.href = "http://localhost:3000/admin"; // Redirect to admin page

          // new Toast("Login succesfully");
        }
      })
      .catch(console.log(error));
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-sign-in me-1"></span> Login
      </button>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Show error if exists */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}

                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
