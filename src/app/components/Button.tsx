import React from "react";

interface ButtonProps {
  text?: string;
  className?: string;
}

export default function Button({ text = "Send", className = "" }: ButtonProps) {
  return (
    <button className={`bg-white text-[#491FCB] px-8 py-2 rounded-full text-sm md:text-base font-medium whitespace-nowrap ${className}`}>
      {text}
    </button>
  );
}
