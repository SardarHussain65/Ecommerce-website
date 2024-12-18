import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="/assets/images/contact.png"
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="John Smith"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="container">
              <p>
                Thank you for visiting our Silver Jewelry Store! We would love
                to hear from you. Whether you have a question about our
                products, need assistance with an order, or want to inquire
                about custom silver jewelry, our team is here to help.
              </p>
              <p>
                Feel free to reach out to us via email or phone, or you can use
                the contact form above to send us a direct message. We aim to
                respond to all inquiries within 24 hours.
              </p>
              <h2>Our Contact Details:</h2>
              <ul>
                <li>Email: raheeljeweller859@gmail.com</li>
                <li>Phone: +923125713702</li>
                <li>Address: Sarafa Bazar Rawalpindi, Pakistan</li>
              </ul>
              <p>
                If you have any specific requests, feel free to let us know, and
                we will do our best to make your silver jewelry experience
                extraordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
