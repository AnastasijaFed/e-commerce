import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen ">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Your Cart ({totalItems} items)
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow-sm">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col lg:flex-row lg:items-center justify-between p-4 gap-6 border-b border-gray-200"
              >

                <div className="flex items-center gap-4 w-full lg:w-1/3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-md"
                  />
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                </div>


                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-2.5 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  >
                    <svg
                      className="w-4 h-4 text-gray-800"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>

                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="bg-white border-t border-b border-gray-300 w-14 text-center text-gray-900 text-sm h-11 focus:ring-0"
                  />

                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-2.5 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  >
                    <svg
                      className="w-4 h-4 text-gray-800"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>


                <p className="text-gray-700 text-lg font-semibold mt-2 lg:mt-0 lg:ml-auto">
                  ${item.price.toFixed(2) * item.quantity}
                </p>


                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-medium mt-2 lg:mt-0"
                >
                  Remove
                </button>
              </li>

            ))}
          </ul>


          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm">
            <p className="text-xl font-semibold text-gray-800 mb-3 sm:mb-0">
              Total: <span className="text-blue-600">${total.toFixed(2)}</span>
            </p>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-all"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
