"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { foods } from "@/data/fooddata";
import Imagesection from "@/components/imagesection";
import Shop from "@/components/shop";


export default function ShopPage() {
  

  return (
    <div>
      <Navbar />
      <Imagesection heading="Special Food" title="Shop" />

      <div className="py-20 px-10 grid grid-cols-1  md:grid-cols-4 gap-6 bg-white dark:bg-[#1D1D1D]">
        {foods.map((item, index) => (
          <Shop
            key={index}
            img={item.img}
            category={item.category}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
