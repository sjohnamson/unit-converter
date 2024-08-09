import { TemperatureConversionFactors, VolumeConversionFactors } from "./definitions";

export const volumes = [
  "Liters",
  "Tablespoons",
  "Cubic-Inches",
  "Cups",
  "Cubic-Feet",
  "Gallons",
];

export const temperatures = ["Celsius", "Kelvin", "Fahrenheit", "Rankine"];

export const temperatureConversionFactors: TemperatureConversionFactors = {
  Celsius: {
    Fahrenheit: (celsius) => (celsius * 9) / 5 + 32,
    Kelvin: (celsius) => celsius + 273.15,
    Rankine: (celsius) => ((celsius + 273.15) * 9) / 5,
  },
  Fahrenheit: {
    Celsius: (fahrenheit) => ((fahrenheit - 32) * 5) / 9,
    Kelvin: (fahrenheit) => ((fahrenheit - 32) * 5) / 9 + 273.15,
    Rankine: (fahrenheit) => fahrenheit + 459.67,
  },
  Kelvin: {
    Celsius: (kelvin) => kelvin - 273.15,
    Fahrenheit: (kelvin) => ((kelvin - 273.15) * 9) / 5 + 32,
    Rankine: (kelvin) => (kelvin * 9) / 5,
  },
  Rankine: {
    Celsius: (rankine) => ((rankine - 491.67) * 5) / 9,
    Fahrenheit: (rankine) => rankine - 459.67,
    Kelvin: (rankine) => (rankine * 5) / 9,
  },
};

export const volumeConversionFactors: VolumeConversionFactors = {
  Liters: {
    Tablespoons: 67.628,
    "Cubic-Inches": 61.024,
    Cups: 4.22675,
    "Cubic-Feet": 0.0353147,
    Gallons: 0.264172,
  },
  Tablespoons: {
    Liters: 0.0147868,
    "Cubic-Inches": 0.902344,
    Cups: 0.0625,
    "Cubic-Feet": 0.000522189,
    Gallons: 0.00390625,
  },
  "Cubic-Inches": {
    Liters: 0.0163871,
    Tablespoons: 1.10823,
    Cups: 0.0692641,
    "Cubic-Feet": 0.000578704,
    Gallons: 0.004329,
  },
  Cups: {
    Liters: 0.236588,
    Tablespoons: 16,
    "Cubic-Inches": 14.4375,
    "Cubic-Feet": 0.00835503,
    Gallons: 0.0625,
  },
  "Cubic-Feet": {
    Liters: 28.3168,
    Tablespoons: 1915.01,
    "Cubic-Inches": 1728,
    Cups: 119.688,
    Gallons: 7.48052,
  },
  Gallons: {
    Liters: 3.78541,
    Tablespoons: 256,
    "Cubic-Inches": 231,
    Cups: 16,
    "Cubic-Feet": 0.133681,
  },
};