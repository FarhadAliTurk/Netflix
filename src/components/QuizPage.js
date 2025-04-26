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
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          {/* Progress Indicator */}
          <h6 className="text-muted mb-3">
            Question {currentQuestion + 1} of {totalQuestions}
          </h6>

          {/* Question */}
          <h5 className="card-title">{question.question}</h5>

          {/* Answer Options */}
          <div>
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`btn btn-block mb-3 ${
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
            className="btn btn-primary"
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