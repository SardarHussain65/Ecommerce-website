import React, { useEffect, useState } from "react";
import { supabase, imageBaseUrl } from "../App";

const ProductTable = () => {
  const [items, setItems] = useState([]); // State to hold fetched items
  const [showForm, setShowForm] = useState(false); // Toggle Add Product form visibility
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
    category: "", // Add category field
  });
  const [selectedProduct, setSelectedProduct] = useState(null); // For updating product

  // Fetch data from Supabase
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data, error } = await supabase.from("products").select("*");
        if (error) throw error;
        setItems(data || []);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image input change
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle form submission (Add or Update)
  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = selectedProduct?.image || null;

      if (formData.image) {
        const { data, error } = await supabase.storage
          .from("files")
          .upload(
            `images/${Date.now()}_${formData.image.name}`,
            formData.image,
            {
              upsert: true, // Avoid duplicate uploads
            }
          );
        if (error) throw error;
        imageUrl = data.fullPath; // Save this path in the database
      }

      const payload = {
        name: formData.name,
        price: parseFloat(formData.price),
        description: formData.description,
        image: imageUrl,
        category: formData.category, // Include category in payload
      };

      if (selectedProduct) {
        // Update product
        const { error } = await supabase
          .from("products")
          .update(payload)
          .eq("id", selectedProduct.id);
        if (error) throw error;
        alert("Product updated successfully!");
      } else {
        // Add new product
        const { error } = await supabase.from("products").insert([payload]);
        if (error) throw error;
        alert("Product added successfully!");
      }

      // Reset form and refresh data
      setFormData({
        name: "",
        price: "",
        description: "",
        image: null,
        category: "",
      });
      setShowForm(false);
      setSelectedProduct(null);
      const { data: updatedItems } = await supabase
        .from("products")
        .select("*");
      setItems(updatedItems || []);
    } catch (error) {
      console.error("Error saving item:", error.message);
      alert("Failed to save item. Please try again.");
    }
  };

  // Handle Delete Product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    try {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
      alert("Product deleted successfully!");
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error.message);
      alert("Failed to delete product. Please try again.");
    }
  };

  // Handle Update Product button
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      image: null, // Keep existing image
      category: product.category, // Populate category field
    });
    setShowForm(true);
  };

  return (
    <div className="container py-5">
      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          setShowForm(!showForm);
          if (!showForm) {
            setSelectedProduct(null); // Reset selected product when closing the form
            setFormData({
              name: "",
              price: "",
              description: "",
              image: null,
              category: "",
            });
          }
        }}
      >
        {showForm ? "Close Form" : "Add Product"}
      </button>

      {showForm && (
        <form onSubmit={handleAddOrUpdate} className="my-4">
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              name="category"
              className="form-control"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Men's Ring">Men's Ring</option>
              <option value="Women's Ring">Women's Ring</option>
              <option value="Men's Bracelet">Men's Bracelet</option>
              <option value="Women's Bracelet">Women's Bracelet</option>
              <option value="Set">Set</option>
              <option value="Earring">Earring</option>
              <option value="Anklets">Anklets</option>
              <option value="Chain">Chain</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Product Image</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={handleImageChange}
              required={!selectedProduct} // Require image only for new products
            />
          </div>
          <button type="submit" className="btn btn-success">
            {selectedProduct ? "Update Product" : "Add Product"}
          </button>
        </form>
      )}

      <h2 className="text-center mb-4">Products List</h2>
      {items.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                  <img
                    src={
                      product.image
                        ? `${imageBaseUrl}/${product.image}`
                        : "https://via.placeholder.com/100x60"
                    }
                    alt={product.name}
                    style={{
                      width: "100px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-info btn-sm me-2"
                    onClick={() => handleEdit(product)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-muted">No products available.</p>
      )}
    </div>
  );
};

export default ProductTable;
