"use client";

import Inputs from "./ui/worksheet/inputs";
import Dropdowns from "./ui/worksheet/dropdowns";
import Results from "./ui/worksheet/results";
import { convertTemperature, convertVolume } from "./lib/converters";
import { temperatures, volumes } from "./lib/units";
import React, { useState } from "react";

export default function Home() {
  const [questionStates, setQuestionStates] = useState([
    {
      inputValue: 0,
      startingUnit: "",
      endingUnit: "",
      studentAnswer: 0,
    },
  ]);

  const [isValid, setIsValid] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleInputChange = (index: number, name: string, value: string | number) => {
    setQuestionStates((prevStates) => {
      const newQuestionStates = [...prevStates];
      newQuestionStates[index] = {
        ...newQuestionStates[index],
        [name]: value,
      };
      return newQuestionStates;
    });
  };

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

  const handleCheckButton = () => {
    setButtonClicked(true);
    questionStates.forEach((questionState, index) => {
      const { inputValue, startingUnit, endingUnit, studentAnswer } = questionState;

      if (
        isNaN(inputValue) ||
        isNaN(studentAnswer) ||
        startingUnit === 'Starting Unit' ||
        endingUnit === 'Ending Unit'
      ) {
        setIsValid(false);
        return;
      }

      let answer;
      if (temperatures.includes(startingUnit)) {
        answer = convertTemperature(questionState).toFixed(1);
      } else {
        answer = convertVolume(questionState).toFixed(1);
      }

      const isAnswerCorrect = answer === questionState.studentAnswer.toFixed(1);
      setIsCorrect(isAnswerCorrect);
    });
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-4 md:p-24">
     
      {questionStates.map(({ inputValue, startingUnit, endingUnit, studentAnswer }, index) => (

        <div
          key={index}
          className="mt-5 flex flex-col items-center gap-2 md:mt-8 md:flex-row md:gap-4"
        >
          {/* returns input fields for the basic question structure */}
          <Inputs
            label="Input Value"
            name="inputValue"
            placeholder="0"
            value={inputValue}
            onChange={(name, value) => handleInputChange(index, name, value)}
          />
          <Dropdowns
            label="Starting Unit"
            name="startingUnit"
            value={startingUnit}
            onChange={(name, value) => handleInputChange(index, name, value)}
            options={["Starting Unit", ...temperatures, ...volumes]}
          />
          <Dropdowns
            label="Ending Unit"
            name="endingUnit"
            value={endingUnit}
            onChange={(name, value) => handleInputChange(index, name, value)}
            options={
              startingUnit
                ? temperatures.includes(startingUnit)
                  ? ["Ending Unit", ...temperatures]
                  : ["Ending Unit", ...volumes]
                : ["Ending Unit"]
            }
          />
          <Inputs
            label="Student Answer"
            name="studentAnswer"
            placeholder="0"
            value={studentAnswer}
            onChange={(name, value) => handleInputChange(index, name, value)}
          />
          {/* result is displayed after "check answers" button is clicked */}
          <Results
            isValid={isValid}
            isCorrect={isCorrect}
            buttonClicked={buttonClicked}
          />
        </div>
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
          onClick={handleCheckButton}
        >
          Check Answers
        </button>
      </div>
    </main>
  );
}
