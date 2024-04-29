import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdowns from "./dropdowns";

describe("Dropdowns component", () => {
  const label = "Select Unit";
  const options = [
    "Liters",
    "Tablespoons",
    "Cubic-Inches",
    "Cups",
    "Cubic-Feet",
    "Gallons",
    "Celsius", 
    "Kelvin", 
    "Fahrenheit", 
    "Rankine"
  ];
  const value = "Gallons";
  const name = "unit";
  const onChange = jest.fn();

  it("calls onChange handler when an option is selected", () => {
    const { getByRole } = render(
      <Dropdowns
        label={label}
        options={options}
        value={value}
        name={name}
        onChange={onChange}
      />
    );

    const dropdown = getByRole("combobox");
    fireEvent.change(dropdown, { target: { value: "Fahrenheit" } });

    expect(onChange).toHaveBeenCalledWith(name, "Fahrenheit");
  });
});
