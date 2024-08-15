"use client"
import { atom, selector } from "recoil";

const questionInputs = atom({
  key: 'QuestionInputs',
  default: [{     
      inputValue: 0,
      startingUnit: "Starting Unit",
      endingUnit: "Ending Unit",
      correctAnswer: 0,
      studentAnswer: 0,
      isValid: true,
      isCorrect: false,
      buttonClicked: false,
  }]
});

// const resultContent = atom ({
//      key: 'ResultContent',
//      default: { 
//         text: "",
//       } 
// });

// const resultContentStyling = atom<React.CSSProperties> ({
//      key: 'ResultContent',
//      default: {
//         border: "",
//         color: "",
//       } 
// });

const resultContentResponse = selector({
  key: 'ResultContentResponse',
  get: ({get}) => {
    const inputs = get(questionInputs);
    const [{ buttonClicked, isCorrect, isValid }] = inputs;
    let styling = {border: '', color: ''}
    let content = {text: ''}
    if (buttonClicked) {
      if (isValid) {
        if(isCorrect) {
            content = {text: "Correct"}
            styling = {border: "border-green-600", color: "text-green-600"}
        } else {
              content = {text: "Incorrect"}
              styling = {border: "border-red-500", color: "text-red-500"}
        }
      } else {
            content = {text: "Invalid"}
            styling = {border: "border-gray-200", color: "text-gray-200"}
      }
    } else {
        content = {text: ""}
        styling = {border: "border-gray-300", color: "text-gray-300"}
        }

      return {
        content,
        styling
      }
      }

  });

export {questionInputs, resultContentResponse}