import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../App";
import CardItem from "./cardItem";

export const imageBaseUrl =
  "https://xduejiadxdhlxveqsfwz.supabase.co/storage/v1/object/public/";

const Product = () => {
  const { category } = useParams(); // Get category from URL
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw error;
      setItems(data || []); // Ensure items is always an array
    } catch (error) {
      console.error("Error getting items:", error);
    }
  };

  // Filter items based on the category
  const filteredData = items.filter((item) => {
    const title = item?.name || ""; // Handle undefined titles
    if (category) {
      return title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .includes(category.toLowerCase());
    }
    return true;
  });

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Our Products</h1>
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
            filteredData.map((item) => (
              <CardItem
                key={item.id}
                item={item}
                actionLabel="Buy Now"
                useCustomImage={false}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
