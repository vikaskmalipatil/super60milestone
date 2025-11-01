export default function Imagesection({ heading, title }) {
  return (
    <div>
      <div className="relative  bg-black w-full h-[350px] md:h-[500px]">
        <img
          src="https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=vrMzS4pY_QjiDtCzpVE3ClKqbU636fb4CKH0nlsduC4="
          alt="Food"
          className="w-full h-full object-cover object-bottom opacity-70"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">{heading}</h1>
          <p className="mt-4 text-lg">Home → {title}</p>
          <a href="/exploremenue">
            <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-full font-semibold">
              Order Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
