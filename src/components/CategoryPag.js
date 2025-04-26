import React from "react";

function CategoryPage({ onSelect }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="mb-4">Select Quiz Category</h1>
        <button
          className="btn btn-success btn-lg mb-3"
          onClick={() => onSelect("capitals")}
        >
          Capitals
        </button>
        <br />
        <button
          className="btn btn-info btn-lg"
          onClick={() => onSelect("currencies")}
        >
          Currencies
        </button>
      </div>
    </div>
  );
}

export default CategoryPage;