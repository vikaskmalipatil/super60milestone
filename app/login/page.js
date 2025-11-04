"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Imagesection from "@/components/imagesection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Imagesection heading="Login Page" title="login" />
      <div className="flex flex-col items-center justify-center py-16 bg-gray-100 dark:bg-[#1D1D1D]">
        <div className="flex flex-col md:flex-row w-[80%] bg-white dark:bg-[#262525] shadow-xl rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 px-12 py-14">
            <h2 className="text-3xl font-semibold text-black dark:text-white">
              WELCOME <span className="text-yellow-600">BACK</span>
            </h2>
            <form className="mt-8 space-y-5">
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 bg-gray-100  text-black  rounded-md"
              />
              <input
                type="password"
                placeholder="Password*"
                className="w-full p-3 bg-gray-100 text-black  rounded-md"
              />
              <button className="w-full bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-3 rounded-md">
                LOGIN
              </button>
            </form>
            <div className="text-center mt-6 text-black dark:text-white font-medium">
              Or Login With
            </div>
            <div className="flex justify-center gap-5 mt-4">
              <button className="flex items-center gap-2 border text-black dark:text-white px-6 py-2 rounded-md hover:bg-gray-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  className="w-5 h-5"
                />
                Google
              </button>

              <button className="flex items-center gap-2 border text-black dark:text-white px-6 py-2 rounded-md hover:bg-gray-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111392.png"
                  className="w-5 h-5"
                />
                Facebook
              </button>
            </div>
            <div className="text-center mt-6">
              <span className="text-gray-600 dark:text-white ">
                Don't have any account?{" "}
              </span>
              <a
                href="/register"
                className="text-red-600 font-medium hover:underline"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
