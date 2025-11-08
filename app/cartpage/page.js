"use client";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Imagesection from "@/components/imagesection";
import { chefs } from "@/data/cheflistdata";

export default function CartPage() {
  return (
    <div>
      <Navbar />
      <Imagesection heading="Your Cart" title="Cart" />
      <div className="max-w-6xl mx-auto p-6">
        {/* Cart Table */}
        <div>
          <table className="w-full text-left">
            <thead className="bg-gray-200 text-gray-600  text-sm">
              <tr>
                <th className="p-4">Remove</th>
                <th className="p-4">Thumbnail</th>
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-center py-10 text-gray-500">
                  Your cart is currently empty.
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-col md:flex-row justify-between items-center p-4 border-t gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                placeholder="Coupon code"
                className="border  px-4 py-2 w-full md:w-60 "
              />
              <button className="bg-[#8A6B3F] hover:bg-[#745730] text-white px-6 py-2 rounded-md">
                Apply Coupon
              </button>
            </div>
            <Link href="/checkout">
              <button className="bg-[#8A6B3F] hover:bg-[#745730] text-white px-6 py-2 rounded-md">
                Checkout
              </button>
            </Link>
            <button className="bg-[#8A6B3F] hover:bg-[#745730] text-white px-6 py-2 rounded-md">
              Checkout
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Cart totals</h2>
          <div className="border ">
            <div className="grid grid-cols-2 border">
              <div className="p-4 font-medium">Subtotal</div>
              <div className="p-4">$0.00</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="p-4 font-medium">Shipping</div>
              <div className="p-4">
                <p>Free shipping</p>
                <p>Shipping to Australia.</p>
                <button className="text-black font-medium  mt-2">
                  Change address
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="p-4 font-medium">Total</div>
              <div className="p-4 font-semibold">$0.00</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
