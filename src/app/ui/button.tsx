import React from "react";
import { ButtonProps } from "../lib/definitions";

export default function Button({
  text,
  onClick,
  bgColor,
  hoverBG,
  activeBG,
  textColor,
}: ButtonProps) {
  return (
    <button
      className={`flex h-10 w-[125px] justify-center rounded-lg ${bgColor} p-2  text-sm font-medium ${textColor} transition-colors ${hoverBG} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${activeBG} aria-disabled:cursor-not-allowed aria-disabled:opacity-50`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
