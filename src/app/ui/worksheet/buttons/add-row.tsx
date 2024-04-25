import Button from "../../button";

export default function AddRowButton({setQuestionsState}) {
    

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
        <Button text="Add Row" onClick={handleAddRowButton} />
    );
  }