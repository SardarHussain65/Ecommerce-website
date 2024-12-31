import React from "react";
import ProductTable from "./productTable";

function AdminSection() {
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
