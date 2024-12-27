import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "RJ" && password === "RJ1234") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid Username or Password");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        type="button"
        className="btn btn-outline-primary ms-2"
        onClick={openModal}
      >
        <span className="fa fa-user-plus me-1"></span> Admin
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "5px",
              maxWidth: "500px",
              width: "100%",
            }}
          >
            <div
              className="modal-header"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h5>Login</h5>
              <button
                type="button"
                onClick={closeModal}
                style={{ border: "none", background: "none" }}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              {!isAuthenticated ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      style={{
                        width: "100%",
                        padding: "8px",
                        marginBottom: "10px",
                      }}
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
                      name="password"
                      style={{ width: "100%", padding: "8px" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-primary w-100 mt-5"
                    style={{
                      padding: "10px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <NavLink
                  to="/contact"
                  className="btn btn-success w-100 mt-5"
                  onClick={closeModal}
                  style={{
                    padding: "10px",
                    backgroundColor: "green",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  Go to Admin Section
                </NavLink>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
