"use client";

export default function BookTable() {
  return (
    <section className="bg-white dark:bg-[#262525] py-16 px-6 md:px-20">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Book A Table
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-black dark:text-white  mb-2">
              Phone
            </label>
            <input
              name="phone"
              placeholder="+4733378901"
              className="w-full border border-black bg-white text-black rounded-md px-4 py-3 "
            />
          </div>

          <div>
            <label className="block text-black dark:text-white  mb-2">
              Person
            </label>
            <select className="w-full border border-black rounded-md px-4 py-3 bg-white text-black">
              <option >Select Person</option>
              <option >1 Person</option>
              <option>2 Person</option>
              <option>3 Person</option>
              <option >4 Person</option>
              <option>5+ Person</option>
            </select>
          </div>
          <div>
            <label className="block text-white dark:text-white  mb-2">
              Date
            </label>
            <div className="flex items-center bg-white text-black border border-black  rounded-md ">
              <input
                type="date"
                name="date"
                className="flex-1 px-4 py-3"
              />
         
            </div>
          </div>

          <div>
            <label className="block text-black mb-2 dark:text-white  ">
              Time
            </label>
            <select
              name="time"
              className="w-full border border-black rounded-md px-4 py-3 bg-white text-black"
            >
              <option >Select Time</option>
              <option>10:00 AM</option>
              <option >12:00 PM</option>
              <option >2:00 PM</option>
              <option >6:00 PM</option>
              <option >8:00 PM</option>
            </select>
          </div>

          <button className="bg-[#8b6b39] hover:bg-[#6d522e] text-white font-semibold py-3 px-10 rounded-md transition w-full md:w-auto">
            Book A Table
          </button>
        </form>
      </div>
    </section>
  );
}
