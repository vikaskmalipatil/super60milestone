"use client";

export default function Blogstandard({ standardblogs }) {
  return (
    <section className="bg-white dark:bg-[#262525] flex flex-col items-center justify-center ">
      {standardblogs.map((item, index) => (
        <div key={index} className="flex">
          <div className="relative mt-15  w-100 md:w-250 h-auto mb-10  rounded-xl shadow-lg  flex flex-col bg-white dark:bg-[#1D1D1D] ">
            <img src={item.img} alt={item.blogname} className="w-full md:w-250 h-100 md:h-135 rounded-xl " />
            <div className="px-8 mb-10">
            <div className="flex flex-row text-gray-500  gap-9 mt-8">
              <div>{item.date}</div>
              <div>{item.blogname}</div>
            </div>
            <div className="font-bold text-3xl mt-4">{item.title}</div>
            <div className="mt-6 text-gray-500 ">{item.content}</div>
            <button class="bg-[#836744]  text-white font-medium  mt-8 h-12 w-30 rounded-full hover:bg-[#6f5738] ">
              Read More
            </button>
          </div>
          </div>
        </div>
      ))}
    </section>
  );
}
