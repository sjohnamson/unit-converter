import { convertTemperature, convertVolume } from "./converters";


describe("Temperature conversions", () => {
    it('should convert correctly from Celsius to the other units', () => {
        const celsiusValue = 100; 
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
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should convert correctly from Fahrenheit to the other units', () => {
        const fahrenheitValue = 100; 
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
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should convert correctly from Kelvin to the other units', () => {
        const kelvinValue = 100; 
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
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should convert correctly from Rankine to the other units', () => {
        const rankineValue = 100; 
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
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should throw an error if conversionInputs are not correct', () => {
        const conversionInputs = { inputValue: 32, startingUnit: 'Dogs', endingUnit: 'Fahrenheit' };
        const expected = '89.6';

          expect(() => {
            convertTemperature(conversionInputs);
          }).toThrow(
            new Error(`Conversion from ${conversionInputs.startingUnit} to ${conversionInputs.endingUnit} is not supported.`)
          );
      });
  });

  describe("Volume conversions", () => {
    it('should convert correctly from Liters to the other units', () => {
        const litersValue = 100; 
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
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should convert correctly from Tablespoons to the other units', () => {
        const tablespoonsValue = 100; 
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
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should convert correctly from Cubic Inches to the other units', () => {
        const cubicInchesValue = 100; 
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
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should convert correctly from Cups to the other units', () => {
        const cupsValue = 100; 
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
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should convert correctly from Cubic Feet to the other units', () => {
        const cubicFeetValue = 100; 
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
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should convert correctly from Gallons to the other units', () => {
        const gallonsValue = 100; 
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
            });
          expect(result).toBeCloseTo(expectedValue);
        });
      });

      it('should throw an error if conversionInputs are not correct', () => {
        const conversionInputs = { inputValue: 32, startingUnit: 'Cats', endingUnit: 'Gallons' };
        const expected = '89.6';

          expect(() => {
            convertTemperature(conversionInputs);
          }).toThrow(
            new Error(`Conversion from ${conversionInputs.startingUnit} to ${conversionInputs.endingUnit} is not supported.`)
          );
      });

  });