"use client";

export default function Chefdetails({ chefs, no }) {
  return (
    <section className="bg-[#f5f3f0] dark:bg-[#262525] flex flex-col items-center justify-center py-16">
      <div className="text-[#8b6b39] font-bold text-lg">MASTER CHEFS</div>
      <div className="text-3xl font-bold text-black dark:text-white mt-2 mb-12 text-center">
        Meet Our Special Chefs
      </div>

      <div className="grid grid-rows md:grid-cols-3 gap-10 justify-items-center">
        {chefs.slice(0, no).map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-56 h-56 rounded-full border-[6px] border-gray-400 flex items-center justify-center bg-white shadow-md">
              <img
                src={item.img}
                alt={item.name}
                className="w-48 h-48 object-cover rounded-full border-[4px] border-gray-300"
              />
            </div>

            <div className="relative -mt-6 bg-[#7a633b] text-white py-3 px-10 font-semibold text-lg text-center clip-banner w-64">
              <div>{item.name}</div>
              <div className="text-sm font-light uppercase">
                {item.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
