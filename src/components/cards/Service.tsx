import React from "react";
import { Paragraph } from "../shared/Paragraph";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Service = ({ title, description, icon }: ServiceProps) => {
  return (
    <div className="group relative p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow overflow-hidden transition duration-500 cursor-pointer">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(90deg,_rgba(2,0,36,1)_0%,_rgba(22,20,156,1)_51%,_rgba(0,212,255,1)_100%)] z-0 rounded-3xl"></div>

      <div className="relative z-10 transition duration-700">
        <div
          className="rounded-xl bg-body dark:bg-gray-950 group-hover:bg-blue-400  p-3 text-heading-1 w-max 
          transform transition-all duration-700 delay-150 
          group-hover:scale-110 group-hover:text-cyan-100"
        >
          {icon}
        </div>
        <div className="mt-6 space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-heading-2 group-hover:text-blue-300">
            {title}
          </h2>
        </div>
        <Paragraph className="group-hover:text-blue-300">
          {description}
        </Paragraph>
      </div>
    </div>
  );
};
