import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import CategoryPage from "./components/CategoryPag";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [step, setStep] = useState("landing");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState(0);

  const handleStart = () => setStep("category");
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setStep("quiz");
  };
  const handleQuizEnd = (finalScore) => {
    setScore(finalScore);
    setStep("result");
  };
  const handleRestart = () => {
    setStep("landing");
    setScore(0);
    setCategory("");
  };

  return (
    <div>
      {step === "landing" && <LandingPage onStart={handleStart} />}
      {step === "category" && <CategoryPage onSelect={handleCategorySelect} />}
      {step === "quiz" && <QuizPage category={category} onEnd={handleQuizEnd} />}
      {step === "result" && <ResultPage score={score} onRestart={handleRestart} />}
      <Footer />
    </div>
    
  );
}

export default App;