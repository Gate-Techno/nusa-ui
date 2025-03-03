import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:60px_60px]">
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10 px-6 py-16">
        <div className="max-w-2xl text-center">
          <h1 className="mt-6 text-4xl font-bold !leading-[1.2] tracking-tight sm:text-5xl md:text-7xl">
            Nusa UI
          </h1>
          <p className="mt-6 text-[17px] md:text-lg">
            Nusa UI is a free and open-source library of Tailwind CSS components
            that are designed to be simple, accessible, and easy to use.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link href={"#features"} className="flex items-center gap-1">
              First Setup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
