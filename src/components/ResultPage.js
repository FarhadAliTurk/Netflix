import React from "react";

function ResultPage({ score, onRestart }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card text-center" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Your Score</h5>
          <p className="card-text display-4">{score}</p>
          <button className="btn btn-primary" onClick={onRestart}>
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;