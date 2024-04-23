// Input types for the worksheet question inputs
export default interface InputsProps {
    label: string;
    placeholder: string;
    value: string | number; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   }