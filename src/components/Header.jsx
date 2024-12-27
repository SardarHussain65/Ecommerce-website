import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";

import "../index.css";
import Admin from "./buttons/Admin";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      history.push(
        `/products/category/${trimmedTerm.replace(/\s+/g, "-").toLowerCase()}`
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="navbar-brand fw-bold" to="/">
                  RAHEEL JEWELLER
                </NavLink>
              </li>
            </ul>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="d-flex w-50">
              <input
                className="form-control me-2 flex w-75"
                type="search"
                placeholder="Search Product"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <CartBtn />
          </div>
        </div>
      </nav>

      {/* Navigation Links */}
      <div
        className="bg-light"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "4%",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {/* Rings Dropdown */}
        <div className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle"
            role="button"
            aria-expanded="false"
          >
            Rings
          </span>
          <ul className="dropdown-menu show-on-hover">
            <li>
              <NavLink
                className="dropdown-item"
                to="/products/category/men's-ring"
              >
                Men's Rings
              </NavLink>
            </li>
            <li>
              <NavLink
                className="dropdown-item"
                to="/products/category/women's-ring"
              >
                Women's Rings
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <NavLink className="nav-link" to="/products/category/bracelet">
          Bracelets
        </NavLink>
        <NavLink className="nav-link" to="/products/category/set">
          Sets
        </NavLink>
        <NavLink className="nav-link" to="/products/category/earring">
          Earrings
        </NavLink>
        <NavLink className="nav-link" to="/products/category/anklet">
          Anklets
        </NavLink>
        <div style={{ alignSelf: "center" }}>
          <Admin />
        </div>
      </div>
    </>
  );
};

export default Header;
