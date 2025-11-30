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
          <h2 className="text-4xl font-bold text-black dark:text-white mt-2">
            Send us a Message
          </h2>
          <form>
            <div className="grid grid-cols-2 mb-8 gap-6">
              <input
                placeholder="Name"
                class="w-full p-4 border border-gray-200 "
              />
              <input
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
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48388.929990966964!2d-74.00332!3d40.711233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1653598669477!5m2!1sen!2sus"
          className="w-full h-screen py-14 md:py-14"
        />
      </div>

      <Openinghour />
      <Footer />
    </div>
  );
}
