export default function Inputs({ 
    label,
    placeholder 
}: { 
    label: string,
    placeholder: string 
}) {
return(
<div className="relative flex flex-1 flex-shrink-0">
<label htmlFor="Input" className="sr-only">
    {label}
</label>
<input
  className="peer block w-5 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
  placeholder={placeholder}
/>
</div>

)}