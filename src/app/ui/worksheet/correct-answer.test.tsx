import React from "react";
import  '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import CorrectAnswer from "./correct-answer";

describe("CorrectAnswer component", () => {
  // Arrange
  const correctAnswer = 95.6;

  it("renders correct answer when isValild and buttonClicked", () => {
    //Act
    const { getByText } = render(
      <CorrectAnswer correctAnswer={95.6} isValid={true} buttonClicked={true} />
    );

    // Assert
    const correctAnswerElement = getByText(correctAnswer.toString());
    expect(correctAnswerElement).toBeInTheDocument();
  });

  it("does not render anything when button is not clicked or input is invalid", () => {
    const { queryByText } = render(
      <CorrectAnswer
        correctAnswer={correctAnswer}
        isValid={false}
        buttonClicked={false}
      />
    );

    const answerElement = queryByText(correctAnswer.toString());
    expect(answerElement).toBeNull();
  });
});
