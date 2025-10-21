import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from "react-router-dom";

const WomenSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then((res) => res.json()) // ✅ must return res.json()
    .then((data) => {
      setProducts(data.slice(0, 3));
    })
    
    .catch((err) => console.error("Error fetching products:", err));
}, []);
console.log(products);

  return (
    <section className="w-full p-6">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold">Women’s Collection</h2>
        <Link
          to="/products/women's clothing"
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Explore more →
        </Link>
      </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="card bg-white w-full max-w-xs sm:max-w-sm md:max-w-md shadow-md rounded-lg overflow-hidden"
            >
              <figure className="w-full bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-contain p-4"
                />
              </figure>

              <div className="card-body p-5 text-center">
                <h3 className="card-title text-lg font-semibold truncate">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {product.description}
                </p>
                <p className="text-indigo-600 font-bold mt-4">
                  ${product.price.toFixed(2)}
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-primary px-6 py-2 rounded-md text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            Loading products...
          </p>
        )}
      </div>
    </section>
  );
};

export default WomenSection;
