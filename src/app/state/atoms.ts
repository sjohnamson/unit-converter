import { atom } from "recoil";

const questionInputs = atom({
  key: 'questionInputs',
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