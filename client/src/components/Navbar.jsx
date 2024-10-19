import { useState } from "react";
import Moon from "../assets/moon.webp"; // Replace with your actual path
import Sun from "../assets/sun.webp"; // Replace with your actual path

const Navbar = ({ switchTheme = () => {}, theme }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleNavItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowSidebar(false); // Close the sidebar on item click
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-[#e9eef5] text-[#9c27b0] h-28 sticky top-0 z-50 font-bold tracking-wide uppercase border-b-2 border-gray-300 shadow-lg px-16">
        {/* Mobile Menu Icon */}
        <div className="block lg:hidden flex items-center px-8">
          <button
            className="flex flex-col justify-between h-7 w-12 focus:outline-none"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <span className={`block h-1 w-full bg-[#9c27b0] transition-transform duration-300 ${showSidebar ? "transform rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-1 w-full bg-[#9c27b0] transition-opacity duration-300 ${showSidebar ? "opacity-0" : ""}`}></span>
            <span className={`block h-1 w-full bg-[#9c27b0] transition-transform duration-300 ${showSidebar ? "transform -rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Desktop and Mobile Name and Theme Icon */}
        <div className="flex items-center space-x-6">
          <span className="text-3xl md:text-4xl lg:hidden ml-auto">Sahil</span>
          <img
            src={theme === "Dark" ? Moon : Sun}
            alt="Theme icon"
            className="w-12 h-12 rounded-full p-1 cursor-pointer border-2 border-[#9c27b0]"
            onClick={switchTheme}
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 ml-auto">
          {["About", "Work", "Projects", "Skills", "Contact"].map((item) => (
            <p
              key={item}
              className="text-xl px-4 py-2 rounded-full cursor-pointer transition-all duration-700 ease-in-out hover:bg-[#ffffff] hover:text-[#9c27b0] hover:shadow-lg"
              onClick={() => handleNavItemClick(item.toLowerCase())}
            >
              {item}
            </p>
          ))}
        </div>
      </nav>

      {/* Sidebar for Mobile View */}
      <div className={`fixed top-28 left-0 h-[calc(100vh-80px)] w-64 bg-[#e9eef5] border-r-2 border-[#9c27b0] transition-transform duration-700 ${showSidebar ? "transform translate-x-0" : "transform -translate-x-full"}`}>
        <div className="flex flex-col items-center p-5 space-y-6">
          {["About", "Work", "Projects", "Skills", "Contact"].map((item) => (
            <p
              key={item}
              className="text-2xl text-[#9c27b0] font-bold px-4 py-2 rounded-full cursor-pointer transition-all duration-700 ease-in-out hover:bg-[#9c27b0] hover:text-[#ffffff] hover:shadow-lg"
              onClick={() => handleNavItemClick(item.toLowerCase())}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
