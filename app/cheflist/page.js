import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { chefs } from "@/data/cheflistdata";

import Imagesection from "@/components/imagesection";
import Chefdetails from "@/components/chefdetails";
//import { useState } from "react";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Imagesection heading="Restaurant Chef" title="chef" />

      <Chefdetails chefs={chefs} no={6} />

      <Footer />
    </div>
  );
}
