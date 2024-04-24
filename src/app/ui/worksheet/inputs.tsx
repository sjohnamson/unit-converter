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

  console.log('value is:', typeof value)
  // Conditionally change field color based on whether or not input is valid
  const borderColor =
    isNaN(value) ? "border-red-400" : "border-gray-300";

    const textColor =
    isNaN(value) ? "text-red-400" : "text-black-300";

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="Input" className="sr-only">
        {label}
      </label>
      <input
        className={`peer block w-[125px] h-[40px] rounded-md border ${borderColor} ${textColor} py-[10px] pl-5 text-sm outline-2 placeholder:text-gray-500`}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Inputs;
