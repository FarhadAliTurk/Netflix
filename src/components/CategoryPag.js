import React from "react";

function CategoryPage({ onSelect }) {
  return (
    <div className="category-page vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        {/* Header */}
        <h1 className="display-4 fw-bold mb-5 text-primary">
          Choose Your Quiz Category
        </h1>

        {/* Buttons */}
        <button
          className="btn btn-outline-success btn-lg mb-3 px-5 py-3 category-btn"
          onClick={() => onSelect("capitals")}
        >
          🌍 Capitals
        </button>
        <br />
        <button
          className="btn btn-outline-info btn-lg mb-3 px-5 py-3 category-btn"
          onClick={() => onSelect("currencies")}
        >
          💰 Currencies
        </button>
        <br />
        <button
          className="btn btn-outline-warning btn-lg px-5 py-3 category-btn"
          onClick={() => onSelect("discoveriesAndInventions")}
        >
          🔬 Discoveries & Inventions
        </button>
        <br />
        <br />
        <button
          className="btn btn-outline-primary btn-lg px-5 py-3 category-btn"
          onClick={() => onSelect("scientificTools")}
        >
           🛠️ Scientific Tools
        </button>
    


      </div>
    </div>
  );
}

export default CategoryPage;