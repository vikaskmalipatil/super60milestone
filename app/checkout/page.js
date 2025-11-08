import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { chefs } from "@/data/cheflistdata";
import Chefdetails from "@/components/chefdetails";
import Imagesection from "@/components/imagesection";
import Openinghour from "@/components/openinghour";
import Blogstandard from "@/components/blogstandard";
import { standardblogs } from "@/data/standardblog";
export default function Home() {
  return (
    <div>
      <Navbar />

      <Imagesection heading="Cart Page" title="checkout" />

      <div>
        <div className="flex flex-row gap-20 item-center font-bold justify-center mt-18">
          <div className="flex flex-col gap-3">
            <div className="text-3xl font-bold">Billing details</div>
            <div className="flex flex-row  font-bold gap-10">
              <div>
                <label>First Name*</label>
                <input className="w-full border border-gray-300 rounded-md p-2"></input>
              </div>
              <div>
                <label>last Name*</label>
                <input className="w-full border border-gray-300 rounded-md p-2"></input>
              </div>
            </div>
            <label>
              Country / Region *
              <input
                className="w-full border font-normal  border-gray-300 rounded-md p-2"
                placeholder="India"
              ></input>
            </label>
            <label>
              Street address *
              <input
                className="w-full border border-gray-300  font-normal  rounded-md p-2"
                placeholder="House number and street name"
              ></input>
              <input
                className="w-full border font-normal border-gray-300 rounded-md p-2"
                placeholder="Apartment,suite,unit,etc.(optional)"
              ></input>
            </label>
            <label>
              State / County *
              <input className="w-full border border-gray-300 rounded-md p-2"></input>
            </label>
            <label>
              Postcode / ZIP *
              <input className="w-full border border-gray-300 rounded-md p-2"></input>
            </label>
            <label>
              Phone (optional)
              <input className="w-full border border-gray-300 rounded-md p-2"></input>
            </label>
            <label>
              Email address *
              <input className="w-full border border-gray-300 rounded-md p-2"></input>
            </label>
          </div>
          <div className="flex flex-col">
            <label class="block text-3xl font-medium mb-2">
              Order Notes (Option)
            </label>

            <textarea
              rows="4"
              class="w-full p-3 border border-gray-300  font-normal  rounded-md "
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center item-center mb-20">
          <div className="w-285 mt-10">
            <h2 className="text-2xl font-semibold mb-4">Your order</h2>

            <table className="w-full border border-gray-300">
              <tr className="border-b">
                <th className="text-left p-2">Product</th>
                <th className="text-left p-2">Subtotal</th>
              </tr>
              <tr className="border-b">
                <td className="p-2">Grilled Flank Steak × 1</td>
                <td className="p-2">$14.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Shipping</td>
                <td className="p-2">Free Shipping</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Total</td>
                <td className="p-2 font-semibold">$14.00</td>
              </tr>
            </table>

            <div className="mt-4 bg-gray-100 p-3 rounded">
              <p className="text-sm">
                ℹ Sorry, it seems there are no available payment methods.
              </p>
            </div>

            <button className="mt-4 bg-[#836744] text-white px-5 py-2 rounded">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
