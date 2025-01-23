import React, { useEffect, useState } from "react";
import ProductTable from "./productTable";
import { useHistory } from "react-router-dom";

function AdminSection() {
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/Home"); // Navigate to Admin page
    } else {
      setLoading(false); // Stop loading if token exists
    }

    // Function to remove token when user exits the page
    const handleUnload = () => {
      localStorage.removeItem("token");
    };

    // Listen for page unload event
    window.addEventListener("beforeunload", handleUnload);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  if (loading) {
    return <h2>Loading...</h2>; // Display a loading message while checking token
  }

  return (
    <div className="container">
      <header className="bg-dark text-white py-3 text-center">
        <h1>Admin Section</h1>
      </header>
      <main className="mt-4">
        <ProductTable />
      </main>
    </div>
  );
}

export default AdminSection;
