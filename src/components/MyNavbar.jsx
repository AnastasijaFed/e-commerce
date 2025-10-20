import React from 'react';

const MyNavbar = () => {
  return (
    <nav className=" fixed w-full z-20 top-0 left-0">
      <div className="flex justify-center w-full">
        <ul className="flex flex-col  gap-8 md:flex-row md:space-x-8 p-4 md:p-3 font-medium bg-gray-50 md:bg-transparent">
          <li>
            <a href="/" className="block py-2 px-3 text-dark-text md:p-0">
              Home
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="block py-2 px-3 text-dark-text md:p-0"
            >
              Products
            </a>
          </li>
          <li>
            <a href="/about" className="block py-2 px-3 text-dark-text md:p-0 ">
              About
            </a>
          </li>
          <li>
            <a href="/cart" className="block py-2 px-3 text-dark-text md:p-0 ">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;
