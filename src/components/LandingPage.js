import React from "react";

function LandingPage({ onStart }) {
  return (
    <div className="landing-page bg-light vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        {/* Header Section */}
        <h1 className="display-4 fw-bold text-primary mb-4">
          Welcome to LearnMCQs
        </h1>
        <p className="lead text-secondary mb-4">
          Your ultimate platform for mastering knowledge through Multiple-Choice Questions (MCQs).
        </p>

        {/* Call-to-Action Button */}
        <button className="btn btn-primary btn-lg px-5 py-3" onClick={onStart}>
          Start Learning Now
        </button>

        {/* Key Features Section */}
        <div className="mt-5">
          <h5 className="text-dark">Why Choose LearnMCQs?</h5>
          <ul className="list-unstyled text-muted mt-3">
            <li>✔ Professionally designed quizzes to test your knowledge.</li>
            <li>✔ Multiple categories like Capitals, Currencies, and Discoveries.</li>
            <li>✔ Real-time feedback on your answers.</li>
            <li>✔ Fully responsive and mobile-friendly experience.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;