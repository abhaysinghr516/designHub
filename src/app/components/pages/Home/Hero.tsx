import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#f8f7f4] py-20">
      <div className="container mx-auto text-center px-4 sm:px-8">
        <span className="text-sm sm:text-base text-purple-800 bg-[#edddfb] py-2 px-4 rounded-full inline-block">
          Design innovation starts here{" "}
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium source_serif mb-6 mt-8">
          Welcome to DesignHub
        </h1>
        <p className="text-lg sm:text-xl md:text-3xl mb-12">
          Your Ultimate Resource for Design Systems and Website Design
        </p>
        <Link
          href="/design-principles"
          className="bg-[#3C665E] text-white hover:shadow-2xl py-3 px-5 sm:py-4 sm:px-6 rounded-full inline-block"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
