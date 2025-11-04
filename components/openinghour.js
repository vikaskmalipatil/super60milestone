export default function Openinghour(){
    return(
        <div>
            <section className="bg-white dark:bg-[#1D1D1D] flex flex-col py-25 px-8">
          <div className="relative md:absolute mt-20 w-full md:w-190">
            <div className="w-full h-64 md:h-96  rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1&loop=1&playlist=F3zw1Gvn4Mk"
                title="Restaurant video"
              ></iframe>
            </div>
          </div>

          <div className="relative md:ml-150 bg-white dark:bg-[#262525] rounded-xl shadow-lg p-10 w-full md:w-160 h-100">
            <h3 className="text-[#8b6b39] dark:text-white uppercase font-semibold text-4xl mb-2 flex items-center gap-2">
              Opening Hour
            </h3>
            <div className="text-l font-bold mb-4 text-gray-900 dark:text-white">
              A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Sunday To Tuesday:
                </span>
                <span className="text-gray-900 dark:text-white font-medium">
                  10:00 - 09:00
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Wednesday To Thursday:
                </span>
                <span className="text-gray-900 dark:text-white font-medium">
                  11:30 - 10:30
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Friday & Saturday:
                </span>
                <span className="text-gray-900 dark:text-white font-medium">
                  10:30 - 12:00
                </span>
              </div>
            </div>

            <div className="flex items-center mt-10 gap-4">
              <div className="bg-[#8b6b39] p-4 rounded-full"></div>
              <div>
                <p className="text-gray-600 dark:text-white text-sm">
                  Call Anytime
                </p>
                <p className="text-gray-900 dark:text-white font-bold text-lg">
                  +964733-378901
                </p>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}