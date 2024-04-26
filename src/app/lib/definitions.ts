// Types for the worksheet question inputs
export interface InputsProps {
    label: string;
    placeholder: string;
    value: number;
    name: string;
    onChange: (label: string, newInput: number) => void; 
  }

// Types for the worksheet dropdown inputs
export interface DropdownsProps {
      label: string;
      value: string;
      name: string;
      onChange: (label: string, newInput: string ) => void;
      options: string[];
    }
    
export interface ResultsProps {
    isValid: boolean;
    isCorrect: boolean;
    buttonClicked: boolean;
    }

// Types for question object
export interface QuestionInputs {
  [key: string]: string | number | boolean;
    inputValue: number;
    startingUnit: string;
    endingUnit: string;
    studentAnswer: number;
    isValid: boolean;
    isCorrect: boolean;
    buttonClicked: boolean;
}

export interface VolumeConversionFactors {
    [key: string]: {
      [key: string]: number;
    };
  }

export interface TemperatureConversionFactors {
    [key: string]: {
      [key: string]: (input: number) => number
    };
  }

  export interface ButtonProps {
    text: string;
    onClick: () => void; 
    bgColor: string; 
    hoverBG: string; 
    activeBG: string;
    textColor: string;
  }
