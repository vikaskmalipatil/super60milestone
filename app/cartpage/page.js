"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Imagesection from "@/components/imagesection";
import { chefs } from "@/data/cheflistdata";

export default function CartPage() {
 

  return (
    <div>
      <Navbar />
      <Imagesection heading="Your Cart" title="Cart" />
      

      <Footer />
    </div>
  );
}
