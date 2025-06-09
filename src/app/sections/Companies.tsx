import React from "react";
import { logos } from "../constants/LogoCarousel";

export default function Companies() {

  const sectionText: string = "Used by the best developers and teams around the world";

  return (
    <section className="w-full px-4 py-16 md:py-24 flex flex-col items-center text-center">
      <p className="text-white text-[20px] leading-[24px] sm:text-[22px] sm:leading-[24px] md:text-[24px] font-medium">
        {sectionText}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center mt-2">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="w-32 h-26 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
