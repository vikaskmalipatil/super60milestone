"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      router.push("/login");
    }
    setEmail(storedEmail);
  }, [router]);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center py-20 bg-gray-100 min-h-screen">
        {/* Profile Card */}
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-[90%] sm:w-[60%] md:w-[40%] text-center">
          <h2 className="text-4xl font-bold text-gray-800">My Profile</h2>

          <div className="mt-6 text-lg">
            <p className="text-gray-600">Email</p>
            <p className="font-semibold text-gray-900 border-b pb-2">{email}</p>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => {
              localStorage.removeItem("email");
              localStorage.removeItem("password");
              alert("Logged Out!");
              router.push("/login");
            }}
            className="bg-red-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-red-700 transition mt-8"
          >
            Logout
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
