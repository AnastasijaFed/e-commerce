import React from 'react';
import TextType from '../utils/TextType';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-gray-700 px-6 py-24 lg:px-8 overflow-hidden text-center">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl  mb-8 sm:text-6xl font-semibold tracking-tight xl:whitespace-nowrap" >
          Where shopping feels easy
        </h1>

        <div className="mt-10 mb-5 text-lg sm:text-xl font-medium ">
          <TextType
            text={[
              'Because shopping shouldn’t be complicated. Just browse, click, and smile — we’ll handle the rest.',
            ]}
            typingSpeed={75}
            textColors={["#ADADAD"]}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <div className="flex justify-center">
          <Link
            to="/products"
            className="rounded-md bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center min-w-[180px]"
          >
            Shop
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
