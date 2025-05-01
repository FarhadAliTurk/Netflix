import React from "react";

function ResultPage({ score, onRestart }) {
  return (
    <div className="result-page vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg text-center" style={{ width: "22rem" }}>
        <div className="card-body">
          {/* Title */}
          <h2 className="card-title text-primary fw-bold mb-4">
            🎉 Congratulations! 🎉
          </h2>

          {/* Score */}
          <h4 className="card-subtitle mb-3 text-muted">Your Final Score</h4>
          <p className="display-1 text-success fw-bold">{score}</p>

          {/* Restart Button */}
          <button
            className="btn btn-primary btn-lg px-5 py-2 mt-3"
            onClick={onRestart}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;