"use client";

import Inputs from "./ui/worksheet/inputs";
import Dropdowns from "./ui/worksheet/dropdowns";
import Results from "./ui/worksheet/results";
import { convertTemperature, convertVolume } from "./lib/converters";
import { temperatures, volumes } from "./lib/units";
import React, { useState } from "react";

export default function Home() {
  const [questionState, setQuestionState] = useState({
    inputValue: 0,
    startingUnit: "",
    endingUnit: "",
    studentAnswer: 0,
  });

  const [isValid, setIsValid] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false); 

  const handleInputChange = (name: string, value: string | number) => {
    setQuestionState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleCheckButton = () => {
  setButtonClicked(true);
  if (isNaN(questionState.inputValue) || isNaN(questionState.studentAnswer) ) {
    setIsValid(false);
    return
  } 

  let answer;
  if (temperatures.includes(questionState.startingUnit)) {
    answer = convertTemperature(questionState).toFixed(1);
  } else {
    answer = convertVolume(questionState).toFixed(1);
  }

  const isAnswerCorrect = answer === questionState.studentAnswer.toFixed(1);
  setIsCorrect(isAnswerCorrect);
};

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-4 md:p-24">
      <div className="mt-5 flex flex-col items-center gap-2 md:mt-8 md:flex-row md:gap-4">
        {/* returns input fields for the basic question structure */}
        <Inputs
          label="Input Value"
          name="inputValue"
          placeholder="0"
          value={questionState.inputValue}
          onChange={handleInputChange}
        />
        <Dropdowns
          label="Starting Unit"
          name="startingUnit"
          value={questionState.startingUnit}
          onChange={handleInputChange}
          options={["Select starting unit", ...temperatures, ...volumes]}
        />
        <Dropdowns
          label="Ending Unit"
          name="endingUnit"
          value={questionState.endingUnit}
          onChange={handleInputChange}
          options={questionState.startingUnit ? (
            temperatures.includes(questionState.startingUnit)
              ? ["Select ending unit", ...temperatures]
              : ["Select ending unit", ...volumes]
          ) : (
            ["Select ending unit"]
          )
          }
        />
        <Inputs
          label="Student Answer"
          name="studentAnswer"
          placeholder="0"
          value={questionState.studentAnswer}
          onChange={handleInputChange}
        />
{/* result is displayed after "check answers" button is clicked */}
        <Results
        isValid={isValid}
          isCorrect={isCorrect}
          buttonClicked={buttonClicked}

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
