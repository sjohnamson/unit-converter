import React from "react";
import { CorrectAnswerProps } from "../../lib/definitions";

const CorrectAnswer: React.FC<CorrectAnswerProps> = ({
  correctAnswer,
  isValid,
  buttonClicked,
}) => {
  return (
    <div
      className={`w-[120px] h-[40px] rounded-md border border-gray-300 text-gray-700 py-[10px] pl-5 pr-5 text-sm placeholder:text-gray-500`}
    >
      {buttonClicked && isValid ? correctAnswer : null}
    </div>
  );
};

export default CorrectAnswer;
