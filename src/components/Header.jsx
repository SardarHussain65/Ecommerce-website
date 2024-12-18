// import React from "react";
// import { NavLink } from "react-router-dom";
// import CartBtn from "./buttons/CartBtn";
// // import Login from "./buttons/Login";
// // import Signup from "./buttons/Signup";
// import "../index.css";

// const Header = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid py-2">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink className="nav-link" aria-current="page" to="/">
//                   Home
//                 </NavLink>
//               </li>
//               {/* <li className="nav-item dropdown">
//                 <NavLink
//                   className="nav-link dropdown-toggle"
//                   to="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Our Services
//                 </NavLink>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <NavLink
//                       className="dropdown-item"
//                       to="/products/mens-rings"
//                     >
//                       Men's Rings
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className="dropdown-item"
//                       to="/products/womens-rings"
//                     >
//                       Women's Rings
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/products/bracelets">
//                       Bracelets
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/products/earrings">
//                       Earrings
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/products/anklets">
//                       Anklets
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/products/sets">
//                       Sets
//                     </NavLink>
//                   </li>
//                 </ul>
//               </li> */}

//               {/* <li className="nav-item">
//                 <NavLink className="nav-link" to="/about">
//                   About
//                 </NavLink>
//               </li> */}
//               {/* <li className="nav-item">
//                 <NavLink className="nav-link" to="/contact">
//                   Contact
//                 </NavLink>
//               </li> */}
//             </ul>
//             <NavLink
//               className="navbar-brand fw-bold"
//               style={{ marginRight: "auto" }}
//               to="/"
//             >
//               RAHEEL JEWELLER
//             </NavLink>
//             {/* <Login /> */}
//             {/* <Signup /> */}

//             <CartBtn />
//           </div>
//         </div>
//       </nav>
//       <div
//         className="bg-light"
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center",
//           flexWrap: "wrap",
//           gap: "10px",
//           fontWeight: "bold",
//         }}
//       >
//         <NavLink className="nav-link" to="/products/category/ring">
//           Rings
//         </NavLink>
//         <NavLink className="nav-link" to="/products/category/bracelet">
//           Bracelets
//         </NavLink>

//         <NavLink className="nav-link" to="/products/category/set">
//           Sets
//         </NavLink>
//         <NavLink className="nav-link" to="/products/category/earring">
//           Earrings
//         </NavLink>
//         <NavLink className="nav-link" to="/products/category/anklet">
//           Anklets
//         </NavLink>
//         <NavLink className="nav-link" to="/products/category/men's ring">
//           Men's Rings
//         </NavLink>
//         <NavLink className="nav-link" to="/products/category/women's ring">
//           Women's Rings
//         </NavLink>
//       </div>
//     </>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { NavLink, useHistory } from "react-router-dom";
// import CartBtn from "./buttons/CartBtn";
// import "../index.css";

// const Header = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const history = useHistory();
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const trimmedTerm = searchTerm.trim();
//     if (trimmedTerm) {
//       history.push(
//         `/products/category/${trimmedTerm.replace(/\s+/g, "-").toLowerCase()}`
//       );
//     }
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid py-2">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink
//                   className="navbar-brand fw-bold"
//                   // style={{ marginRight: "auto" }}
//                   to="/"
//                 >
//                   RAHEEL JEWELLER
//                 </NavLink>
//               </li>
//             </ul>

//             {/* Search Form */}
//             <form onSubmit={handleSearch} className="d-flex w-50">
//               <input
//                 className="form-control me-2 flex w-75"
//                 type="search"
//                 placeholder="Search Product"
//                 aria-label="Search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>

//             <CartBtn />
//           </div>
//         </div>
//       </nav>

//       <div
//         className="bg-light"
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center",
//           flexWrap: "wrap",
//           gap: "10px",
//           fontWeight: "bold",
//         }}
//       >
//         {/* Rings Dropdown */}
//         <div className="nav-item dropdown">
//           <NavLink
//             className="nav-link dropdown-toggle"
//             to="#"
//             id="ringDropdown"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//             style={{ cursor: "pointer" }}
//           >
//             Rings
//           </NavLink>
//           <ul
//             className="dropdown-menu"
//             aria-labelledby="ringDropdown"
//             style={{ display: "none" }}
//           >
//             <li>
//               <NavLink
//                 className="dropdown-item"
//                 to="/products/category/men's-ring"
//               >
//                 Men's Rings
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className="dropdown-item"
//                 to="/products/category/women's-ring"
//               >
//                 Women's Rings
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* Other Links */}
//         <NavLink className="nav-link" to="/products/category/bracelet">
//           Bracelets
//         </NavLink>
//         <NavLink className="nav-link" to="/products/category/set">
//           Sets
//         </NavLink>
//         <NavLink className="nav-link" to="/products/category/earring">
//           Earrings
//         </NavLink>
//         <NavLink className="nav-link" to="/products/category/anklet">
//           Anklets
//         </NavLink>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import "../index.css";

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
          gap: "10px",
          fontWeight: "bold",
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
      </div>
    </>
  );
};

export default Header;
