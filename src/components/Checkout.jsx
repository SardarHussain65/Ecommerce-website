import React, { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const state = useSelector((state) => state.addItem);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    address2: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const total = state.reduce((sum, item) => sum + item.price, 0);

  const validateField = (field, value) => {
    if (["firstName", "lastName", "address"].includes(field)) {
      return value.trim() === "";
    }
    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, address, address2 } = formData;
    const fullName = `${firstName} ${lastName}`;

    // Generate item list with properly constructed image URLs
    const itemDetails = state
      .map(
        (item) =>
          `\n- ${item.name}(Ring Size: ${
            item.ringSize || "Not specified"
          }): PKR ${
            item.price
          }\nImage: https://xduejiadxdhlxveqsfwz.supabase.co/storage/v1/object/public/${
            item.image
          }`
      )
      .join("\n");

    const message = `Order Details:
Name: ${fullName}
Email: ${email}
Address 1: ${address}
Address 2: ${address2}
Items:${itemDetails}
Total Items: ${state.length}
Total Price: PKR ${total}`;

    const whatsappUrl = `https://wa.me/923369164460?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(true); // Show the modal on successful submission
  };
  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.address.trim();

  const itemList = (item) => (
    <li
      className="list-group-item d-flex justify-content-between lh-sm"
      key={item.id}
    >
      <div>
        <h6 className="my-0">{item.name}</h6>
        <p className="text-muted">
          Ring Size: {item.ringSize || "Not specified"}
        </p>
        <img
          src={`https://xduejiadxdhlxveqsfwz.supabase.co/storage/v1/object/public/${item.image}`}
          alt={item.title}
          className="mt-3"
          style={{
            height: "100%",
            width: "50%",
            objectFit: "fill",
            alignSelf: "center",
          }}
        />
      </div>
      <span className="text-muted">PKR {item.price}</span>
    </li>
  );
  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (Price)</span>
                <strong>PKR {total}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form
              className="needs-validation"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">
                      First name is required.
                    </div>
                  )}
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">
                      Last name is required.
                    </div>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.address ? "is-invalid" : ""
                    }`}
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                  {errors.address && (
                    <div className="invalid-feedback">Address is required.</div>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="my-4" />

              <p>
                Kindly share the details of the items you have selected with us
                on WhatsApp by Clicking the button below, and we will contact
                you at the earliest convenience.
              </p>

              <button
                className="w-100 btn btn-primary btn-lg"
                type="submit"
                disabled={!isFormValid}
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="modal"
          style={{
            display: "block",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Success</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <p class="fs-4 fw-bold">
                  Thank you for visiting our website, and we wish you the best
                  of luck!
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
