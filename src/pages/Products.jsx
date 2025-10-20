import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  // Fetch categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  // Fetch products when category changes
 

  return (
    <div> 
   
    <h1 className="text-3xl font-semibold mb-8 text-center">Products</h1>


      <div className="flex flex-col justify-center mb-10">
        <select
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a category...</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
        <ProductCard category={selectedCategory}/>
      </div>
        {!selectedCategory && (
        <p className="text-center text-gray-500 mt-20">
          Please select a category above to view products.
        </p>
      )}
    </div>

  

   
  );
};

export default Products;
