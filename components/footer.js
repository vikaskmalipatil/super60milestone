export default function Footer() {
  return (
    <div className="flex flex-col bg-white dark:bg-[#1D1D1D] items-center">
      <section className="relative z-10 w-full flex justify-center">
        <div
          className="bg-[#1a1a1a] text-white rounded-t-[30px] 
        flex flex-col md:flex-row justify-center items-center 
        w-full md:w-[1200px] h-auto md:h-[380px] py-10 px-6 md:px-12"
        >
          <div className="flex flex-col md:flex-row w-full justify-between gap-10">
            <div className="md:w-1/4 w-full md:pr-10 md:border-r border-gray-600">
              <div className="font-bold text-xl mb-4">About Us</div>
              <p className="text-sm leading-6">
                Continued at zealously necessary is surrounded sir motionless
                she end literature. Gay direction neglected.
              </p>
              <div className="flex gap-3 mt-5">
                <div className="bg-gray-700 p-2 rounded hover:bg-gray-600 cursor-pointer">
                  F
                </div>
                <div className="bg-gray-700 p-2 rounded hover:bg-gray-600 cursor-pointer">
                  T
                </div>
                <div className="bg-gray-700 p-2 rounded hover:bg-gray-600 cursor-pointer">
                  Y
                </div>
                <div className="bg-gray-700 p-2 rounded hover:bg-gray-600 cursor-pointer">
                  in
                </div>
              </div>
            </div>

            <div className="md:w-1/5 w-full">
              <div className="font-bold text-xl mb-4">Explore</div>
              {[
                "Company Profile",
                "About",
                "Help Center",
                "Career",
                "Features",
                "Contact",
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-sm py-1 hover:text-gray-400 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="md:w-1/5 w-full">
              <div className="font-bold text-xl mb-4">Contact Info</div>
              <p className="text-sm leading-6">
                175 10h Street, Office 375 <br /> Berlin, De 21562
              </p>
              <p className="text-sm py-2 leading-6">
                +123 34598768 <br /> +554 34598734
              </p>
              <p className="text-sm">food@restan.com</p>
            </div>

            <div className="md:w-1/4 w-full">
              <div className="font-bold text-xl mb-4">Newsletter</div>
              <p className="text-sm mb-4">
                Join our subscribers list to get the latest news and special
                offers.
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="bg-transparent border-b border-gray-600 w-full py-2 focus:outline-none"
                />
                <span className="absolute right-0 top-2 cursor-pointer">→</span>
              </div>
              <div className="flex items-center mt-3">
                <input type="checkbox" className="mr-2" />
                <span className="text-xs">
                  I agree to the{" "}
                  <span className="underline cursor-pointer">
                    Privacy Policy
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#141414] w-full py-10 md:py-16 px-6 md:px-20 -mt-10 md:-mt-16 text-gray-300 relative z-0">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto gap-4 md:gap-0">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            alt="Logo"
            className="h-12"
          />
          <div className="text-sm md:text-base">
            © Copyright 2025. Restan. All Rights Reserved
          </div>
        </div>
      </section>
    </div>
  );
}
