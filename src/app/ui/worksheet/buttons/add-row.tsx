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
      bgColor="bg-green-600"
      hoverBG="hover:bg-green-500"
      activeBG="active:bg-green-700"
    />
  );
}
