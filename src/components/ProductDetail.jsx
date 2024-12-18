// import React from "react";
// import { useParams } from "react-router";
// import { useState } from "react";
// import DATA from "../Data";
// import { useDispatch } from "react-redux";
// import { addItem, delItem } from "../redux/actions/index";

// const ProductDetail = () => {
//   const [cartBtn, setCartBtn] = useState("Add to Cart");

//   /* Now we need a product id which is pass from the product page. */

//   const proid = useParams();
//   const proDetail = DATA.filter((x) => x.id == proid.id);
//   const product = proDetail[0];
//   console.log(product);

//   // We need to store useDispatch in a variable
//   const dispatch = useDispatch();

//   const handleCart = (product) => {
//     if (cartBtn === "Add to Cart") {
//       dispatch(addItem(product));
//       setCartBtn("Remove from Cart");
//     } else {
//       dispatch(delItem(product));
//       setCartBtn("Add to Cart");
//     }
//   };

//   return (
//     <>
//       <div className="container my-5 py-3">
//         <div className="row">
//           <div className="col-md-6 d-flex justify-content-center mx-auto product flex-column">
//             <img
//               src={product.img}
//               alt={product.title}
//               height="100%"
//               width="100%"
//             />
//             <button
//               onClick={() => window.history.back()}
//               className="btn btn-outline-primary my-5"
//             >
//               Go Back / Add More
//             </button>
//           </div>
//           <div className="col-md-6 d-flex flex-column justify-content-center">
//             <h1 className="display-5 fw-bold">{product.title}</h1>
//             <hr />
//             <h2 className="my-4">PKR{product.price}</h2>
//             <p className="lead">{product.desc}</p>
//             <button
//               onClick={() => handleCart(product)}
//               className="btn btn-outline-primary my-5"
//             >
//               {cartBtn}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetail;

import React, { useState } from "react";
import { useParams } from "react-router";
import DATA from "../Data";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  /* Now we need a product id which is passed from the product page. */
  const proid = useParams();
  const proDetail = DATA.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  console.log(product);

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <div className="container my-5 py-3">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product flex-column">
          <img
            src={product.img}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "100%", objectFit: "cover" }}
          />
          <div className="d-flex justify-content-between w-100 my-4">
            <button
              onClick={() => window.history.back()}
              className="btn btn-outline-primary"
            >
              Go Back / Add More
            </button>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary"
            >
              {cartBtn}
            </button>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center text-center">
          <h1 className="display-5 fw-bold">{product.title}</h1>
          <hr />
          <h2 className="my-4">PKR{product.price}</h2>
          <p className="lead">{product.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
