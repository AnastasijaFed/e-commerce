// src/components/ProductSection.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductSection = ({ 
  category, 
  title, 
  linkTo, 
  limit = 3, 
  showButton = false 
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!category) return;
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, limit)))
      .catch((err) => console.error("Error fetching products:", err));
  }, [category, limit]);

  return (
    <section className="w-full p-6">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold text-[#245F73]">{title}</h2>
        <Link
          to={linkTo}
          className="text-[#245F73] hover:text-[#566356] font-medium"
        >
          Explore more →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {products.length > 0 ? (
          products.map((product, i) => (
            <motion.div
              key={product.id}
              className="card bg-[#fcfcfc] w-full max-w-xs sm:max-w-sm md:max-w-md shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <figure className="w-full bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-contain p-4"
                />
              </figure>

              <div className="card-body p-5 text-center">
                <p className="card-title text-left text-wrap text-[#2F362F] text-sm font-semibold truncate">
                  {product.title}
                </p>
               
                <p className="text-[#BBBDBC] font-bold mt-4">
                  ${product.price.toFixed(2)}
                </p>

              </div>
            </motion.div>
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

export default ProductSection;
