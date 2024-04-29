import React from "react";
import  '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import Results from "./results";

describe("CorrectAnswer component", () => {

  it("renders Correct when answer is correct", () => {
    //Arrange Act
    const { getByText } = render(
      <Results isCorrect={true} isValid={true} buttonClicked={true} />
    );

    // Assert
    expect(getByText("Correct")).toBeInTheDocument();
  });

  it("renders Incorrect when answer is incorrect", () => {
    //Arrange Act
    const { getByText } = render(
      <Results isCorrect={false} isValid={true} buttonClicked={true} />
    );

    // Assert
    expect(getByText("Incorrect")).toBeInTheDocument();
  });

  it("renders Invalid when question is invalid", () => {
    //Arrange Act
    const { getByText } = render(
      <Results isCorrect={true} isValid={false} buttonClicked={true} />
    );

    // Assert
    expect(getByText("Invalid")).toBeInTheDocument();
  });
});