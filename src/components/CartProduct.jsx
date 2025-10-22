import React, {useState, useEffect} from 'react'

const CartProduct = ({productID}) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productID}`)
          .then((res) => res.json())
          .then((data) => setProduct(data))
          .catch((err) => console.error("Error fetching product:", err));
      }, [productID]);

  return (
    <div>
        {product && (
            <div className="flex flex-row items-center space-x-4 p-4 border-b">
                <img src={product.image} alt={product.title} className="w-16 h-16 object-contain"/>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
                    <p className="text-gray-600">Quantity: {quantity}</p>
                    <p className="text-gray-800 font-bold">Total: ${(product.price * quantity).toFixed(2)}</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default CartProduct