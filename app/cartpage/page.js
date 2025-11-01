"use client";

import { useCart } from "@/data/CartContext";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Imagesection from "@/components/imagesection";
import { useState } from "react";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

  const handleQuantityChange = (index, value) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = value;
    setQuantities(updatedQuantities);
  };

  const calculateSubtotal = (price = "", qty = 1) => {
    const numericPrice = Number(price.replace("$", ""));
    return (numericPrice * qty).toFixed(2);
  };

  return (
    <div>
      <Navbar />
      <Imagesection heading="Your Cart" title="Cart" />

      <div className="p-10 bg-white dark:bg-[#1D1D1D]  text-black overflow-x-auto">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-white">
            Your cart is empty.
          </p>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-[#262525] text-gray-600  dark:text-white uppercase text-sm">
                <th className="p-4">Remove</th>
                <th className="p-4">Thumbnail</th>
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 text-lg hover:text-red-700"
                    >
                      ❌
                    </button>
                  </td>

                  <td className="p-4">
                    <img src={item.img} className="w-20 h-20 object-contain" />
                  </td>

                  <td className="p-4 font-medium">{item.name}</td>

                  <td className="p-4 font-medium">{item.price}</td>

                  <td className="p-4">
                    <input
                      type="number"
                      min="1"
                      value={quantities[index]}
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value))
                      }
                      className="w-16 border rounded text-center"
                    />
                  </td>

                  <td className="p-4 font-bold">
                    ${calculateSubtotal(item.price, quantities[index])}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Coupon & Checkout Section */}
        {cartItems.length > 0 && (
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Coupon code"
                className="border p-3 rounded-lg w-64"
              />
              <button className="bg-yellow-800 text-white px-5 py-2 rounded-lg hover:bg-yellow-900">
                Apply Coupon
              </button>
            </div>

            <button className="bg-yellow-800 text-white px-6 py-3 rounded-lg hover:bg-yellow-900">
              Checkout
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
