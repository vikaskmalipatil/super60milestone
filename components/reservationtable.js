"use client";
import { useState } from "react";

export default function BookTable() {
  const [form, setForm] = useState({
    phone: "",
    person: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Table booked for ${form.person} on ${form.date} at ${form.time}`);
  };

  return (
    <section className="bg-white dark:bg-[#262525] py-16 px-6 md:px-20">
      <div className="max-w-md mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-10">
          Book A Table
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-white  mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+4733378901"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8b6b39]"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-white mb-2">
              Person
            </label>
            <select
              name="person"
              value={form.person}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#8b6b39]"
            >
              <option value="">Select Person</option>
              <option value="1 Person">1 Person</option>
              <option value="2 Person">2 Person</option>
              <option value="3 Person">3 Person</option>
              <option value="4 Person">4 Person</option>
              <option value="5+ Person">5+ Person</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 dark:text-white  mb-2">
              Date
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 focus:outline-none"
              />
              <div className="bg-[#8b6b39] text-white p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 dark:text-white  ">
              Time
            </label>
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#8b6b39]"
            >
              <option value="">Select Time</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#8b6b39] hover:bg-[#6d522e] text-white font-semibold py-3 px-10 rounded-md transition w-full md:w-auto"
          >
            Book A Table
          </button>
        </form>
      </div>
    </section>
  );
}
