import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../App";
import CardItem from "./cardItem";

export const imageBaseUrl =
  "https://xduejiadxdhlxveqsfwz.supabase.co/storage/v1/object/public/";

const Product = () => {
  const { category } = useParams(); // Get category from URL
  const { search } = useParams(); // Get category from URL

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
    const title = item?.category || ""; // Handle undefined titles
    if (category) {
      return title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .includes(category.toLowerCase());
    }
    if (search) {
      const title = item?.name || ""; // Handle undefined titles

      return title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .includes(search.toLowerCase());
    }
    return true;
  });

  return (
    <div>
      <div className="container">
        <div className="row justify-content-around">
          {filteredData.length === 0 ? (
            <div
              style={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p className="text-center text-danger fs-4 fw-bold align-self-center">
                No products found for this category.
              </p>
            </div>
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
