import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import { supabase } from "../App";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", id)
          .single();
        if (error) throw error;
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product: ", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleCart = () => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container my-5 py-3">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product flex-column">
          <img
            src={`https://xduejiadxdhlxveqsfwz.supabase.co/storage/v1/object/public/${product.image}`}
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
            <button onClick={handleCart} className="btn btn-outline-primary">
              {cartBtn}
            </button>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center text-center">
          <h1 className="display-5 fw-bold">{product.title}</h1>
          <hr />
          <h2 className="my-4">PKR{product.price}</h2>
          <p className="lead">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
