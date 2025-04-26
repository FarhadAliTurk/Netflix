import React from "react";

function LandingPage({ onStart }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="mb-4">Welcome to the Quiz App</h1>
        <button className="btn btn-primary btn-lg" onClick={onStart}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default LandingPage;