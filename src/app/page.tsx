"use client";

import React, { useState } from "react";
import Row from "./ui/worksheet-rows";
import { temperatures} from "./lib/units";
import { convertTemperature, convertVolume } from "./lib/converters";

export default function Home() {
  const [questionStates, setQuestionStates] = useState([
    {
      inputValue: 0,
      startingUnit: "",
      endingUnit: "",
      studentAnswer: 0,
    },
  ]);

  const [results, setResults] = useState([]);

  const handleAddRow = () => {
    setQuestionStates((prevStates) => [
      ...prevStates,
      {
        inputValue: 0,
        startingUnit: "",
        endingUnit: "",
        studentAnswer: 0,
      },
    ]);
  };

  const handleRemoveRow = () => {};

  const handleInputChange = (index, updatedQuestionState) => {
    const newQuestionStates = [...questionStates];
    newQuestionStates[index] = updatedQuestionState;
    setQuestionStates(newQuestionStates);
  };

  const handleCheckAnswers = () => {
    
    const newResults = questionStates.map((questionState) => {
      const { inputValue, startingUnit, endingUnit, studentAnswer } = questionState;
      let isValid = true;
      let isCorrect = false;
      let answer;
console.log(questionState)
      if (
        isNaN(inputValue) ||
        isNaN(studentAnswer) ||
        startingUnit === "Starting Unit" ||
        endingUnit === "Ending Unit"
      ) {
        isValid = false;
        return
      } else {
        if (temperatures.includes(startingUnit)) {
          answer = convertTemperature(questionState).toFixed(1);
        } else {
          answer = convertVolume(questionState).toFixed(1);
        }

        isCorrect = answer === questionState.studentAnswer.toFixed(1);
      }

      return { isValid, isCorrect };
    });

    setResults(newResults);
    console.log('results', results)
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-4 md:p-24">
      {questionStates.map((state, index) => (
        <Row
          key={index}
          initialState={state}
          onInputChange={(updatedState) => handleInputChange(index, updatedState)}
          result={results[index]} 
        />
      ))}
      <div className="mt-5 flex gap-2 md:mt-8 md:gap-4">
        <button
          className="flex h-10 items-right rounded-lg bg-blue-500 p-2  text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          onClick={handleAddRow}
        >
          Add Row
        </button>
        <button
          className="flex h-10 items-right rounded-lg bg-blue-500 p-2  text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          onClick={handleCheckAnswers}
        >
          Check Answers
        </button>
        <button
          className="flex h-10 items-right rounded-lg bg-blue-500 p-2  text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          onClick={handleRemoveRow}
        >
          Remove Row
        </button>
      </div>
    </main>
  );
}