import { CorrectAnswerProps } from "@/app/lib/definitions";

const CorrectAnswer: React.FC<CorrectAnswerProps> = ({
    correctAnswer,
    isValid,
    buttonClicked,
  }) => {
  return (
    <div
      className={`w-[125px] h-[40px] rounded-md border "border-gray-300" "text-gray-300" py-[10px] pl-5 pr-5 text-sm outline-2 placeholder:text-gray-500`}
    >
      {buttonClicked && isValid ? correctAnswer : null}
    </div>
  );
};

export default CorrectAnswer;
