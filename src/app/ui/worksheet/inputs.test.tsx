import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Inputs from "./inputs";

describe("Inputs", () => {
  it("renders with the correct props", () => {
    // Arrange
    const label = "Input Label";
    const placeholder = "Placeholder Text";
    const value = 5; 
    const name = "inputField";
    const onChange = jest.fn();

    // Act
    render(
      <Inputs
        label={label}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    );
    // Assert
    // Check if input has label
    const inputElement = screen.getByLabelText(label);
    expect(inputElement).toBeInTheDocument();
    // Get the id attribute of the input element
    const inputId = inputElement.getAttribute('id');
    expect(inputId).toBeDefined(); 
    expect(inputId).toMatch(`${name}-input`); 
  });
});
