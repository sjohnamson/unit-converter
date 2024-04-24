import React, { useState } from "react";
import Inputs from "./worksheet/inputs";
import Dropdowns from "./worksheet/dropdowns";
import Results from "./worksheet/results";
import { convertTemperature, convertVolume } from "../lib/converters";
import { temperatures, volumes } from "../lib/units";

const Row = ({ initialState, onInputChange, result }) => {
  const [questionState, setQuestionState] = useState(initialState);

  const handleInputChange = (name, value) => {
    setQuestionState((prevState) => ({ ...prevState, [name]: value }));
    onInputChange(initialState, { ...questionState, [name]: value });
  };

  return (
    <div className="mt-5 flex flex-col items-center gap-2 md:mt-8 md:flex-row md:gap-4">
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
        options={["Starting Unit", ...temperatures, ...volumes]}
      />
      <Dropdowns
        label="Ending Unit"
        name="endingUnit"
        value={questionState.endingUnit}
        onChange={handleInputChange}
        options={
          questionState.startingUnit
            ? temperatures.includes(questionState.startingUnit)
              ? ["Ending Unit", ...temperatures]
              : ["Ending Unit", ...volumes]
            : ["Ending Unit"]
        }
      />
      <Inputs
        label="Student Answer"
        name="studentAnswer"
        placeholder="0"
        value={questionState.studentAnswer}
        onChange={handleInputChange}
      />
      <Results
        // isValid={result.isValid}
        // isCorrect={result.isCorrect}
        // buttonClicked={result.buttonClicked}
      />
    </div>
  );
};

export default Row;
