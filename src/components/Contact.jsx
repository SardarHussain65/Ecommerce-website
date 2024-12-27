import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase"; // Import your Firebase configuration
import DATA from "../Data";

const Contact = () => {
  const { category } = useParams(); // Get category from route parameters

  const [showForm, setShowForm] = useState(false); // Control form visibility
  const [formData, setFormData] = useState({
    itemName: "",
    itemPrice: "",
    itemDescription: "",
    itemImage: null,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, itemImage: e.target.files[0] });
  };

  // Handle form submission
  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      // Create a new document in the "items" collection
      await addDoc(collection(db, "items"), {
        name: formData.itemName,
        price: Number(formData.itemPrice), // Ensure price is stored as a number
        description: formData.itemDescription,
        image: formData.itemImage ? formData.itemImage.name : null, // Optional: Include image name
        createdAt: new Date(), // Timestamp
      });

      alert("Item added successfully!");

      // Reset form fields
      setFormData({
        itemName: "",
        itemPrice: "",
        itemDescription: "",
        itemImage: null,
      });

      setShowForm(false); // Hide the form
    } catch (error) {
      console.error("Error adding item to Firebase:", error);
      alert("Failed to add item. Please try again.");
    }
  };

  // Filter data based on category
  const filteredData = DATA.filter((item) => {
    if (category) {
      return item.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .includes(category.toLowerCase());
    }
    return true;
  });

  const cardItem = (item) => (
    <div
      className="card my-5 py-4"
      key={item.id}
      style={{ width: "16rem", height: "22rem" }}
    >
      <img
        src={item.img}
        className="card-img-top"
        alt={item.title}
        style={{
          height: "50%",
          objectFit: "cover",
        }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{item.title}</h5>
        <p className="lead">
          <span>PKR </span>
          {item.price}
        </p>
        <NavLink
          to={`/products/${item.id}`}
          className="btn btn-outline-primary"
        >
          Remove it
        </NavLink>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container py-5">
        <NavLink
          to="#"
          className="btn btn-outline-primary mb-4"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add Items"}
        </NavLink>
        {showForm && (
          <form onSubmit={handleAdd} className="my-4">
            <div className="mb-3">
              <label className="form-label">Item Name</label>
              <input
                type="text"
                name="itemName"
                className="form-control"
                value={formData.itemName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Item Price</label>
              <input
                type="number"
                name="itemPrice"
                className="form-control"
                value={formData.itemPrice}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Item Description</label>
              <textarea
                name="itemDescription"
                className="form-control"
                value={formData.itemDescription}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Item Image</label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleImageChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Item
            </button>
          </form>
        )}
        <div className="row">
          <div className="col-12 text-center">
            <h1>{category ? `${category.toUpperCase()}s` : "Our Products"}</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {filteredData.length === 0 ? (
            <p className="text-center text-danger fs-4 fw-bold">
              No products found for this category.
            </p>
          ) : (
            filteredData.map(cardItem)
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
