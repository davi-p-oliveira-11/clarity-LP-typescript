"use client"

import React from "react";
import Button from "../components/Button";
import { Clipboard, ClipboardCopy } from "lucide-react";
import {useState} from "react";
import Image from "next/image";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const copyText = 'npm create astro@latest';

  const handleCopy = async () => {
     try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  return (
    <section className="relative pb-32 bg-purple-background w-full px-4 py-16 md:py-24 flex flex-col items-center text-center">
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
       
      <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
         <Button text="Get Started" />
         <div className="flex items-center border border-[#491FCB] rounded-full px-4 py-2 bg-black-background w-full max-w-md">
        <input
          type="text"
          value={copyText}
          readOnly
          className="flex-1 text-gray-300 text-sm md:text-base bg-transparent outline-none"
        />
        <button onClick={handleCopy} className="text-[#491FCB] hover:opacity-80 transition">
          {copied ? (
            <span className="text-sm font-medium">Copied!</span>
          ) : (
            <ClipboardCopy size={18} />
          )}
        </button>
       </div>
      </div>
      
      {/*  
      <div className="w-full ">
       <Image
        src="/images/assets/product.png"
        alt="Product Preview"
        width={1202}
        height={770}
        className="w-full "
        priority
        />
      </div>
      */}
      
    </section>
  );
}
