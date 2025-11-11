"use client";
export function Foodcard({ title, imgsrc }) {
  return (
    <div className="flex flex-col justify-between items-center  ">
      <div className="rounded-[6rem] m-1 bg-white ">
        <img
          src={imgsrc}
          width="200vh"
          height="200vh"
          className="rounded-4xl p-[1.8em]"
        />
      </div>
      <div className="bg-white  rounded-2xl h-[25rem] w-[20rem] flex flex-col justify-center items-center gap-[2em]">
        <h2 className="text-black text-[2rem]">{title}</h2>
        <div className="text-gray-500 flex flex-col gap-[.8em]">
          <p>Breakfast casserole ---------- $5 - $20</p>
          <p>Greek yogurt ---------- $8 - $14</p>
          <p>Cottage cheese ---------- $15 - $20</p>
        </div>
        <button className="rounded-[2rem] text-black bg-yellow-600 p-[1em]">
          Make Order
        </button>
      </div>
    </div>
  );
}

export function MenuCard({ Mtitle, Mimgsrc }) {
  return (
    <div className="max-w-[18rem] bg-white dark:bg-[#262525] rounded-2xl shadow-md overflow-hidden">
      <img
        src={Mimgsrc}
        alt={Mtitle}
        className="w-full h-[10em] object-cover"
      />
      <div className="text-black  dark:text-white flex flex-col justify-center items-center p-4">
        <h3 className="text-xl font-semibold mb-2">{Mtitle}</h3>
        <p className="text-sm text-center mb-4 text-gray-500">
          Resolve parties but why is she shewing. She sang now know.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <p className="text-base font-medium">Price: $12</p>
          <button className="w-8 h-8">
            <img
              src="https://st3.depositphotos.com/29384342/34148/i/1600/depositphotos_341489994-stock-photo-cart-button-shopping-cart-button.jpg"
              alt="Add to cart"
              className="w-full h-full rounded-full object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export function Blogs({ Bimgsrc, Btext, date, month }) {
  return (
    <div className="relative w-[28rem] bg-white dark:bg-[#262525]  overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={Bimgsrc}
          alt="Blog Image"
          className="w-full h-[16rem] object-cover"
        />

        <div className="absolute bottom-0 right-0 bg-[#7b6a47] text-white text-center px-3 py-2">
          <p className="text-xl font-bold ">{date}</p>
          <p className="text-sm">{month}</p>
        </div>
      </div>

      <div className="p-6 ">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase text-gray-400  dark:text-white mb-2">
          <span>By Md Sohag</span>
          <span className="text-gray-400">•</span>
          <span>Burger, Food</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900  dark:text-white leading-snug mb-4 text-left">
          {Btext}
        </h3>

        <div className="text-sm font-semibold text-gray-600  dark:text-white flex items-center gap-1">
          <span>Read more</span>
          <span>↗</span>
        </div>
      </div>
    </div>
  );
}
export function DesignBlock({ text1, text2 }) {
  return (
    <div className="bg-black  border-1 border-gray-400 px-[2rem] py-[5rem] rounded-b-full rounded-t-full">
      <h1 className="text-4xl font-bold pb-[.25em]">{text1}</h1>
      <h1 className="text-[1em] font-bold pt-[.25em]">{text2}</h1>
    </div>
  );
}
