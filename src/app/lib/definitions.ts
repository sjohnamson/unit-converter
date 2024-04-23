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
