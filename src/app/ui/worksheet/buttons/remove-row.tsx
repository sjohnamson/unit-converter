import Button from "../../button";

export default function RemoveRowButton({setQuestionsState}) {

    const handleRemoveRowButton = () => {
        setQuestionsState((prevState) => {
          if (prevState.length > 1) {
            return prevState.slice(0, -1);
          }
          return prevState;
        });
      };

    return (
        <Button text="Remove Row" onClick={handleRemoveRowButton} />
    );
  }