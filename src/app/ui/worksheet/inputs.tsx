
import {InputsProps} from "@/app/lib/definitions"

const Inputs: React.FC<InputsProps> = ({label, placeholder, value, name, onChange}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = parseFloat(e.target.value);
    onChange(name, newInput); 
  };

return(
<div className="relative flex flex-1 flex-shrink-0">
<label htmlFor="Input" className="sr-only">
    {label}
</label>
<input
  className="peer block w-90 rounded-md border border-gray-200 py-[10px] pl-5 text-sm outline-2 placeholder:text-gray-500"
  placeholder={placeholder}
  onChange={handleChange}
/>
</div>

)}

export default Inputs;
