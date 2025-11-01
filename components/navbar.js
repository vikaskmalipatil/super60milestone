// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//     <nav className="flex  items-center md:items-center justify-between px-12 py-6 bg-white dark:bg-[#262525] shadow-md">
//       {/* Logo */}
//   <div className="flex justify-center w-full md:w-auto">
//   {/* ✅ Light Mode Logo */}
//   <img
//     src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=1920&q=75"
//     alt="Light Logo"
//     className="h-12 dark:hidden" // visible only in light mode
//   />

//   {/* ✅ Dark Mode Logo */}
//   <img
//     src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
//     alt="Dark Logo"
//     className="h-12 hidden dark:block" // visible only in dark mode
//   />
// </div>

//       {/* Navigation Links */}
//       <div className="hidden md:flex gap-10  text-black dark:text-white font-medium relative">
//         <Link href="/" className="hover:text-red-500 cursor-pointer">
//           Home ▾
//         </Link>

//         {/* Pages Dropdown */}
//         <div
//           className="relative"
//           onMouseEnter={() => setOpenDropdown("pages")}
//           onMouseLeave={() => setOpenDropdown(null)}
//         >
//           <span className="hover:text-red-500 cursor-pointer">Pages ▾</span>

//           {openDropdown === "pages" && (
//             <div className="absolute top-6 left-0 bg-white shadow-lg rounded-md w-48 py-2 z-20">
//               {[
//                 "AboutUs",
//                 "ChefList",
//                 "ExploreMenue",
//                 "Reservation",
//                 "Register",
//                 "Login",
//               ].map((item, index) => (
//                 <Link
//                   key={index}
//                   href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
//                   className="block px-4 py-2 hover:bg-gray-100 text-black"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>

//         <Link href="/menu" className="hover:text-red-500 cursor-pointer">
//           Menu ▾
//         </Link>
//         <Link href="/blog" className="hover:text-red-500 cursor-pointer">
//           Blog ▾
//         </Link>
//         <Link
//           href="/exploremenue"
//           className="hover:text-red-500 cursor-pointer"
//         >
//           Shop ▾
//         </Link>
//       </div>

//       {/* Cart + Reservation Button */}
//       <div className="flex items-center gap-6">
//         <Link href="/cartpage">
//           <button className="relative">
//             <div className="bg-black text-white p-3 rounded-full" />
//             <span className="absolute -top-1 -right-1 bg-[brown] text-white text-xs rounded-full px-1">
//               1
//             </span>
//           </button>
//         </Link>

//         <Link href="/reservation">
//           <button className="bg-[brown] hidden md:flex text-white font-semibold py-3 px-10 rounded-full hover:opacity-90 transition">
//             Reservation
//           </button>
//         </Link>

//         <a href="/profile">
//           <button className="bg-[brown] text-white font-semibold py-3 px-3 rounded-full hover:opacity-90 transition">
//             Profile
//           </button>
//         </a>
//         <button
//             onClick={() => setIsOpen(true)}
//             className="md:hidden text-2xl"
//           >
//             ☰
//           </button>

//       </div>
//     </nav>

//     {isOpen && (
//         <div className="fixed inset-0 z-50">
//           {/* Background Overlay */}
//           <div
//             className="absolute inset-0 bg-black opacity-50"
//             onClick={() => setIsOpen(false)}
//           ></div>

//           {/* Sidebar - Sliding from Left */}
//           <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-6 transform translate-x-0 transition-transform duration-300">
//             <button
//               className="text-xl self-end"
//               onClick={() => setIsOpen(false)}
//             >
//               ✖
//             </button>

//             <Link href="/" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-500">Home</Link>
//             <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-500">About</Link>
//             <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-500">Contact</Link>
//             <Link href="/login" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-500">Login</Link>
//             <Link href="/register" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-500">Register</Link>
//           </div>
//         </div>

//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // ✅ FIXED

  return (
    <>
      <nav className="flex items-center justify-between px-12 py-6 bg-white dark:bg-[#262525] shadow-md">
        <div className="flex justify-center w-full md:w-auto">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=1920&q=75"
            alt="Light Logo"
            className="h-12 dark:hidden"
          />

          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            alt="Dark Logo"
            className="h-12 hidden dark:block"
          />
        </div>

        <div className="hidden md:flex gap-10 text-black dark:text-white font-medium relative">
          <Link href="/" className="hover:text-red-500">
            Home ▾
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("pages")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span className="hover:text-red-500 cursor-pointer">Pages ▾</span>

            {openDropdown === "pages" && (
              <div className="absolute top-6 left-0 bg-white shadow-lg rounded-md w-48 py-2 z-20">
                {[
                  "AboutUs",
                  "ChefList",
                  "ExploreMenue",
                  "Reservation",
                  "Register",
                  "Login",
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="block px-4 py-2 hover:bg-gray-100 text-black"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/menu" className="hover:text-red-500">
            Menu ▾
          </Link>
          <Link href="/blog" className="hover:text-red-500">
            Blog ▾
          </Link>
          <Link href="/exploremenue" className="hover:text-red-500">
            Shop ▾
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/cartpage">
            <button className="relative">
              <div className="bg-black text-white p-3 rounded-full" />
              <span className="absolute -top-1 -right-1 bg-[brown] text-white text-xs rounded-full px-1">
                1
              </span>
            </button>
          </Link>

          <Link href="/reservation">
            <button className="bg-[brown] hidden md:flex text-white font-semibold py-3 px-10 rounded-full hover:opacity-90 transition">
              Reservation
            </button>
          </Link>

          <Link href="/profile">
            <button className="bg-[brown] text-white font-semibold py-3 px-3 rounded-full hover:opacity-90 transition">
              Profile
            </button>
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="absolute top-0 left-0 w-64 h-full bg-white dark:bg-black text-black dark:text-white p-6 flex flex-col gap-6">
            <button
              className="text-xl self-end"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            <Link href="/" onClick={() => setIsOpen(false)} className="text-lg">
              Home
            </Link>
            <Link
              href="/aboutus"
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              About Us
            </Link>
            <Link
              href="/cheflist"
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              Chef
            </Link>
            <Link
              href="/exploremenue"
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              Explore Menue
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              Contact
            </Link>
            <Link
              href="/reservation"
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              Reservation
            </Link>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
