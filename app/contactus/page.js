import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { chefs } from "@/data/cheflistdata";
import Chefdetails from "@/components/chefdetails";
import Imagesection from "@/components/imagesection";
import Openinghour from "@/components/openinghour";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Imagesection heading="About US" title="about-us" />
      <section>
        <div className="flex flex-col md:flex-row justify-center itemS-center mt-20 ml-25 md:ml-0 gap-28">
          <div className="flex flex-col justify-center item-center boarder h-60 w-60 shadow-md p-6">
            <img
              className="h-30"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75"
            ></img>
            <h2 className="text-xl font-semibold">Hotline</h2>
            <p className="text-gray-600 mt-1">+4733378901</p>
          </div>
          <div className="flex flex-col justify-center item-center boarder h-60 w-60 shadow-md p-6 ">
            <img
              className="h-30"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75"
            ></img>
            <h2 className="text-xl font-semibold">Our Location</h2>
            <p className="text-gray-600 mt-1">
              55 Main Street, The Grand Avenue 2nd Block, New York City
            </p>
          </div>
          <div className="flex flex-col justify-center item-center boarder h-60 w-60 shadow-md p-6">
            <img
              className="h-30"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75"
            ></img>
            <h2 className="text-xl font-semibold">Official Email</h2>
            <p className="text-gray-600 mt-1">info@restan.com</p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-[#262525] shadow-lg mt-20 rounded-2xl p-10">
        <div className="text-black  dark:text-white flex flex-col items-center justify-center gap-2 mt-20">
          <div className="">Keep in touch</div>
          <h2 className="text-4xl font-bold text-black dark:text-white mt-2">Send us a Message</h2>
          <form >
            <div className="grid grid-cols-2 mb-8 gap-6">
              <input
                type="text"
                placeholder="Name"
                class="w-full p-4 border border-gray-200 "
              />
              <input
                type="text"
                placeholder="Phone"
                class="w-full p-4 border border-gray-200 "
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              class="w-full p-4 border border-gray-200"
            />

            <textarea
              placeholder="Your Message "
              rows="5"
              class="w-full p-4 border border-gray-200"
            ></textarea>

            <button
              type="submit"
              class="bg-[#8B6A3C]  text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2"
            >
          Get In Touch
            </button>
          </form>
        </div>
      </section>
      <section className="mt-20" >
        <img className="w-full " src="data:image/jpeg;base64,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"></img>
      </section>

      <Openinghour />
      <Footer />
    </div>
  );
}
