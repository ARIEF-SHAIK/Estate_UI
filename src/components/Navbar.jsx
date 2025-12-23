import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    "Home",
    "Network",
    "Product",
    "Technology",
    "Our Story",
    "Knowledge Center",
  ];

  return (
    <header className="w-full bg-gradient-to-r from-white via-purple-100 to-purple-700 h-20 sticky top-0 z-50">
      <nav className="max-w-[1300px] mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-1 cursor-pointer size-15">
          <img src="/logo.png" alt="" />
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <li
              key={link}
              className={`group cursor-pointer flex flex-col items-center ${
                index === 0 ? "text-purple-700" : "text-black"
              }`}
            >
              <span className="transition-colors group-hover:text-purple-700">
                {link}
              </span>
              
              {index === 0 && (
                <span className="h-2 w-2 rounded-full bg-purple-700 mt-1 scale-0 group-hover:scale-100 transition-all"></span>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-5 py-2 border border-white text-white rounded-xl hover:bg-white hover:text-purple-700 transition cursor-pointer font-bold">
            Contact Us
          </button>

          <button className="px-5 py-2 bg-white text-purple-700 rounded-xl hover:bg-purple-800 hover:text-white transition cursor-pointer font-bold">
            Log In
          </button>
        </div>

        <button className="lg:hidden text-2xl text-purple-800">☰</button>
      </nav>
    </header>
  );
};

export default Navbar;
