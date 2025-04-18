import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import VideoPlayer from "../components/VideoPlayer";

export default function Hero() {
  return (
    <section className="bg-purple-background w-full px-4 py-16 md:py-24 flex flex-col items-center text-center">
      <div className="bg-muted px-4 py-1.5 rounded-full text-sm font-medium mb-6">
        Empowering Audit Professionals
      </div>

      <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mb-4">
        The future of trust. <br />
        Powered by Fieldguide
      </h1>

      <p className="text-muted-foreground max-w-xl mb-6 text-base md:text-lg">
        Streamline your workflows, collaborate in real-time, and deliver
        top-tier results with less effort.
      </p>

      <Button />
    </section>
  );
}
