import React, { useState, useEffect } from 'react';
import { useCart } from "../context/CartContext";


const ProductCard = ({ category }) => {
  const { addToCart } = useCart();
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
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
        <div className="fixed top-20 right-6 bg-[#245F73] text-[#F2F0EF] px-4 py-2 rounded-md shadow-md transition-opacity duration-300">
          {message}
        </div>
      )}

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md border border-[#E6E6E6]"
            >
        
              <figure className="w-full bg-[#F9FAFB] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-contain p-4 transition-transform duration-300 hover:scale-105"
                />
              </figure>

             
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[#2F362F] truncate">
                  {product.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm mt-2 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-[#245F73] font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className="bg-[#245F73] hover:bg-[#1d4f61] text-[#F2F0EF] rounded-full px-5 py-2 text-sm font-medium transition-all"
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-[#BBBDBC] mt-20">
          Loading products...
        </p>
      )}
    </section>
  );
};

export default ProductCard;
