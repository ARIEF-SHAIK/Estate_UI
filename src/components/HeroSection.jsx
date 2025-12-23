const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-[42%] bg-white lg:bg-gradient-to-r from-white to-purple-800 text-black py-16"></div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="text-black max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[3px] bg-[#9E2349]"></span>
              <p className="text-[#9E2349] text-sm font-medium">
                Welcome to the
              </p>
            </div>

            <h1 className="font-serif text-2xl sm:text-5xl lg:text-7xl ">
              Unprecedented <br />
              Era of <span className="text-[#9E2349]">Real Estate</span>
              <br />
              <span className="text-[#9E2349]">Investing</span>
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Lilypads uses sophisticated technologies for data-driven decisions
              in investing, managing and funding commercial real estate assets.
            </p>

            <button className="mt-8 bg-purple-700 hover:bg-purple-800 transition text-white px-6 py-3 rounded-xl font-medium hover:scale-110 transition duration-300 cursor-pointer">
              Start Investing Now →
            </button>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
              <div>
                <p className="text-purple-700 text-3xl font-bold">658+</p>
                <p className="text-sm text-gray-500">Properties Registered</p>
              </div>
              <div>
                <p className="text-purple-700 text-3xl font-bold">685+</p>
                <p className="text-sm text-gray-500">Deals Cracked</p>
              </div>
              <div>
                <p className="text-purple-700 text-3xl font-bold">255+</p>
                <p className="text-sm text-gray-500">Investors</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-8 lg:gap-10 mt-10 lg:mt-0">
            <img
              src="/mobile1.png"
              className="w-[200px] sm:w-[240px] lg:w-[320px] drop-shadow-2xl"
              alt="mobile1"
            />
            <img
              src="/mobile2.png"
              className="w-[200px] sm:w-[240px] lg:w-[260px] drop-shadow-2xl"
              alt="mobile2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
