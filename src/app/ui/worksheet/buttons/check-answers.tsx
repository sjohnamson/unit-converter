import React from "react"; 
import Button from "../../button";
import { temperatures } from "../../../lib/units";
import { convertTemperature, convertVolume } from "../../../lib/converters";
import { QuestionInputs } from "../../../lib/definitions";

export default function CheckAnswerButton({
  setQuestionsState,
}: {
  setQuestionsState: React.Dispatch<React.SetStateAction<QuestionInputs[]>>;
}) {
  const handleCheckButton = () => {
    setQuestionsState((prevState) =>
      prevState.map((questionState) => {
        //Destructure the question values
        let {
          inputValue,
          startingUnit,
          endingUnit,
          correctAnswer,
          studentAnswer,
        } = questionState;
        let isValid = true;
        let isCorrect = false;
        let buttonClicked = true;
        // Check that all fields have been entered
        if (
          isNaN(inputValue) ||
          isNaN(studentAnswer) ||
          startingUnit === "Starting Unit" ||
          endingUnit === "Ending Unit"
        ) {
          isValid = false;
          return { ...questionState, isValid, isCorrect, buttonClicked };
        }
        // Find the correct answer to the tenths place
        let answer;
        if (temperatures.includes(startingUnit)) {
          answer = convertTemperature(questionState).toFixed(1);
        } else {
          answer = convertVolume(questionState).toFixed(1);
        }
        // Convert answer to a number
        correctAnswer = parseFloat(answer);
        //Check if the answer is correct and return the updated question state
        isCorrect = answer === studentAnswer.toFixed(1);
        return {
          ...questionState,
          correctAnswer,
          isValid,
          isCorrect,
          buttonClicked,
        };
      })
    );
  };

  return (
    <Button
      text="Check Answers"
      onClick={handleCheckButton}
      bgColor="bg-blue-800"
      hoverBG="hover:bg-blue-700"
      activeBG="active:bg-blue-900"
      textColor="text-white"
    />
  );
}
