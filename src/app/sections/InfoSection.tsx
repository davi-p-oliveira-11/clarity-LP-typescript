import React from "react";

import { FeatureCard } from "../components/FeatureCard";

export default function InfoSection() {
  
  // const title: string = "One frontend architecture with endless possibilities";
  const subTitle: string = "Step into the future with Islands - Astro Next Gen front-end"

  const cardData = [
   {
     imageSrc: "images/assets/possibilty-1.svg",
     title: "Content-first websites",
     description: "Fetch data from your CMS or work locally with type-safe Markdown and MDX APIs. Astro automatically removes unused JavaScript and renders to HTML for better core web vitals, conversion rates and SEO.",
   },
   {
     imageSrc: "/images/assets/possibilty-2.svg",
     title: "Zero JS by Default",
     description: "FFetch data from your CMS or work locally with type-safe Markdown and MDX APIs. Astro automatically removes unused JavaScript and renders to HTML for better core web vitals, conversion rates and SEO.",
   }
 ]


  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-[32px] leading-[42px] sm:text-[40px] sm:leading-[50px] md:text-[48px] md:leading-[60px] font-semibold text-white text-center">
        One frontend architecture with <br />endless possibilities
      </h2>
      <p className="mt-4 text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] md:text-[24px] md:leading-[36px] font-normal text-gray-300 text-center">
        {subTitle}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
        {cardData.map((card, index) => (
          <FeatureCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
         />
      ))}
     </div>
    </section>
  );
}
