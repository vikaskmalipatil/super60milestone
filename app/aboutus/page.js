import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { chefs } from "@/data/cheflistdata";
import Chefdetails from "@/components/chefdetails";
import Imagesection from "@/components/imagesection";
import Openinghour from "@/components/openinghour";
import Logos from "@/components/imageslogo";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Imagesection heading="About US" title="about-us" />
      <Logos />
      <div>
        <section className="flex flex-col md:flex-row bg-white dark:bg-[#1D1D1D] py-16 px-4 justify-center items-center">
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
          <div className="bg-white dark:bg-[#262525] rounded-xl shadow-lg p-10 w-full md:w-250">
            <h3 className="text-[#8b6b39] dark:text-white uppercase font-semibold mb-2 flex items-center gap-2">
              About Us <span className="text-sm">➸</span>
            </h3>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              We Invite You <br /> To Visit Our Restaurant
            </h2>
            <p className="text-gray-600 dark:text-white mb-6">
              A relaxing and pleasant atmosphere, good jazz, dinner, and
              cocktails. The Patio Time Bar opens in the center of Florence. The
              only bar inspired by the 1960s, it will give you a experience that
              you’ll have a hard time forgetting.
            </p>
            <button className="bg-[#8b6b39] text-white px-6 py-3 rounded shadow hover:bg-[#6d522e] transition">
              Discover More
            </button>
          </div>
        </section>

        <Chefdetails chefs={chefs} no={3} />
        <Openinghour />
      </div>
      <Footer />
    </div>
  );
}
