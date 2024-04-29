import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Page from "./page";

describe("Page component", () => {

  it("adds a row when Add Row button is clicked", () => {
    //Arrange
    const { getByText, getAllByTestId } = render(<Page />);
    const initialRowCount = getAllByTestId("question-row").length;
    //Act
    fireEvent.click(getByText("Add Row"));
    const newRowCount = getAllByTestId("question-row").length;
    //Assert
    expect(newRowCount).toBe(initialRowCount + 1);
  });

  it("removes a row when Remove Row button is clicked", () => {
    //Arrange
    const { getByText, getAllByTestId } = render(<Page />);
    fireEvent.click(getByText("Add Row"));
    const initialRowCount = getAllByTestId("question-row").length;
    //Act
    fireEvent.click(getByText("Remove Row"));
    const newRowCount = getAllByTestId("question-row").length;
    //Assert
    expect(newRowCount).toBe(initialRowCount - 1);
  });

});
