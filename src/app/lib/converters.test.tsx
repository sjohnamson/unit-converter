import { convertTemperature, convertVolume } from "./converters";


describe("Temperature conversions", () => {
    it('should convert correctly from Celsius to the other units', () => {
        //Arrange
        const celsiusValue = 100; // This will be the input value to test
        // Expected conversions to other temperature units
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
        // Expected conversions to other temperature units
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
        // Expected conversions to other temperature units
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
        // Expected conversions to other temperature units
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

  describe("Volume conversions", () => {
    it('should convert correctly from Liters to the other units', () => {
        //Arrange
        const litersValue = 100; // This will be the input value to test
        // Expected conversions to other volume units
        const expectedConversions = {
            Tablespoons: 6762.8,
            'Cubic-Inches': 6102.4,
            Cups: 422.68,
            'Cubic-Feet': 3.53,
            Gallons: 26.42,
        };
    
        // Iterate over each expected conversion and check if it is correct
        Object.entries(expectedConversions).forEach(([endingUnit, expectedValue]) => {
            const result: number = convertVolume({
              inputValue: litersValue,
              startingUnit: 'Liters',
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

      it('should convert correctly from Tablespoons to the other units', () => {
        //Arrange
        const tablespoonsValue = 100; // This will be the input value to test
        // Expected conversions to other volume units
        const expectedConversions = {
            Liters: 1.48,
            'Cubic-Inches': 90.23,
            Cups: 6.25,
            'Cubic-Feet': 0.052,
            Gallons: 0.39,
        };
    
        // Iterate over each expected conversion and check if it is correct
        Object.entries(expectedConversions).forEach(([endingUnit, expectedValue]) => {
            const result: number = convertVolume({
              inputValue: tablespoonsValue,
              startingUnit: 'Tablespoons',
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

      it('should convert correctly from Cubic Inches to the other units', () => {
        //Arrange
        const cubicInchesValue = 100; // This will be the input value to test
        // Expected conversions to other volume units
        const expectedConversions = {
            Tablespoons: 110.82,
            Liters: 1.64,
            Cups: 6.93,
            'Cubic-Feet': 0.06,
            Gallons: 0.43,
        };
    
        // Iterate over each expected conversion and check if it is correct
        Object.entries(expectedConversions).forEach(([endingUnit, expectedValue]) => {
            const result: number = convertVolume({
              inputValue: cubicInchesValue,
              startingUnit: 'Cubic-Inches',
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

      it('should convert correctly from Cups to the other units', () => {
        //Arrange
        const cupsValue = 100; // This will be the input value to test
        // Expected conversions to other volume units
        const expectedConversions = {
            Tablespoons: 1600,
            'Cubic-Inches': 1443.75,
            Liters: 23.66,
            'Cubic-Feet': 0.84,
            Gallons: 6.25,
        };
    
        // Iterate over each expected conversion and check if it is correct
        Object.entries(expectedConversions).forEach(([endingUnit, expectedValue]) => {
            const result: number = convertVolume({
              inputValue: cupsValue,
              startingUnit: 'Cups',
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

      it('should convert correctly from Cubic Feet to the other units', () => {
        //Arrange
        const cubicFeetValue = 100; // This will be the input value to test
        // Expected conversions to other volume units
        const expectedConversions = {
            Tablespoons: 191501,
            'Cubic-Inches': 172800,
            Cups: 11968.8,
            Liters: 2831.68,
            Gallons: 748.05,
        };
    
        // Iterate over each expected conversion and check if it is correct
        Object.entries(expectedConversions).forEach(([endingUnit, expectedValue]) => {
            const result: number = convertVolume({
              inputValue: cubicFeetValue,
              startingUnit: 'Cubic-Feet',
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

      it('should convert correctly from Gallons to the other units', () => {
        //Arrange
        const gallonsValue = 100; // This will be the input value to test
        // Expected conversions to other volume units
        const expectedConversions = {
            Tablespoons: 25600,
            'Cubic-Inches': 23100,
            Cups: 1600,
            'Cubic-Feet': 13.37,
            Liters: 378.54,
        };
    
        // Iterate over each expected conversion and check if it is correct
        Object.entries(expectedConversions).forEach(([endingUnit, expectedValue]) => {
            const result: number = convertVolume({
              inputValue: gallonsValue,
              startingUnit: 'Gallons',
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