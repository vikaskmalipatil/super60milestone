import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { chefs } from "@/data/cheflistdata";
import Chefdetails from "@/components/chefdetails";
import Imagesection from "@/components/imagesection";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Imagesection heading="About US" title="about-us" />
      <div>
        <section className="bg-[#f5f3f0] dark:bg-[#262525] flex flex-col justify-around items-center w-full h-75 md:h-90">
          <div className="text-stone-600 dark:text-white font-bold mt-10">
            OUR TRUSTED 8K HAPPY PARTNER
          </div>
          <div className="flex flex-row mb-10 gap-20">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75"
              className="h-20 w-30"
            />
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75"
              className="h-20 w-30"
            />
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75"
              className="h-20 w-30"
            />
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75"
              className="h-20 w-30"
            />
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75"
              className="h-20 w-30"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row bg-white dark:bg-[#1D1D1D] py-16 px-8 justify-center items-center">
          <div className="flex flex-col md:flex-row mb-20 gap-8">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              className="w-64 h-80 shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2"
              className="w-64 h-80   shadow-md"
            />
          </div>
          <div className="bg-white dark:bg-[#262525] rounded-xl shadow-lg p-10 w-full md:w-275">
            <h3 className="text-[#8b6b39] dark:text-white uppercase font-semibold mb-2 flex items-center gap-2">
              About Us <span className="text-sm">➸</span>
            </h3>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              We Invite You <br /> To Visit Our Restaurant
            </h2>
            <p className="text-gray-600 dark:text-white mb-6">
              A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
            </p>
            <button className="bg-[#8b6b39] text-white px-6 py-3 rounded shadow hover:bg-[#6d522e] transition">
              Discover More
            </button>
          </div>
        </section>

        <Chefdetails chefs={chefs} no={3} />

        <section className="bg-white dark:bg-[#1D1D1D] flex flex-col py-25 px-8">
          <div className="relative md:absolute mt-20 w-full md:w-190">
            <div className="w-full h-64 md:h-96  rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1&loop=1&playlist=F3zw1Gvn4Mk"
                title="Restaurant video"
              ></iframe>
            </div>
          </div>

          <div className="relative md:ml-150 bg-white dark:bg-[#262525] rounded-xl shadow-lg p-10 w-full md:w-160 h-100">
            <h3 className="text-[#8b6b39] dark:text-white uppercase font-semibold text-4xl mb-2 flex items-center gap-2">
              Opening Hour
            </h3>
            <div className="text-l font-bold mb-4 text-gray-900 dark:text-white">
              A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Sunday To Tuesday:
                </span>
                <span className="text-gray-900 dark:text-white font-medium">
                  10:00 - 09:00
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Wednesday To Thursday:
                </span>
                <span className="text-gray-900 dark:text-white font-medium">
                  11:30 - 10:30
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Friday & Saturday:
                </span>
                <span className="text-gray-900 dark:text-white font-medium">
                  10:30 - 12:00
                </span>
              </div>
            </div>

            <div className="flex items-center mt-10 gap-4">
              <div className="bg-[#8b6b39] p-4 rounded-full"></div>
              <div>
                <p className="text-gray-600 dark:text-white text-sm">
                  Call Anytime
                </p>
                <p className="text-gray-900 dark:text-white font-bold text-lg">
                  +964733-378901
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
