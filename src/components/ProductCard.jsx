
import React, {useState, useEffect} from 'react'

const ProductCard = ({category}) => {
    const [message, setMessage] = useState("");
    const [products, setProducts] = useState([]);
     useEffect(() => {
    if (!category) return;

    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [category]);

   const handleAddToCart = (productTitle) => {
    setMessage(`${productTitle} added to cart!`);

    setTimeout(() => setMessage(""), 2000);
  };
  return (
     <section className="w-full min-h-screen p-6 mt-6">
      {message && (
        <div className="fixed top-20 right-6 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300">
          {message}
        </div>
      )}

      {category && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
              <figure className="w-full bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-contain p-4"
                />
              </figure>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold truncate">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 place-content-between">
                    
                    <p className="text-indigo-600 font-bold mt-4">
                  ${product.price.toFixed(2)}
                </p>
                <button type="button" id='cart' onClick={() => handleAddToCart(product.title)} className="bg-indigo-600 text-amber-50 rounded-full mt-4">+ Add to cart</button>

                </div>
                
                

              </div>
            </div>
          ))}
        </div>
      )}

    
    </section>
  )
}

export default ProductCard