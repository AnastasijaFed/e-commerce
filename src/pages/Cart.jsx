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
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-[#F2F0EF]">
      {/* Page title */}
      <h1 className="text-3xl font-semibold mb-8 text-[#245F73]">
        Your Cart <span className="text-[#2F362F]">({totalItems} items)</span>
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-[#BBBDBC] text-lg">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          <ul className="divide-y divide-[#E0E0E0] bg-white rounded-xl shadow-md">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col lg:flex-row lg:items-center justify-between p-4 gap-6"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 w-full lg:w-1/3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-md border border-[#EEE]"
                  />
                  <h3 className="text-lg font-medium text-[#2F362F] leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-[#F2F0EF] hover:bg-[#E6E3E1] border border-[#BBBDBC] rounded-l-md p-2.5 focus:ring-2 focus:ring-[#245F73] focus:outline-none"
                  >
                    <svg
                      className="w-4 h-4 text-[#2F362F]"
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
                    className="bg-white border-t border-b border-[#BBBDBC] w-14 text-center text-[#2F362F] text-sm h-11 focus:ring-0"
                  />

                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-[#F2F0EF] hover:bg-[#E6E3E1] border border-[#BBBDBC] rounded-r-md p-2.5 focus:ring-2 focus:ring-[#245F73] focus:outline-none"
                  >
                    <svg
                      className="w-4 h-4 text-[#2F362F]"
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

                {/* Price */}
                <p className="text-[#245F73] text-lg font-semibold mt-2 lg:mt-0 lg:ml-auto">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#733E24] hover:text-[#5a2f1d] font-medium mt-2 lg:mt-0 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Summary */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-white p-5 rounded-xl shadow-md">
            <p className="text-xl font-semibold text-[#2F362F] mb-3 sm:mb-0">
              Total:{" "}
              <span className="text-[#245F73]">${total.toFixed(2)}</span>
            </p>
            <button
              onClick={clearCart}
              className="bg-[#245F73] text-[#F2F0EF] px-6 py-2 rounded-md hover:bg-[#1d4f61] transition-all"
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
