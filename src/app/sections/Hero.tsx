import React from "react";
import Button from "../components/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-purple-background w-full px-4 py-16 md:py-24 flex flex-col items-center text-center">
      <div className="inline-flex items-center bg-[#491FCB] text-white text-sm px-4 py-1 rounded-full">
        Astro 4.4 is now avaiable ! &nbsp;
        <span>
          <a
            href="#"
            className="bg-black-background underline underline-offset-2 text-white hover:text-white rounded-full"
          >
            Learn more 
          </a>
        </span>
      </div>

      <h1 className="text-[36px] leading-[42px] sm:text-[48px] sm:leading-[54px] md:text-[60px] md:leading-[66px] font-bold mt-2">
        The web framework content - <br />
        driven websites
      </h1>

      <p className="mt-6 text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] md:text-[20px] md:leading-[28px] font-normal ">
        Astro powers the world's fastest websites, client-side web apps, <br />{" "}
        dynamic API endpoints, and everything in-between.
      </p>

      <Button />
    </section>
  );
}
