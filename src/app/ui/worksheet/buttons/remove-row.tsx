import React from "react";
import Button from "../../button";
import { QuestionInputs } from "../../../lib/definitions";

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
      bgColor="bg-amber-200"
      hoverBG="hover:bg-amber-300"
      activeBG="active:bg-amber-100"
      textColor="text-black"
    />
  );
}
