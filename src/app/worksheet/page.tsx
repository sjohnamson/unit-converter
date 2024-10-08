"use client";

import React, { useState } from "react";
import Inputs from "../ui/worksheet/inputs";
import Dropdowns from "../ui/worksheet/dropdowns";
import CorrectAnswer from "../ui/worksheet/correct-answer";
import Results from "../ui/worksheet/results";
import { temperatures, volumes } from "../lib/units";
import CheckAnswerButton from "../ui/worksheet/buttons/check-answers";
import AddRowButton from "../ui/worksheet/buttons/add-row";
import RemoveRowButton from "../ui/worksheet/buttons/remove-row";
import { QuestionInputs } from "../lib/definitions";

export default function Page() {
  // sets state for each row/questions
  const [questionsState, setQuestionsState] = useState<QuestionInputs[]>([
    {
      inputValue: 0,
      startingUnit: "Starting Unit",
      endingUnit: "Ending Unit",
      correctAnswer: 0,
      studentAnswer: 0,
      isValid: true,
      isCorrect: false,
      buttonClicked: false,
    },
  ]);

  //   Updates question state as inputs are entered
  const handleInputChange = (
    rowIndex: number,
    name: keyof QuestionInputs,
    value: string | number
  ) => {
    setQuestionsState((prevState) => {
      const updatedQuestions = [...prevState];
      updatedQuestions[rowIndex][name] = value;
      return updatedQuestions;
    });
  };

  return (
    <main className="flex flex-col min-h-screen items-center p-5 md:p-10 ">
      <header>
        <h1>UNIT CONVERTER</h1>
      </header>
      <div className="mt-3 flex gap-2 md:mt-5 md:gap-3">
        <AddRowButton setQuestionsState={setQuestionsState} />
        <RemoveRowButton setQuestionsState={setQuestionsState} />
      </div>
      <div className="border border-blue-400 m-2 p-3 md:m-4 md:p-5">
        {/* Adds headers for the question rows, hidden when screen isn't md or larger */}
        <div className="hidden md:flex md:items-center md:flex-row md:gap-2">
          <div className="block w-[25px] h-[20px] text-sm">#</div>
          <div className="block w-[120px] h-[20px] text-sm">Input Value</div>
          <div className="block w-[120px] h-[20px] text-sm">Starting Unit</div>
          <div className="block w-[120px] h-[20px] text-sm">Ending Unit</div>
          <div className="block w-[120px] h-[20px] text-sm">Student Answer</div>
          <div className="block w-[120px] h-[20px] text-sm">Correct Answer</div>
          <div className="block w-[120px] h-[20px] text-sm">Result</div>
        </div>
        {/* Maps over questionsState to create a row for each object */}
        {questionsState.map(
          (
            {
              isValid,
              isCorrect,
              buttonClicked,
              inputValue,
              startingUnit,
              endingUnit,
              correctAnswer,
              studentAnswer,
            },
            rowIndex
          ) => (
            <div
              key={rowIndex}
              data-testid="question-row"
              className="mt-2 flex flex-col items-center gap-1 pl-7 pr-7 md:pl-0 md:pr-0 md:mt-2 md:flex-row md:gap-2"
            >
              <div className="w-[20px]">{rowIndex + 1}</div>
              {/* returns input fields for the basic question structure */}
              <div className="flex flex-row gap-2 md:flex-col">
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
              <div className="flex flex-row gap-2 md:flex-col ">
                <div className="text-sm w-[60px] md:hidden">Starting Unit</div>
                <Dropdowns
                  label="Starting Unit"
                  name="startingUnit"
                  value={startingUnit}
                  onChange={(name, value) =>
                    handleInputChange(rowIndex, name, value)
                  }
                  options={
                    endingUnit === "Ending Unit"
                    ? ["Starting Unit", ...temperatures, ...volumes]
                      : temperatures.includes(endingUnit)
                        ? ["Starting Unit", ...temperatures.filter(unit => unit !== endingUnit)]
                        : ["Starting Unit", ...volumes.filter(unit => unit !== endingUnit)]
                  }
                />
              </div>
              <div className="flex flex-row gap-2 md:flex-col">
                <div className="text-sm w-[60px] md:hidden">Ending Unit</div>
                <Dropdowns
                  label="Ending Unit"
                  name="endingUnit"
                  value={endingUnit}
                  onChange={(name, value) =>
                    handleInputChange(rowIndex, name, value)
                  }
                  options={
                    startingUnit === "Starting Unit"
                    ? ["Ending Unit", ...temperatures, ...volumes]
                      : temperatures.includes(startingUnit)
                        ? ["Ending Unit", ...temperatures.filter(unit => unit !== startingUnit)]
                        : ["Ending Unit", ...volumes.filter(unit => unit !== startingUnit)]
                  }
                />
              </div>
              <div className="flex flex-row gap-2 md:flex-col">
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
              <div className="flex flex-row gap-2 md:flex-col">
                <div className="text-sm w-[60px] md:hidden">Correct Answer</div>
                <CorrectAnswer
                  correctAnswer={correctAnswer}
                  isValid={isValid}
                  buttonClicked={buttonClicked}
                />
              </div>
              <div className="flex flex-row gap-2 md:flex-col">
                <div className="text-sm w-[60px] md:hidden">Result</div>
                {/* result is displayed after "check answers" button is clicked */}
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
      <div>
        {/* Calculates result for all questions */}
        <CheckAnswerButton setQuestionsState={setQuestionsState} />
      </div>
    </main>
  );
}
