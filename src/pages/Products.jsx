import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useParams, useNavigate } from 'react-router-dom';

const Products = ({ category }) => {
  const navigate = useNavigate();
  const { category: categoryParam } = useParams();
  const decodedCategory = categoryParam
    ? decodeURIComponent(categoryParam)
    : category;

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category) return; 

    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, [category]);

  return (
    <div className="pt-24 px-6 min-h-screen">
      <div className="flex flex-col items-center mb-10">
        <select
          className="bg-white text-gray-900 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedCategory || decodedCategory || ''}
          onChange={(e) => {
            const newCategory = e.target.value;
            setSelectedCategory(newCategory);

            if (newCategory) {
              navigate(`/products/${encodeURIComponent(newCategory)}`);
            } else {
              navigate('/products'); 
            }
          }}
        >
          <option value="">Select a category...</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        {!selectedCategory && (
          <p className="text-center text-gray-500 mt-20">
            Please select a category above to view products.
          </p>
        )}

        <ProductCard category={decodedCategory || selectedCategory} />
      </div>
    </div>
  );
};

export default Products;
