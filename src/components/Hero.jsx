import React from "react";
import TextType from "../utils/TextType";
import { Link } from "react-router-dom";

const Hero = () => {
  return (

    <section className="relative h-screen w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex items-center justify-center text-gray-700 overflow-hidden text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="relative z-10 w-full max-w-2xl mx-auto text-[#F2F0EF]">
        <h1 className="text-4xl mb-8 sm:text-6xl font-semibold tracking-tight xl:whitespace-nowrap">
          Where shopping feels easy
        </h1>

        <div className="mt-10 mb-5 text-lg sm:text-xl font-medium">
          <TextType
            text={[
              "Because shopping shouldn’t be complicated. Just browse, click, and smile — we’ll handle the rest.",
            ]}
            typingSpeed={75}
            textColors={["#f5f5f5"]}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <div className="flex justify-center">
          <Link
            to="/products"
            className="rounded-md bg-[#245F73]/40 px-8 py-4 text-lg font-semibold text-[#7889788] shadow-md hover:bg-[#7889788e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center min-w-[180px]"
          >
            Shop
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
