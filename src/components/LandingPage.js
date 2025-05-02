import React from "react";

function LandingPage({ onStart }) {
  return (
    <div className="landing-page bg-gradient vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        {/* Header Section */}
        <h1 className="display-3 fw-bold text-primary mb-4">
          Welcome to LearnMCQs
        </h1>
        <p className="lead  mb-4">
          Your ultimate platform for mastering knowledge through Multiple-Choice Questions (MCQs).
        </p>

        {/* Call-to-Action Button */}
        <button className="btn btn-lg px-5 py-3 btn-custom" onClick={onStart}>
          Start Learning Now
        </button>

        {/* Key Features Section */}
        <div className="mt-5">
          <h5 className="lead mb-3">Why Choose LearnMCQs?</h5>
          <ul className="list-unstyled ">
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
