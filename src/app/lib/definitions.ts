// Types for the worksheet question inputs
export default interface InputsProps {
    label: string;
    placeholder: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

// Types for the worksheet dropdown inputs
export default interface DropdownsProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: string[];
}
