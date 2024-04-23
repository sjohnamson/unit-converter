import DropdownsProps from "@/app/lib/definitions"

const Dropdowns: React.FC<DropdownsProps> = ({label, options }) => {
return(
<div className="relative flex flex-1 flex-shrink-0">
<label htmlFor="Dropdown" className="sr-only">
    {label}
</label>
<input
  className="peer block w-90 rounded-md border border-gray-200 py-[10px] pl-5 text-sm outline-2 placeholder:text-gray-500"
/>
</div>

)}

export default Dropdowns;