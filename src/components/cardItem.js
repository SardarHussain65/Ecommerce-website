import React from "react";
import { NavLink } from "react-router-dom";
import { imageBaseUrl } from "../App";

const CardItem = ({ item, actionLabel, useCustomImage }) => {
  const imageUrl = useCustomImage ? item.image : `${imageBaseUrl}${item.image}`;

  return (
    <div
      className="card my-5 py-4"
      key={item.id}
      style={{ width: "16rem", height: "22rem" }}
    >
      <img
        src={imageUrl}
        className="card-img-top"
        alt={item.title || item.name || "Product Image"}
        style={{
          height: "50%",
          objectFit: "cover",
        }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{item.title || item.name || "Unknown"}</h5>
        <p className="lead">
          <span>PKR </span>
          {item.price || "N/A"}
        </p>
        <NavLink
          to={`/products/${item.id}`}
          className="btn btn-outline-primary"
        >
          {actionLabel}
        </NavLink>
      </div>
    </div>
  );
};

export default CardItem;
