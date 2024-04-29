import { ResultsProps } from "@/app/lib/definitions";

const Results: React.FC<ResultsProps> = ({
  isValid,
  isCorrect,
  buttonClicked,
}) => {
  const getResultDiv = (text: string, border: string, color: string) => (
    <div
      className={`w-[120px] h-[40px] text-center rounded-md border ${border} ${color} py-[10px] pl-5 pr-5 text-sm placeholder:text-gray-500`}
    >
      {text}
    </div>
  );

  const resultContent =
    (buttonClicked &&
      (isValid
        ? isCorrect
          ? getResultDiv("Correct", "border-green-600", "text-green-600")
          : getResultDiv("Incorrect", "border-red-500", "text-red-500")
        : getResultDiv("Invalid", "border-gray-200", "text-gray-200"))) ||
    getResultDiv("", "border-gray-300", "text-gray-300");

  return <div>{resultContent}</div>;
};

export default Results;
