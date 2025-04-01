import { Menu, X, Phone, Settings, Briefcase, MessageSquare } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Contact" },
    { name: "Service" },
    { name: "Work" },
    { name: "Testimonials" },
  ];

  return (
    <header className="!sticky top-0 left-0 right-0 !z-[150000] flex justify-center">
      <nav
        className={`relative flex items-center justify-between w-full max-w-4xl !px-4 !py-2  mx-4 mt-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg ${
          isOpen ? "rounded-2xl" : "rounded-full"
        } transition-all duration-300`}
      >
        {/* Dummy Logo */}
        <div className="flex items-center justify-center w-[100px] h-10 text-white bg-indigo-500 rounded-full">
          <span className="font-bold">ASR NOVA</span>
        </div>

        {/* Desktop Navigation */}
        <div className=" flex justify-between w-[50%]  md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center  text-sm font-medium text-white transition-colors rounded-full hover:bg-white/20"
            >
              <span className="ml-2">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-white rounded-full md:hidden hover:bg-white/20 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute left-0 right-0 flex flex-col p-4 mt-12 space-y-2 bg-white/5 backdrop-blur-lg rounded-xl md:hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center px-4 py-3 text-sm font-medium text-white transition-colors rounded-lg hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                <span className="ml-3">{item.name}</span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};