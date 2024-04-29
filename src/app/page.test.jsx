import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "./page"

describe("Home", () => {
  it("renders a heading", () => {
    // Arrange
    render(<Home />);
    //  Act
    const heading = screen.getByRole("heading", { level: 1 });
    //  Assert
    expect(heading).toBeInTheDocument();
  });
  it("renders a Link element", () => {
    // Arrange
    const { getByText } = render(<Home />);
    //  Act
    const linkElement = getByText("Start Converting!");
    //  Assert
    expect(linkElement).toBeInTheDocument();
  });

});
