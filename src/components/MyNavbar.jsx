import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Listbox } from "@headlessui/react";

const MyNavbar = () => {
  const navigate = useNavigate();
  const categories = ["All", "Men's Clothing", "Women's Clothing", "Jewelery", "Electronics"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") navigate("/products");
    else navigate(`/products/${category.toLowerCase().replace(/[' ]/g, "-")}`);
  };

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-white ">
      <div className="flex justify-center w-full">
        <ul className="flex md:flex-row gap-8 p-4 font-medium bg-gray-50 md:bg-transparent">
          <li>
            <Link to="/" className="block py-2 px-3 text-gray-800">
              Home
            </Link>
          </li>

           <li>
            <Link to="/products" className="block py-2 px-3 text-gray-800">
              Products
            </Link>
          </li>

          <li>
            <Link to="/cart" className="block py-2 px-3 text-gray-800">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;
