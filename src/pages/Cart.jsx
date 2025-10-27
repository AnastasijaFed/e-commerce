import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );
  function handleQuantityChange() {
    
  }
  


  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="pt-24 px-6 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">
        Your Cart ({totalItems} items)
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y">
            {cartItems.map((item) => (
              <li key={item.id} className="grid grid-cols-6 items-center py-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain mr-4"
                />
                <h3 className="text-lg font-medium col-span-2">{item.title}</h3>

                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <form class="max-w-xs mx-auto">
                  <label
                    for="quantity-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Choose quantity:
                  </label>
                  <div class="relative flex items-center max-w-[8rem]">
                    <button
                      type="button"
                      id="decrement-button"
                      onClick={handleQuantityChange}
                      data-input-counter-decrement="quantity-input"
                      class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="quantity-input"
                      data-input-counter
                      aria-describedby="helper-text-explanation"
                      class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={item.quantity}
                      required
                    />
                    <button
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="quantity-input"
                      class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </form>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
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
