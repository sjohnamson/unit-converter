import Button from "../../button";
import { QuestionInputs } from "@/app/lib/definitions";

export default function AddRowButton({
  setQuestionsState,
}: {
  setQuestionsState: React.Dispatch<React.SetStateAction<QuestionInputs[]>>;
}) {
  const handleAddRowButton = () => {
    setQuestionsState((prevState) => [
      ...prevState,
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
  };

  return (
    <Button
      text="Add Row"
      onClick={handleAddRowButton}
      bgColor="bg-sky-200"
      hoverBG="hover:bg-sky-300"
      activeBG="active:bg-sky-100"
      textColor="text-black"
    />
  );
}
