import React from "react";
interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onclick?: () => void;
}
export const Button = ({ onclick, children, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      className={`px-6 py-3 rounded-full outline-none cursor-pointer
        relative overflow-hidden border border-transparent bg-blue-600 dark:bg-violet-600 ${className}`}
    >
      {children}
    </button>
  );
};
