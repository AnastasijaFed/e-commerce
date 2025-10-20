import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const WomenSection = () => {
  return (
    <section className="w-full p-6">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold">Women’s Collection</h2>
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Explore more →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {[1, 2, 3].map((card) => (
          <div
            key={card}
            className="card bg-white w-full max-w-xs sm:max-w-sm md:max-w-md shadow-md rounded-lg overflow-hidden"
          >
            <figure className="w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="w-full h-auto object-cover"
              />
            </figure>
            <div className="card-body p-5 text-center">
              <h3 className="card-title text-lg font-semibold">Card Title</h3>
              <p className="text-gray-600 text-sm mt-2">
                A card component has a figure, a body part, and inside body
                there are title and actions parts.
              </p>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-primary px-6 py-2 rounded-md text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WomenSection;
