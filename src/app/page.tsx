"use client";

import React, { useState } from "react";
import Inputs from "./ui/worksheet/inputs";
import Dropdowns from "./ui/worksheet/dropdowns";
import Results from "./ui/worksheet/results";
import { temperatures, volumes } from "./lib/units";
import CheckAnswerButton from "./ui/worksheet/buttons/check-answers";
import AddRowButton from "./ui/worksheet/buttons/add-row";
import RemoveRowButton from "./ui/worksheet/buttons/remove-row";

export default function Home() {
  const [questionsState, setQuestionsState] = useState([
    {
      inputValue: 0,
      startingUnit: "Starting Unit",
      endingUnit: "Ending Unit",
      studentAnswer: 0,
      isValid: true,
      isCorrect: false,
      buttonClicked: false,
    },
  ]);

  const handleInputChange = (
    rowIndex: number,
    name: string,
    value: string | number
  ) => {
    setQuestionsState((prevState) => {
      const updatedQuestions = [...prevState];
      updatedQuestions[rowIndex][name] = value;
      return updatedQuestions;
    });
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-2 md:p-10">
      <header className="text-green-700 text-lg p-2 md:p-5">
        UNIT CONVERTER
      </header>
      {questionsState.map(
        (
          {
            isValid,
            isCorrect,
            buttonClicked,
            inputValue,
            startingUnit,
            endingUnit,
            studentAnswer,
          },
          rowIndex
        ) => (
          <div
            key={rowIndex}
            className="mt-2 flex flex-col items-center gap-1 md:mt-2 md:flex-row md:gap-2"
          >
            <div>{rowIndex + 1}</div>
            {/* returns input fields for the basic question structure */}
            <Inputs
              label="Input Value"
              name="inputValue"
              placeholder="0"
              value={inputValue}
              onChange={(name, value) =>
                handleInputChange(rowIndex, name, value)
              }
            />
            <Dropdowns
              label="Starting Unit"
              name="startingUnit"
              value={startingUnit}
              onChange={(name, value) =>
                handleInputChange(rowIndex, name, value)
              }
              options={["Starting Unit", ...temperatures, ...volumes]}
            />
            <Dropdowns
              label="Ending Unit"
              name="endingUnit"
              value={endingUnit}
              onChange={(name, value) =>
                handleInputChange(rowIndex, name, value)
              }
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
              onChange={(name, value) =>
                handleInputChange(rowIndex, name, value)
              }
            />
            {/* result is displayed after "check answers" button is clicked */}
            <Results
              isValid={isValid}
              isCorrect={isCorrect}
              buttonClicked={buttonClicked}
            />
          </div>
        )
      )}
      <div className="mt-5 flex gap-2 md:mt-8 md:gap-4">
        <AddRowButton setQuestionsState={setQuestionsState} />
        <RemoveRowButton setQuestionsState={setQuestionsState} />
        <CheckAnswerButton setQuestionsState={setQuestionsState} />
      </div>
    </main>
  );
}
