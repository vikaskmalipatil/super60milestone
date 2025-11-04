"use client";


export default function Shop({ img, category, name, price }) {
  const alerted = () => {
    alert("Item Added to Cart!");
  };


  return (
    <div className="bg-white dark:bg-[#262525] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 w-72 text-center flex flex-col items-center">
      <img
        src={img}
        alt={name}
        className="w-40 h-40 object-contain mx-auto mb-4"
      />
      <div className="text-[#8b6b39] uppercase text-xs tracking-widest mb-1">
        {category}
      </div>
      <div className="text-lg font-semibold text-black dark:text-white mb-2">
        {name}
      </div>
      <div className="mb-4 text-[#8b6b39] font-bold">{price}</div>

      <button onClick={alerted}
        className="border border-[#8b6b39] text-[#8b6b39] font-semibold px-5 py-2 rounded-full hover:bg-[#8b6b39] hover:text-white transition-all"
      >
        🛒 Add to Cart
      </button>
    </div>
  );
}
