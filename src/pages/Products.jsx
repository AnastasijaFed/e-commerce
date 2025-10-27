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
  const activeCategory = decodedCategory || selectedCategory;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [decodedCategory]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  return (
    <div className="pt-24 px-6 min-h-screen">
      <div className="flex flex-col items-center mb-10">
        <select
          className="bg-white text-gray-900 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={activeCategory || ''}
          onChange={(e) => {
            const newCategory = e.target.value;
            setSelectedCategory(newCategory);



            if (newCategory) {
              navigate(`/products/${encodeURIComponent(newCategory)}`);
            } else {
              navigate('/products'); // show all products
            }
          }}
        >
          <option value="">All categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

      
        <ProductCard category={activeCategory || ''} />
      </div>
    </div>
  );
};

export default Products;
