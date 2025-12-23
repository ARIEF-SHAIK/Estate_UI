const AboutSection = () => {
  return (
    <section className="w-full bg-[#f6f6f8] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2">

          {/* 1 - Top Left */}
          <div className="p-10 border-r border-b border-gray-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#9E2349] h-1 w-6"></span>
              <p className="text-[#9E2349] font-semibold">About Us</p>
            </div>

            <h2 className="text-2xl font-serif font-semibold leading-tight">
              Lilypad is the only Real
              <br />
              Estate Investment tool
              <br />
              you need for your
              <br />
              business
            </h2>
          </div>

          {/* 2 - Top Center */}
          <div className="p-10 border-r border-b border-gray-300">
            <img src="/about1.png" className="w-16 mb-4 hover:scale-110 transition duration-300 cursor-pointer" />
            <h3 className="font-semibold mb-2">
              Become a Data-Driven
              <br />
              Investor
            </h3>
            <p className="text-sm text-gray-600">
              Lilypads is the cloud-based real estate investment platform that
              helps you make data-driven investment decisions and assists with reaching your long term investment objectives.
            </p>
          </div>

          {/* 3 - Top Right */}
          <div className="p-10 border-b border-gray-300">
            <img src="/about2.png" className="w-16 mb-4 hover:scale-110 transition duration-300 cursor-pointer" />
            <h3 className="font-semibold mb-2">
              Lilypads can help you
              <br />
              make smarter decisions.
            </h3>
            <p className="text-sm text-gray-600">
              Streamline your investment evaluation process and collaborate in
              reaching your long term investment objectives.
            </p>
          </div>

          {/* 4 - Bottom Left */}
          <div className="p-10 border-r border-gray-300">
            <img src="/about3.png" className="w-16 mb-4 hover:scale-110 transition duration-300 cursor-pointer" />
            <h3 className="font-semibold mb-2">Manager Due Diligence</h3>
            <p className="text-sm text-gray-600">
              Evaluate managers against your objectives using traditional risk
              metrics with the addition of factor analysis. All it takes is a set of returns
            </p>
          </div>

          {/* 5 - Bottom Center */}
          <div className="p-10 border-r border-gray-300">
            <img src="/about4.png" className="w-16 mb-4 hover:scale-110 transition duration-300 cursor-pointer" />
            <h3 className="font-semibold mb-2">Optimize Asset Allocation</h3>
            <p className="text-sm text-gray-600">
              Understand the underlying risk drivers in your portfolio using the Lilypads analysis factors and then optimize that portfolio based on objectives
            </p>
          </div>

          {/* 6 - Bottom Right */}
          <div className="p-10">
            <img src="/about5.png" className="w-16 mb-4 hover:scale-110 transition duration-300 cursor-pointer" />
            <h3 className="font-semibold mb-2">Our Subscribers</h3>
            <p className="text-sm text-gray-600">
              Serving a constellation of global subscribers Pension funds, Funds of Funds, Banks, Family offices, Asset managers, Wealth Managers
            </p>
          </div>

        </div>

        {/* MOBILE */}
        <div className="md:hidden space-y-10">
          {/* your mobile layout */}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;