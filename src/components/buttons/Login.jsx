import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { supabase } from "../../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (response?.error) {
        setError(response.error.message);
      } else {
        const token = response.data.session.access_token;
        localStorage.setItem("token", token);

        // **Close the modal by simulating a button click**
        const closeButton = document.querySelector("#loginModal .btn-close");
        if (closeButton) {
          closeButton.click();
        }

        history.push("/Admin"); // Navigate to Admin page
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      {/* Login Button */}
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-sign-in me-1"></span> Login
      </button>

      {/* Login Modal */}
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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
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
                    placeholder="Enter your password"
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
