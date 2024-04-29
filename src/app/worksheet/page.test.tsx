import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Page from "./page"

describe("Page", () => {
    it('renders all input fields', () => {
        // Assign
        render(<Page />);
    
        // Assert
        expect(screen.getByLabelText('Input Value')).toBeInTheDocument();
        expect(screen.getByLabelText('Starting Unit')).toBeInTheDocument();
        expect(screen.getByLabelText('Ending Unit')).toBeInTheDocument();
        expect(screen.getByLabelText('Student Answer')).toBeInTheDocument();
        expect(screen.getByLabelText('Correct Answer')).toBeInTheDocument(); 
      });
});