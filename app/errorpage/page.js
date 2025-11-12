import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import Imagesection from "@/components/imagesection";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Imagesection heading="Error Page" title="not-found" />

      <div>
        <div className="flex items-center mb-20 justify-center bg-white text-center px-4">
          <div>
            <h1 className="text-[120px] font-extrabold text-black">404</h1>
            <h2 className="text-2xl font-semibold mt-2">
              Sorry Page Was Not Found!
            </h2>
            <p className="text-gray-500 mt-4">
              Household shameless incommode at no objection behaviour.
              Especially do at he possession insensible sympathize boisterous
              it. Songs he on an widen me event truth.
            </p>
            <a
              href="/"
              className="inline-block mt-6 bg-yellow-700 text-white px-6 py-2 rounded hover:bg-yellow-800 transition"
            >
              Back To Homehi
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
