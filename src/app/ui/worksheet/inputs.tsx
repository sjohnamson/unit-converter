import { InputsProps } from "@/app/lib/definitions";

const Inputs: React.FC<InputsProps> = ({
  label,
  placeholder,
  value,
  name,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = parseFloat(e.target.value);
    onChange(name, newInput);
  };
  // Conditionally change field color based on whether or not input is valid
  const borderColor = isNaN(value) ? "border-red-500" : "border-gray-300";
  const textColor = isNaN(value) ? "text-red-400" : "text-black";

  const inputId = `${name}-input`;

  return (
    <div>
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-[120px] h-[40px] rounded-md border ${borderColor} ${textColor} py-[5px] pl-5 text-sm placeholder:text-gray-500`}
        placeholder={placeholder}
        type="number"
        onChange={handleChange}
      />
    </div>
  );
};

export default Inputs;
