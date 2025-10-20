import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 lg:px-8 overflow-hidden text-center">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl  mb-8 sm:text-6xl font-semibold tracking-tight text-gray-900 xl:whitespace-nowrap">
          Where shopping feels easy
        </h1>

        <p className="mt-10 mb-5 text-lg sm:text-xl font-medium text-gray-500">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>

        <div className="flex justify-center">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center min-w-[180px]"
          >
            Shop
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;

