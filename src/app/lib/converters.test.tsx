import { convertTemperature, convertVolume } from "./converters";


describe("Temperature conversions", () => {
    it('should convert correctly from Celsius to the other units', () => {
        //Arrange
        const celsiusValue = 100; // This will be the input value to test
        // Define the expected conversions to other temperature units
        const expectedConversions = {
          Fahrenheit: 212,
          Kelvin: 373.15,
          Rankine: 671.67,
        };
    
        // Iterate over each expected conversion and check if it is correct
        Object.entries(expectedConversions).forEach(([endingUnit, expectedValue]) => {
            const result: number = convertTemperature({
              inputValue: celsiusValue,
              startingUnit: 'Celsius',
              endingUnit,
            //   Not using these inputs, but they fulfill the typescript req.
              correctAnswer: 0, 
              studentAnswer: 0,
              isValid: true,
              isCorrect: false,
              buttonClicked: false,
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should convert correctly from Fahrenheit to the other units', () => {
        //Arrange
        const fahrenheitValue = 100; // This will be the input value to test
        // Define the expected conversions to other temperature units
        const expectedConversions = {
          Celsius: 37.78,
          Kelvin: 310.93,
          Rankine: 559.67,
        };
    
        // Iterate over each expected conversion and check if it is correct
        Object.entries(expectedConversions).forEach(([endingUnit, expectedValue]) => {
            const result: number = convertTemperature({
              inputValue: fahrenheitValue,
              startingUnit: 'Fahrenheit',
              endingUnit,
            //   Not using these inputs, but they fulfill the typescript req.
              correctAnswer: 0, 
              studentAnswer: 0,
              isValid: true,
              isCorrect: false,
              buttonClicked: false,
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should convert correctly from Kelvin to the other units', () => {
        //Arrange
        const kelvinValue = 100; // This will be the input value to test
        // Define the expected conversions to other temperature units
        const expectedConversions = {
          Fahrenheit: -279.67,
          Celsius: -173.15,
          Rankine: 180,
        };
    
        // Iterate over each expected conversion and check if it is correct
        Object.entries(expectedConversions).forEach(([endingUnit, expectedValue]) => {
            const result: number = convertTemperature({
              inputValue: kelvinValue,
              startingUnit: 'Kelvin',
              endingUnit,
            //   Not using these inputs, but they fulfill the typescript req.
              correctAnswer: 0, 
              studentAnswer: 0,
              isValid: true,
              isCorrect: false,
              buttonClicked: false,
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should convert correctly from Rankine to the other units', () => {
        //Arrange
        const rankineValue = 100; // This will be the input value to test
        // Define the expected conversions to other temperature units
        const expectedConversions = {
          Fahrenheit: -359.67,
          Kelvin: 55.56,
          Celsius: -217.59,
        };
    
        // Iterate over each expected conversion and check if it is correct
        Object.entries(expectedConversions).forEach(([endingUnit, expectedValue]) => {
            const result: number = convertTemperature({
              inputValue: rankineValue,
              startingUnit: 'Rankine',
              endingUnit,
            //   Not using these inputs, but they fulfill the typescript req.
              correctAnswer: 0, 
              studentAnswer: 0,
              isValid: true,
              isCorrect: false,
              buttonClicked: false,
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });
  });