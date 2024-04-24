import { ResultsProps } from "@/app/lib/definitions";

const Results: React.FC<ResultsProps> = ({isValid, isCorrect, buttonClicked}) => {
    const getResultDiv = (text: string, border: string, color: string) => (
        <div className={`peer block w-[125px] h-[40px] rounded-md border ${border} ${color} py-[10px] pl-5 pr-5 text-sm outline-2 placeholder:text-gray-500`}>
          {text}
        </div>
      );
      
      const resultContent =
      buttonClicked &&
      (isValid
        ? isCorrect
          ? getResultDiv("Correct", "border-green-600", "text-green-600")
          : getResultDiv("Incorrect", "border-red-500", "text-red-500")
        : getResultDiv("Invalid", "border-red-500", "text-red-500")
      ) ||
      getResultDiv("", "border-gray-300", "text-gray-300");

      return (
        <div>
            {resultContent}
        </div>
    );
};

export default Results