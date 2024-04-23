"use client";

import Inputs from "./ui/worksheet/inputs";
import Dropdowns from "./ui/worksheet/dropdowns";
import React, { useState } from "react";

export default function Home() {
  const [questionState, setQuestionState] = useState({
    inputValue: 0,
    startingUnit: "",
    endingUnit: "",
    studentAnswer: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuestionState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckButton = () => {};

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-4 md:p-24">
      <div className="mt-5 flex flex-col items-center gap-2 md:mt-8 md:flex-row md:gap-4">
        {/* returns input fields for the basic question structure */}
        <Inputs
          label="Input Value"
          placeholder="0"
          value={questionState.inputValue}
          onChange={handleInputChange}
        />
        <Dropdowns
          label="Starting Unit"
          value={questionState.startingUnit}
          onChange={handleInputChange}
          options={[
            "Liters",
            "Tablespoons",
            "Cubic-Inches",
            "Cups",
            "Cubic-Feet",
            "Gallons",
            "Celsius",
            "Kelvin",
            "Fahrenheit",
            "Rankine",
          ]}
        />
        <Dropdowns
          label="Ending Unit"
          value={questionState.endingUnit}
          onChange={handleInputChange}
          options={
            questionState.startingUnit === "Celsius" ||
            questionState.startingUnit === "Kelvin" ||
            questionState.startingUnit === "Fahrenheit" ||
            questionState.startingUnit === "Rankine"
              ? ["Celsius", "Kelvin", "Fahrenheit", "Rankine"]
              : [
                  "Liters",
                  "Tablespoons",
                  "Cubic-Inches",
                  "Cups",
                  "Cubic-Feet",
                  "Gallons",
                ]
          }
        />
        <Inputs
          label="Student Answer"
          placeholder="0"
          value={questionState.studentAnswer}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-5 flex gap-2 md:mt-8 md:gap-4">
        <button
          className="flex h-10 items-right rounded-lg bg-blue-500 p-2  text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          onClick={handleCheckButton}
        >
          Check Answers
        </button>
      </div>
    </main>
  );
}
