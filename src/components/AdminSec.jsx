import React from "react";
import { NavLink } from "react-router-dom";

const AdminSec = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Welcome to Raheel jeweller, your trusted destination for exquisite
              and authentic jewelry. We take pride in offering high-quality
              pieces crafted from 100% pure 925 silver and gold, ensuring each
              item is verified for purity with advanced testing machines. Our
              talented artisans specialize in creating bespoke designs, bringing
              your unique ideas to life with precision and care. From timeless
              classics to contemporary masterpieces, our collection caters to
              every taste and occasion. At Raheel jeweller, we are committed to
              quality, transparency, and exceptional customer service, making
              each purchase a treasured experience. Discover the art of fine
              jewelry with us today!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/aboutUs.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSec;
