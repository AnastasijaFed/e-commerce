import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useParams, useNavigate } from 'react-router-dom';
import CategoryDropdown from '../components/CategoryDropdown';

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
    <div className="pt-24 px-6 min-h-screen bg-[#F2F0EF]">
      <div className="flex flex-col items-center mb-10">

        <CategoryDropdown
          categories={categories}
          activeCategory={activeCategory}
          setSelectedCategory={setSelectedCategory}
          navigate={navigate}
        />


        <h1 className="mt-8 text-3xl font-semibold text-[#245F73] tracking-tight">
          {activeCategory
            ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`
            : 'All Products'}
        </h1>


        <ProductCard category={activeCategory || ''} />
      </div>
    </div>
  );
};

export default Products;
