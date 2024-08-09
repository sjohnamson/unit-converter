import {
  QuestionInputs,
} from "./definitions";
import { temperatureConversionFactors, volumeConversionFactors } from "./units";



export function convertTemperature({
  inputValue,
  startingUnit,
  endingUnit,
}: QuestionInputs) {
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
}: QuestionInputs) {
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
