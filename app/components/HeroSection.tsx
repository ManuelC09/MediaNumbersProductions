import React from "react";
import Spline from "@splinetool/react-spline/next";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function HeroSection() {
  return (
    <header
      id="home"
      className="flex flex-col-reverse md:flex-row w-full h-[110vh] max-w-7xl -top-3 items-center justify-center relative overflow-x-hidden"
    >
      {/* Texto del Hero */}
      <div className="w-full h-3/5 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-black md:text-6xl leading-tight">
            Your Partner in Marketing, Web Design, and Social Media
          </h1>
        </div>
       
        <div className="w-full flex items-center justify-center md:justify-start gap-4">
          <HoverBorderGradient
            containerClassName=""
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Get Started</span>
          </HoverBorderGradient>
        </div>
      </div>

      {/* Modelo Spline */}
      <div className="w-full h-3/5 md:h-4/5 md:w-3/5 flex items-center justify-center relative">
        <Spline
          className="w-full flex scale-[0.7]  lg:scale-[0.7] items-center justify-center md:justify-start"
          scene="https://prod.spline.design/BhQXXAUJLDPU-S8B/scene.splinecode"
        />
      </div>
    </header>
  );
}
