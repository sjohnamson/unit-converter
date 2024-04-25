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
        <Button text="Add Row" onClick={handleAddRowButton} bgColor="bg-green-600" hoverBG="hover:bg-green-500" activeBG="active:bg-green-700" />
    );
  }