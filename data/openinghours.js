"use client";

export default function OpeningHours() {
  const hours = [
    { day: "Saturday", time: "6.00 am - 12.00 pm" },
    { day: "Sunday", time: "8.30 am - 11.00 pm" },
    { day: "Monday", time: "9.00 am - 10.30 pm" },
    { day: "Tuesday", time: "8.00 am - 12.00 pm" },
    { day: "Wednesday", time: "9.45 am - 10.00 pm" },
    { day: "Thursday", time: "8.15 am - 12.00 pm" },
    { day: "Friday", time: "Closed", closed: true },
  ];

  return (
    <div className="flex justify-center items-center w-full md:w-1/2 bg-[#ab7f40] py-10">
      <div className="text-white w-[90%] md:w-[80%]">
        <h2 className="text-[clamp(1rem,2rem,2.5rem)] font-semibold mb-6 text-center">Opening Hours</h2>

        <div className="flex flex-col gap-1">
          {hours.map((item) => (
            <div
              key={item.day}
              className="flex justify-between items-center border-b border-gray-300 py-2"
            >
              <span className=" text-white px-2 py-1 rounded-sm w-[40%] md:w-[35%] text-right font-semibold">
                {item.day} :
              </span>

              {item.closed ? (
                <span className="bg-white text-black px-4 py-1 rounded-full font-semibold">
                  Closed
                </span>
              ) : (
                <span className=" text-white px-2 py-1 rounded-sm w-[60%] text-center">
                  {item.time}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}