export default function Inputs() {
return(
<div className="relative flex flex-1 flex-shrink-0">
<label htmlFor="Input Value" className="sr-only">
    Input Value
</label>
<input
  className="peer block w-5 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
  placeholder={"Input Value"}
  onChange={(e) => {
    ;
  }}
/>
</div>

)}