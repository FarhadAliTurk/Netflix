import React, { useState } from "react";
import { questions } from "../questions";

function QuizPage({ category, onEnd }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const totalQuestions = questions[category].length;

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[category][currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      onEnd(score);
    }
  };

  const question = questions[category][currentQuestion];

  return (
    <div className="quiz-page container mt-5 vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg">
        {/* Progress Bar */}
        <div className="progress" style={{ height: "8px" }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{
              width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
            }}
            aria-valuenow={((currentQuestion + 1) / totalQuestions) * 100}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="card-body">
          {/* Question Counter */}
          <h6 className="text-muted mb-4">
            Question {currentQuestion + 1} of {totalQuestions}
          </h6>

          {/* Question */}
          <h3 className="card-title mb-4 text-primary">{question.question}</h3>

          {/* Answer Options */}
          <div className="mb-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`btn btn-lg btn-block mb-3 ${
                  selectedAnswer
                    ? option === question.correctAnswer
                      ? "btn-success"
                      : option === selectedAnswer
                      ? "btn-danger"
                      : "btn-outline-secondary"
                    : "btn-outline-primary"
                }`}
                disabled={!!selectedAnswer}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            className="btn btn-primary btn-lg px-5"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;