import { convertTemperature, convertVolume } from "@/app/lib/converters";

describe('converter tests', () => {
    test('temperature converting question should return correct answer', () => {
        const conversionInputs = { inputValue: 32, startingUnit: 'Celsius', endingUnit: 'Fahrenheit' };
        const expected = '89.6';

        const result = convertTemperature(conversionInputs).toFixed(1);

        expect(result).toBe(expected);
    })

        test('volume converting question should return correct answer', () => {
        const conversionInputs = { inputValue: 100, startingUnit: 'Liters', endingUnit: 'Gallons' };
        const expected = '26.4';

        const result = convertVolume(conversionInputs).toFixed(1);

        expect(result).toBe(expected);
    })
})