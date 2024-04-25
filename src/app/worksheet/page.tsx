"use client";

import React, { useState } from "react";
import Inputs from "../ui/worksheet/inputs";
import Dropdowns from "../ui/worksheet/dropdowns";
import Results from "../ui/worksheet/results";
import { temperatures, volumes } from "../lib/units";
import CheckAnswerButton from "../ui/worksheet/buttons/check-answers";
import AddRowButton from "../ui/worksheet/buttons/add-row";
import RemoveRowButton from "../ui/worksheet/buttons/remove-row";

export default function Page() {
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
    <main className="flex flex-col min-h-screen items-center p-2 md:p-10 ">
      <header>UNIT CONVERTER</header>
      <div className="mt-3 flex gap-2 md:mt-5 md:gap-3">
        <AddRowButton setQuestionsState={setQuestionsState} />
        <RemoveRowButton setQuestionsState={setQuestionsState} />
      </div>
      <div className="border border-blue-400 m-2 p-3 md:m-4 md:p-5">
      <div className="hidden md:flex md:items-center md:flex-row md:gap-2">
        <div className="peer block w-[10px] h-[20px] text-sm">#</div>
        <div className="peer block w-[125px] h-[20px] text-sm">Input Value</div>
        <div className="peer block w-[125px] h-[20px] text-sm">
          Starting Unit
        </div>
        <div className="peer block w-[125px] h-[20px] text-sm">Ending Unit</div>
        <div className="peer block w-[125px] h-[20px] text-sm">
          Student Answer
        </div>
        <div className="peer block w-[125px] h-[20px] text-sm">Result</div>
      </div>
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
            <div className="flex flex-row gap-1 md:flex-col md:gap-2">
              <div className="text-sm w-[60px] md:hidden">Input Value</div>
              <Inputs
                label="Input Value"
                name="inputValue"
                placeholder="0"
                value={inputValue}
                onChange={(name, value) =>
                  handleInputChange(rowIndex, name, value)
                }
              />
            </div>
            <div className="flex flex-row gap-1 md:flex-col md:gap-2">
              <div className="text-sm w-[60px] md:hidden">Starting Unit</div>
              <Dropdowns
                label="Starting Unit"
                name="startingUnit"
                value={startingUnit}
                onChange={(name, value) =>
                  handleInputChange(rowIndex, name, value)
                }
                options={["Starting Unit", ...temperatures, ...volumes]}
              />
            </div>
            <div className="flex flex-row gap-1 md:flex-col md:gap-2">
              <div className="text-sm w-[60px] md:hidden">Ending Unit</div>
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
            </div>
            <div className="flex flex-row gap-1 md:flex-col md:gap-2">
              <div className="text-sm w-[60px] md:hidden">Student Answer</div>
              <Inputs
                label="Student Answer"
                name="studentAnswer"
                placeholder="0"
                value={studentAnswer}
                onChange={(name, value) =>
                  handleInputChange(rowIndex, name, value)
                }
              />
            </div>
            {/* result is displayed after "check answers" button is clicked */}
            <div className="flex flex-row gap-1 md:flex-col md:gap-2">
              <div className="text-sm w-[60px] md:hidden">Result</div>
              <Results
                isValid={isValid}
                isCorrect={isCorrect}
                buttonClicked={buttonClicked}
              />
            </div>
          </div>
        )
      )}
      </div>
      <div className="mt-5 flex gap-2 md:mt-8 md:gap-4">
        <CheckAnswerButton setQuestionsState={setQuestionsState} />
      </div>
    </main>
  );
}
