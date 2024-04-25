import Button from "../../button";
import { temperatures } from "@/app/lib/units";
import { convertTemperature, convertVolume } from "@/app/lib/converters";

export default function CheckAnswerButton({setQuestionsState}) {
    

    const handleCheckButton = () => {
        setQuestionsState((prevState) =>
          prevState.map((questionState) => {
            const { inputValue, startingUnit, endingUnit, studentAnswer } =
              questionState;
            let isValid = true;
            let isCorrect = false;
            let buttonClicked = true;
    
            if (
              isNaN(inputValue) ||
              isNaN(studentAnswer) ||
              startingUnit === "Starting Unit" ||
              endingUnit === "Ending Unit"
            ) {
              isValid = false;
              return { ...questionState, isValid, isCorrect, buttonClicked };
            }
    
            let answer;
            if (temperatures.includes(startingUnit)) {
              answer = convertTemperature(questionState).toFixed(1);
            } else {
              answer = convertVolume(questionState).toFixed(1);
            }
    
            isCorrect = answer === studentAnswer.toFixed(1);
            return { ...questionState, isValid, isCorrect, buttonClicked };
          })
        );
      };

    return (
        <Button text="Check Answers" onClick={handleCheckButton} />
    );
  }