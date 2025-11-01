import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Imagesection from "@/components/imagesection";
import BookTable from "@/components/reservationtable";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Imagesection heading="Online Reservation" title="reservation" />

      <section className="bg-white dark:bg-[#1D1D1D] py-25 px-8 flex flex-col md:flex-row items-center md:items-start gap-10 relative">
        <div className="relative md:absolute mt-10 md:mt-40 w-full md:w-190">
          <div className="relative w-full h-150 overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1&loop=1&playlist=F3zw1Gvn4Mk"
              title="Restaurant video"
            ></iframe>
          </div>
        </div>

        <div className="relative mt-10 md:mt-0 md:ml-150 bg-white rounded-xl shadow-lg">
          <BookTable />
        </div>
      </section>

      <Footer />
    </div>
  );
}
