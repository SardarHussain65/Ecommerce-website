import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import DATA from "../Data";

const Product = () => {
  const { category } = useParams(); // Get category from the route parameter
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
          <span>PKR</span>
          {item.price}
        </p>
        <NavLink
          to={`/products/${item.id}`}
          className="btn btn-outline-primary"
        >
          Buy Now
        </NavLink>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>
              {/* {category ? (category + "s").toUpperCase() : "Our Products"} */}
              Our Products
            </h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {filteredData.length === 0 ? (
            <p class="text-center text-danger fs-4 fw-bold">
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

export default Product;
