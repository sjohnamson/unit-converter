import Button from "../../button";
import { temperatures } from "@/app/lib/units";
import { convertTemperature, convertVolume } from "@/app/lib/converters";
import { QuestionInputs } from "@/app/lib/definitions";

export default function CheckAnswerButton({
  setQuestionsState,
}: {
  setQuestionsState: React.Dispatch<React.SetStateAction<QuestionInputs[]>>;
}) {
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
    <Button
      text="Check Answers"
      onClick={handleCheckButton}
      bgColor="bg-blue-500"
      hoverBG="hover:bg-blue-400"
      activeBG="active:bg-blue-600"
    />
  );
}
