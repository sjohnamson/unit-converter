import { QuestionInputs, VolumeConversionFactors, TemperatureConversionFactors } from "./definitions";

// const temperatureConversionFactors: TemperatureConversionFactors = {
//     'Kelvin': {
//         'Celsius':,
//         'Fahrenheit':,
//         'Rankine':,   
//     },
//     'Celsius': {
//         'Kelvin':,
//         'Fahrenheit':,
//         'Rankine':,   
//     },
//     'Rankine': {
//         'Celsius':,
//         'Fahrenheit':,
//         'Kelvin':,   
//     },
//     'Fahrenheit': {
//         'Celsius':,
//         'Kelvin':,
//         'Rankine':,   
//     }
// }

const volumeConversionFactors: VolumeConversionFactors = {
    'Liters': {
        'Tablespoons': 67.628,
        'Cubic-Inches': 61.024,
        'Cups': 4.22675,
        'Cubic-Feet': 0.0353147,
        'Gallons': 0.264172,
      },
      'Tablespoons': {
        'Liters': 0.0147868,
        'Cubic-Inches': 0.902344,
        'Cups': 0.0625,
        'Cubic-Feet': 0.000522189,
        'Gallons': 0.00390625,
      },
      'Cubic-Inches': {
        'Liters': 0.0163871,
        'Tablespoons': 1.10823,
        'Cups': 0.0692641,
        'Cubic-Feet': 0.000578704,
        'Gallons': 0.004329,
      },
      'Cups': {
        'Liters': 0.236588,
        'Tablespoons': 16,
        'Cubic-Inches': 14.4375,
        'Cubic-Feet': 0.00835503,
        'Gallons': 0.0625,
      },
      'Cubic-Feet': {
        'Liters': 28.3168,
        'Tablespoons': 1915.01,
        'Cubic-Inches': 1728,
        'Cups': 119.688,
        'Gallons': 7.48052,
      },
      'Gallons': {
        'Liters': 3.78541,
        'Tablespoons': 256,
        'Cubic-Inches': 231,
        'Cups': 15.7725,
        'Cubic-Feet': 0.133681,
      },
};

export function convertTemperature({ inputValue, startingUnit, endingUnit}: QuestionInputs) {
    if (volumeConversionFactors[startingUnit] && volumeConversionFactors[startingUnit][endingUnit]) {
      return inputValue * volumeConversionFactors[startingUnit][endingUnit];
    } else {
      throw new Error(`Conversion from ${startingUnit} to ${endingUnit} is not supported.`);
    }
  };

  export function convertVolume({ inputValue, startingUnit, endingUnit}: QuestionInputs) {
    if (volumeConversionFactors[startingUnit] && volumeConversionFactors[startingUnit][endingUnit]) {
      return inputValue * volumeConversionFactors[startingUnit][endingUnit];
    } else {
      throw new Error(`Conversion from ${startingUnit} to ${endingUnit} is not supported.`);
    }
  }