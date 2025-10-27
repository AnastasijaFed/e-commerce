import React, { useState, useEffect } from 'react';
import { useCart } from "../context/CartContext";

const ProductCard = ({ category }) => {
  const { addToCart } = useCart();
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products"; // default: all products
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [category]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`${product.title} added to cart!`);
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <section className="w-full min-h-screen p-6 mt-6">
      {message && (
        <div className="fixed top-20 right-6 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300">
          {message}
        </div>
      )}

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#fcfcfc] shadow-md rounded-lg overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
              <figure className="w-full bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-contain p-4"
                />
              </figure>
              <div className="p-5 text-center">
                <h3 className="text-lg text-[#2F362F] font-semibold truncate">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 place-content-between">
                  <p className="text-[#BBBDBC] font-bold mt-4">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    type="button"
                    id="cart"
                    onClick={() => handleAddToCart(product)}
                    className="bg-[#245F73] hover:bg-[#1d4f61] text-white rounded-full px-4 py-2 mt-2 transition"
                  >
                    + Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-20">
          Loading products...
        </p>
      )}
    </section>
  );
};

export default ProductCard;
