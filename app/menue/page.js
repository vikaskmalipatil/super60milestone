"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Imagesection from "@/components/imagesection";
export default function Menu() {
  return (
    <div>
      <Navbar />
      <Imagesection heading="Food Menu" title="food menu" />

      <div className="flex flex-col gap-[2rem]">
        <div className="flex flex-col items-center gap-[clamp(2rem,5vw,5rem)] text-black bg-white dark:bg-[#1D1D1D] font-bold py-[clamp(3rem,3vw,5rem)]">
          <div className="flex flex-col items-center gap-[clamp(1rem,1vw,2rem)]">
            <h2 className="text-yellow-400 text-[clamp(1rem,5vw,2rem)]">
              Category
            </h2>
            <h1 className="text-[clamp(1rem,5vw,3rem)] dark:text-white">
              Choose Your Best Food
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-[clamp(1rem,5vw,10rem)] w-full max-w-[1200px]">
            <FoodCard fimg="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F1.jpg&w=828&q=75" />
            <FoodCard fimg="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F2.jpg&w=828&q=75" />
            <FoodCard fimg="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F3.jpg&w=828&q=75" />
            <FoodCard fimg="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F4.jpg&w=828&q=75" />
            <FoodCard fimg="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F17.jpg&w=828&q=75" />
            <FoodCard fimg="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F18.jpg&w=828&q=75" />
            <FoodCard fimg="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F19.jpg&w=828&q=75" />
            <FoodCard fimg="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F20.jpg&w=828&q=75" />
            <FoodCard fimg="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F2.jpg&w=828&q=75" />
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center bg-black
                  text-white px-[clamp(1rem,6vw,6rem)] "
        >
          <div className="flex flex-col max-w-[600px]">
            <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-semibold  mb-4">
              30 MINUTES <br /> DELIVERY!
            </h1>
            <p className="text-[clamp(0.9rem,2vw,1rem)] leading-relaxed text-gray-200 mb-6">
              A relaxing and pleasant atmosphere, good jazz, dinner, and
              cocktails. The Patio Time Bar opens in the center of Florence. The
              only bar inspired by the 1960s, it will give you an experience
              that you’ll have a hard time forgetting.
            </p>

            <button className="flex items-center gap-2 bg-[#a57c45] hover:bg-[#c28d4c] transition-colors text-white font-medium px-6 py-3 rounded-md w-fit">
              Order Now
            </button>
          </div>

          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=750&q=75"
              alt="Delivery Person"
              width={350}
              height={350}
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[clamp(2rem,5vw,6rem)] px-[clamp(1rem,5vw,6rem)] py-[clamp(2rem,6vw,5rem)] bg-[#f9f6f1] dark:bg-[#1D1D1D]">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.BoRLmDRm0F5roAFmMBuTawHaDx?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Happy Customers"
              className="rounded-lg object-cover shadow-lg w-[90%] md:w-[85%] max-w-[500px] h-auto"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-[clamp(0.8rem,2vw,1.5rem)] text-center md:text-left mt-[2rem] md:mt-0">
            <div className="flex justify-center md:justify-start items-center gap-2">
              <span className="text-[#a57c45]  text-sm tracking-wide font-medium uppercase">
                Happy Customers
              </span>
            </div>

            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] dark:text-white font-semibold text-[#111]">
              Our Customers Feedback
            </h2>

            <div className="flex justify-center md:justify-start flex-col items-center md:items-start">
              <div className="text-yellow-500 text-lg md:text-xl">★★★★★</div>
              <p className="text-gray-500 text-sm">(5/5)</p>
            </div>

            <h3 className="text-[clamp(1.1rem,3vw,1.8rem)] dark:text-white font-semibold text-[#111]">
              The best food ever
            </h3>

            <p className="text-gray-600 dark:text-white leading-relaxed text-[clamp(0.9rem,1.2vw,1rem)] max-w-[500px] mx-auto md:mx-0">
              “Targeting consultation discover apartments. Indulgence off under
              folly death wrote cause her way spite. Plan upon yet way get cold
              spot its week. Almost do am or limits hearts. Resolve parties but
              why she shewing.”
            </p>

            <hr className="border-gray-300 my-2 md:my-3" />

            <div className="flex flex-col items-center md:items-start">
              <p className="font-semibold text-[#111] text-[clamp(1rem,1.5vw,1.1rem)] dark:text-white">
                Matthew J. Wyman
              </p>
              <p className="text-sm text-[#a57c45]">Senior Consultant</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function FoodCard({ fimg }) {
  return (
    <div
      className="flex flex-col bg-gray-50 dark:bg-[#262525] shadow-md rounded-[1rem]
      w-[clamp(12rem,25vw,18rem)] overflow-hidden
      transition-transform duration-300 hover:scale-[1.03]"
    >
      <img
        src={fimg}
        className="w-full h-[clamp(8rem,15vw,12rem)] object-cover"
      />
      <div className="flex flex-col gap-[clamp(.5rem,1vw,2rem)] p-[clamp(.8rem,1vw,1.5rem)]">
        <h1 className="text-[clamp(1rem,1.5vw,2rem)] dark:text-white">Pizza Slice</h1>
        <p className="text-[clamp(.6rem,.9vw,1rem)] dark:text-white">
          Crispy cheese and tomato delight.
        </p>
        <button
          className="border-0 p-[clamp(0.5rem,.5vw,1rem)] text-[clamp(1rem,1vw,1.5rem)] dark:text-white bg-blue-300 rounded-md hover:bg-blue-400 transition"
          onClick={() => alert("Product Added to Cart")}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
