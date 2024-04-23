const temperatureConversionFactors = {
    'kelvin': {
        'celsius':,
        'fahrenheit':,
        'rankine':,   
    },
    'celsius': {
        'kelvin':,
        'fahrenheit':,
        'rankine':,   
    },
    'rankine': {
        'celsius':,
        'fahrenheit':,
        'kelvin':,   
    },
    'fahrenheit': {
        'celsius':,
        'kelvin':,
        'rankine':,   
    }
}

const volumeConversionFactors = {
    'liters': {
        'tablespoons': 67.628,
        'cubic-inches': 61.024,
        'cups': 4.22675,
        'cubic-feet': 0.0353147,
        'gallons': 0.264172,
      },
      'tablespoons': {
        'liters': 0.0147868,
        'cubic-inches': 0.902344,
        'cups': 0.0625,
        'cubic-feet': 0.000522189,
        'gallons': 0.00390625,
      },
      'cubic-inches': {
        'liters': 0.0163871,
        'tablespoons': 1.10823,
        'cups': 0.0692641,
        'cubic-feet': 0.000578704,
        'gallons': 0.004329,
      },
      'cups': {
        'liters': 0.236588,
        'tablespoons': 16,
        'cubic-inches': 14.4375,
        'cubic-feet': 0.00835503,
        'gallons': 0.0625,
      },
      'cubic-feet': {
        'liters': 28.3168,
        'tablespoons': 1915.01,
        'cubic-inches': 1728,
        'cups': 119.688,
        'gallons': 7.48052,
      },
      'gallons': {
        'liters': 3.78541,
        'tablespoons': 256,
        'cubic-inches': 231,
        'cups': 15.7725,
        'cubic-feet': 0.133681,
      },
};

export default function convertUnit(value, startUnit, endUnit) {
    if (volumeConversionFactors[startUnit] && volumeConversionFactors[startUnit][endUnit]) {
      return value * volumeConversionFactors[startUnit][endUnit];
    } else {
      throw new Error(`Conversion from ${startUnit} to ${endUnit} is not supported.`);
    }
  }