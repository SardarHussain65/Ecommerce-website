import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <NavLink className="navbar-brand fw-bold" to="/">
              RAHEEL JEWELLER
            </NavLink>
            <p className="text-muted">Exquisite Silver Jewelry</p>
          </div>

          <div className="col-md-4 text-center">
            <NavLink to="/about">
              <img
                src="/assets/images/logo (2).png"
                alt="About Us"
                height="80px"
                width="150px"
              />
            </NavLink>
          </div>
          <div className="col-md-4 text-center">
            <p className="fw-bold">Follow Us</p>
            <div>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61567714959416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark mx-2"
              >
                <i className="fa-brands fa-facebook fa-2x"></i>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@raheeljeweller2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark mx-2"
              >
                <i className="fa-brands fa-tiktok fa-2x"></i>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@RaheelJeweller"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark mx-2"
              >
                <i className="fa-brands fa-youtube fa-2x"></i>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/raheeljeweller/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark mx-2"
              >
                <i className="fa-brands fa-square-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="text-muted mb-0">
            © {new Date().getFullYear()} Raheel Jeweller. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
