import { DropdownsProps } from "@/app/lib/definitions";

const Dropdowns: React.FC<DropdownsProps> = ({
  label,
  options,
  value,
  name,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange(name, selectedValue);
  };
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="Dropdown" className="sr-only">
        {label}
      </label>
      <select
        id={name}
        className="w-[125px] h-[40px] rounded-md border border-gray-300 py-[10px] pl-[5px] pr-[5px] text-sm outline-2 placeholder:text-gray-500"
        value={value}
        onChange={handleChange}
      >
        {options.map((unit, index) => (
          <option key={index} value={unit}>
            {unit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdowns;
