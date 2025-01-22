import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import "../index.css";
import Login from "./buttons/Login";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      history.push(
        `/products/search/${trimmedTerm.replace(/\s+/g, "-").toLowerCase()}`
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <NavLink className="navbar-brand fw-bold" to="/">
            RAHEEL JEWELLER
          </NavLink>
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
            <form
              onSubmit={handleSearch}
              className="d-flex flex-grow-1 align-items-center justify-content-center justify-content-lg-end mx-lg-4 my-2 my-lg-0"
            >
              <input
                className="form-control me-2 w-50" // Makes input 50% of parent width
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
            <div className="d-flex align-items-center mt-3 mt-lg-0">
              <Login />
              <CartBtn />
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-light d-flex flex-wrap justify-content-center align-items-center gap-5 py-2 px-2 px-md-4">
        <div className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle fw-bold"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Rings
          </span>
          <ul className="dropdown-menu">
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

        <div className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle fw-bold"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Bracelets
          </span>
          <ul className="dropdown-menu">
            <li>
              <NavLink
                className="dropdown-item"
                to="/products/category/men's-bracelet"
              >
                Men's Bracelets
              </NavLink>
            </li>
            <li>
              <NavLink
                className="dropdown-item"
                to="/products/category/women's-bracelet"
              >
                Women's Bracelets
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink className="nav-link fw-bold" to="/products/category/set">
          Sets
        </NavLink>
        <NavLink className="nav-link fw-bold" to="/products/category/earring">
          Earrings
        </NavLink>
        <NavLink className="nav-link fw-bold" to="/products/category/anklet">
          Anklets
        </NavLink>
        <NavLink className="nav-link fw-bold" to="/products/category/chain">
          Chains
        </NavLink>
      </div>
    </>
  );
};

export default Header;
