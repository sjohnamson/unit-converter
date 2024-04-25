import Button from "../../button";
import { QuestionInputs } from "@/app/lib/definitions";

export default function RemoveRowButton({
  setQuestionsState,
}: {
  setQuestionsState: React.Dispatch<React.SetStateAction<QuestionInputs[]>>;
}) {
  const handleRemoveRowButton = () => {
    setQuestionsState((prevState) => {
      if (prevState.length > 1) {
        return prevState.slice(0, -1);
      }
      return prevState;
    });
  };

  return (
    <Button
      text="Remove Row"
      onClick={handleRemoveRowButton}
      bgColor="bg-orange-600"
      hoverBG="hover:bg-orange-500"
      activeBG="active:bg-orange-700"
    />
  );
}
