import React from "react";

function CategoryPage({ onSelect }) {
  return (
    <div className="category-page vh-100">
      <div className="text-center">
        {/* Header */}
        <h1 className="display-4 fw-bold mb-5 text-primary">
          Choose Your Quiz Category
        </h1>

        {/* Scrollable Container */}
        <div className="category-buttons-container">
          {/* Buttons */}
          <button
            className="btn btn-outline-success btn-lg mb-3 px-5 py-3 category-btn"
            onClick={() => onSelect("pakistaniGK")}
          >
            🇵🇰 Pakistani GK
          </button>
          <br />
          <button
            className="btn btn-outline-info btn-lg mb-3 px-5 py-3 category-btn"
            onClick={() => onSelect("capitals")}
          >
            🌍 Capitals
          </button>
          <br />
          <button
            className="btn btn-outline-secondary btn-lg mb-3 px-5 py-3 category-btn"
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
          <button
            className="btn btn-outline-primary btn-lg px-5 py-3 category-btn"
            onClick={() => onSelect("scientificTools")}
          >
            🛠️ Scientific Tools
          </button>
          <br />
          <button
            className="btn btn-outline-danger btn-lg px-5 py-3 category-btn"
            onClick={() => onSelect("importantDays")}
          >
            📅Important Days
          </button>
          <br />
          <button
            className="btn btn-outline-info btn-lg px-5 py-3 category-btn"
            onClick={() => onSelect("organizations")}
          >
            🌐Organizations
          </button>
          <br />
          <button
            className="btn btn-outline-success btn-lg px-5 py-3 category-btn"
            onClick={() => onSelect("booksAndAuthors")}
          >
            📚Books Authors
          </button>
          <br />
          <button
            className="btn btn-outline-primary btn-lg px-5 py-3 category-btn"
            onClick={() => onSelect("islamicGK")}
          >
            🕌Islamic GK
          </button>
          <br />
          <button
            className="btn btn-outline-warning btn-lg px-5 py-3 category-btn"
            onClick={() => onSelect("computerBasics")}
          >
            💻Computer Basics
          </button>


        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
