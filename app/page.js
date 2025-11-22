import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { chefs } from "@/data/cheflistdata";
import Chefdetails from "@/components/chefdetails";
import BookTable from "@/components/reservationtable";
import OpeningHours from "@/data/openinghours";
import { Foodcard, MenuCard, Blogs, DesignBlock } from "@/components/home";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="bg-[url('https://restan-nextjs.vercel.app/assets/img/banner/13.jpg')] bg-cover bg-center min-h-[80vh] w-full flex flex-col text-white">
        <div className="w-full flex flex-row justify-around items-center px-6 py-4 gap-2 sm:gap-4 bg-black/30">
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.ISLGO3iVX6Nrqoth3x6HEwHaHw?pid=Api&P=0&h=180"
              alt="Phone"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-sm md:text-base">Phone: +47 3337 8901</span>
          </div>
          <div>
            <hr />
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.ISLGO3iVX6Nrqoth3x6HEwHaHw?pid=Api&P=0&h=180"
              alt="Email"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-sm md:text-base">
              Email: 123fake@gmail.com
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center flex-grow mb-8 gap-6 text-center px-4">
          <p className="text-[32px] md:text-[48px] font-extrabold drop-shadow-lg">
            Luxuries Food
          </p>

          <ul className="flex flex-row justify-center gap-8 text-lg md:text-2xl font-semibold">
            <li>Foods</li>
            <li>Drinks</li>
            <li>Party</li>
          </ul>
        </div>
      </div>

      <div className="flex w-full bg-white dark:bg-[#1D1D1D] relative flex-col md:flex-row ">
        <div className="flex justify-center items-center w-full md:w-1/2">
          <div className=" font-bold mb-4 text-black py-10">
            <BookTable />
          </div>
        </div>
        <div className="flex justify-center items-center absolute inset-0  ">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fabout%2F4.jpg&w=828&q=75"
            alt="restuarnt_image"
            className="w-1/5 rounded-2xl shadow-xl object-cover z-20 md:w-[clamp(30em,50em,80em) md:h-[clamp(10em,25em,50em)] hidden md:flex"
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 bg-[#8b6b3e]  ">
          <div className=" font-bold my-4 text-black py-10">
            <OpeningHours />
          </div>
        </div>
      </div>

      <div className="bg-[url('https://img.freepik.com/premium-photo/herbs-spices-various-seasonings-herbs-spices-graphite-black-background-top-view-place-text-free-space_262193-1679.jpg')] bg-cover bg-center flex flex-row flex-wrap justify-around items-center min-h-[80vh] gap-[1em]">
        <Foodcard
          title="Breakfast"
          imgsrc="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=640&q=75"
        />
        <Foodcard
          title="Lunch"
          imgsrc="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F13.png&w=640&q=75"
        />
        <Foodcard
          title="Dinner"
          imgsrc="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=640&q=75"
        />
      </div>

      <div className="flex flex-col sm:flex-row bg-white dark:bg-[#1D1D1D] ">
        <div className="relative w-[95%] px-12 h-[40rem] bg-white dark:bg-[#1D1D1D] flex justify-center items-center p-[1.5em]">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fabout%2F5.jpg&w=640&q=75"
            alt="Waiter serving food"
            className="w-[100%] h-[70%] object-cover rounded-md"
          />

          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F7.jpg&w=828&q=75"
            alt="Seafood dish"
            className="absolute bottom-[5%] right-[8%] w-[50%] h-[35%] object-cover rounded-md shadow-lg"
          />
        </div>
        <div>
          <div className="w-[60%] mx-auto py-[5rem] flex flex-col gap-[1rem] h-auto">
            <div>
              <h3 className="text-[1rem] text-gray-700 dark:text-white tracking-widest font-medium flex items-center gap-[0.5em]">
                <span className="text-[#9b7b43]">WELCOME AT</span>
                <span className="w-[3em] h-[1px] bg-[#9b7b43] inline-block"></span>
              </h3>
              <h2 className="text-[3rem] font-bold text-black dark:text-white  leading-tight mt-[0.5em]">
                Restan Restaurant
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] text-gray-600 dark:text-white  text-[1rem] leading-relaxed">
              <p>
                Codulgence diminution so discovered mr apartments. Are off under
                folly death wrote cause her way spite. Plan upon yet way get
                cold spot its week. Almost do am or limits hearts. Resolve
                parties but why she shewing. She sang know now.
              </p>
              <p>
                Bndulgence diminution so discovered mr apartments. Are off under
                folly death wrote cause her way spite. Plan upon yet way get
                cold spot its week. Almost do am or limits hearts. Resolve
                parties but why she shewing. She sang know now.
              </p>
            </div>

            <div className="mt-[2em]">
              <a href="/menue">
                <button className="bg-[#9b7b43] text-white font-medium py-[0.9em] px-[2.2em] rounded-md hover:bg-[#8a6d3d] transition-colors">
                  Explore Menu
                </button>
              </a>
            </div>

            <div className="flex items-center gap-[1.5em] mt-[3em]">
              <div className="w-[4.5rem] h-[4.5rem] rounded-full overflow-hidden">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=1920&q=75"
                  alt="Owner"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h4 className="text-[1.3rem] font-semibold text-black dark:text-white ">
                  Mendia Juxef
                </h4>
                <p className="text-[#9b7b43] uppercase tracking-widest text-[0.9rem]">
                  Restaurant Owner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-[2.5em]">
        <div className="text-4xl font-bold mb-2">Our Special Menu</div>
        <p className="text-lg text-gray-700 mb-6">Come, let's Eat Together</p>

        <div className="flex flex-row justify-around flex-wrap gap-6">
          <MenuCard
            Mtitle="Burger"
            Mimgsrc="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2F1.jpg&w=640&q=75"
          />
          <MenuCard
            Mtitle="Buratta Sandwitch"
            Mimgsrc="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2F3.jpg&w=640&q=75"
          />
          <MenuCard
            Mtitle="Grilled Flank Steak"
            Mimgsrc="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2F2.jpg&w=640&q=75"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-20 py-16 bg-white dark:bg-[#1D1D1D] relative">
        <div className="flex flex-col relative w-full lg:w-1/2 justify-center items-center">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=640&q=75"
            alt="Grilled Steak Platter"
            className="rounded-full shadow-lg w-[80%] max-w-[450px]"
          />

          <div className=" sm:absolute bottom-4 right-8 bg-white dark:bg-[#262525] rounded-3xl shadow-lg p-6 w-[clamp(3em,15em,20em)]">
            <h3 className="text-xl font-semibold mb-2">
              Grilled Steak Platter
            </h3>

            <div className="flex text-yellow-500 mb-3">
              <span>★★★★☆</span>
            </div>

            <ul className="text-gray-600 dark:text-white text-sm space-y-1 mb-4">
              <li>• Steak</li>
              <li>• Baguette</li>
              <li>• Spanish Onion</li>
              <li>• Salt & Pepper</li>
            </ul>

            <div className="flex items-center gap-2 text-lg">
              <span className="line-through text-gray-400">$14.00</span>
              <span className="text-[#7b6a47] font-bold">$12.00</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="uppercase text-[#7b6a47] font-semibold tracking-wider mb-3">
            Daily Offer
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-snug mb-6">
            Grab This Deal <br /> Before It Finished
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            New had happen unable uneasy. Drawings can followed improved out
            sociable not. Earnestly so do instantly pretended. See general few
            civilly amiable pleased account carried. Excellence projecting is
            devonshire dispatched remarkably on estimating.
          </p>
          <a href="/exploremenue">
            <button className="flex items-center justify-center gap-2 bg-[#7b6a47] text-white px-6 py-3 rounded-md hover:bg-[#6b5a3d] transition mx-auto lg:mx-0">
              Order Now
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center gap-[1em] py-[5rem]  dark:hidden">
        <DesignBlock text1="18+" text2="Awards Won" />
        <DesignBlock text1="12K" text2="Daily Orders" />
        <DesignBlock text1="12M" text2="Trusted Users" />
        <DesignBlock text1="100+" text2="Menu & Dish" />
      </div>
      <Chefdetails chefs={chefs} no={3} />

      <div className="flex flex-col items-center text-center bg-white dark:bg-[#1D1D1D] px-4 sm:px-6 lg:px-20 py-10 ">
        <div className="flex items-center text-[#7b6a47] font-semibold text-sm sm:text-base md:text-[1.5em] mt-4">
          <span className="border-t border-[#7b6a47] w-6 sm:w-8 mr-3" />
          NEWS & BLOG
          <span className="border-t border-[#7b6a47] w-6 sm:w-8 ml-3" />
        </div>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-[3rem] font-bold text-[#1a1a1a] dark:text-white mb-6">
          Our Latest News &amp; Blog
        </h2>

        <div className="mt-2 flex w-full flex-col md:flex-row md:justify-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <Blogs
              Bimgsrc="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=828&q=75"
              Btext="Picked up a Brussels burger Sprouts with ham"
              date="10"
              month="DEC"
            />
          </div>

          <div className="w-full md:w-1/2">
            <Blogs
              Bimgsrc="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=828&q=75"
              Btext="This prefabricated passive house is highly sustainable"
              date="18"
              month="NOV"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
