

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between px-12 py-6 bg-white dark:bg-[#262525] ">
        <button className="md:hidden  left-0 text-2xl" onClick={() => setOpen(!open)}>☰</button>
        <div className="flex justify-center w-full md:w-20">
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
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className=" text-black dark:text-white flex items-center gap-1"
            >
              Pages ▾
            </button>

          
            
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
        {open && (
              <div className="absolute left-30 md:left-109 mt-80 w-52 bg-white text-black  shadow-lg rounded-lg z-20">
                <ul className="py-2">
                  <li className="px-4 py-2">
                    <Link href="/aboutus">About Us</Link>
                  </li>
                  <li className="px-4 py-2 ">
                    <Link href="/cheflist">Chef</Link>
                  </li>
                 
                  <li className="px-4 py-2 ">
                    <Link href="/reservation">Reservation</Link>
                  </li>
                 
                  <li className="px-4 py-2">
                    <Link href="/register">Register</Link>
                  </li>
                  <li className="px-4 py-2 ">
                    <Link href="/login">Login</Link>
                  </li>
                  <li className="px-4 py-2 ">
                    <Link href="/exploremenue">Explore menu</Link>
                  </li>
                  <li className="px-4 py-2 ">
                    <Link href="/contactus">Contact Us</Link>
                  </li>
                  
                </ul>
              </div>
            )}

        <div className="flex items-center gap-6">
          <Link href="/cartpage">
            <button className="relative bg-black text-white p-3 rounded-full"></button>
          </Link>

          <Link href="/reservation">
            <button className="bg-[brown] hidden md:flex text-white font-semibold py-3 px-10 rounded-full hover:opacity-90 transition">
              Reservation
            </button>
          </Link>

          
        </div>
        
      </nav>
    </div>
  );
}
