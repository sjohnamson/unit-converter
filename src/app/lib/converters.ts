import {
  ConversionInputs,
} from "./definitions";
import { temperatureConversionFactors, volumeConversionFactors } from "./units";



export function convertTemperature({
  inputValue,
  startingUnit,
  endingUnit,
}: ConversionInputs) {
  if (
    temperatureConversionFactors[startingUnit] &&
    temperatureConversionFactors[startingUnit][endingUnit]
  ) {
    const conversionFunction =
      temperatureConversionFactors[startingUnit][endingUnit];
    return conversionFunction(inputValue);
  } else {
    throw new Error(
      `Conversion from ${startingUnit} to ${endingUnit} is not supported.`
    );
  }
}

export function convertVolume({
  inputValue,
  startingUnit,
  endingUnit,
}: ConversionInputs) {
  if (
    volumeConversionFactors[startingUnit] &&
    volumeConversionFactors[startingUnit][endingUnit]
  ) {
    return inputValue * volumeConversionFactors[startingUnit][endingUnit];
  } else {
    throw new Error(
      `Conversion from ${startingUnit} to ${endingUnit} is not supported.`
    );
  }
}
