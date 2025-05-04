import {
  Menu,
  X,
  Phone,
  Settings,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@assets/logo.png";
import { AnimatedModalDemo } from "../../pages/home/components/chat/model.tsx";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Service" },
    { name: "Work" },
    { name: "Testimonials" },
    { name: "Contact" },
    { name: "Chat Support" },
  ];

  // Animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="flex items-center rounded-3xl justify-between w-full max-w-5xl mx-auto !px-4 !py-2 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-[120px] md:w-[150px]" src={Logo} alt="ASRNOVA" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center !space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase().replace(" ", "-")}`}
              className="flex items-center !px-3 !py-2 text-sm font-medium text-white transition-colors rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-200"
            >
              <span className="ml-2">
                {item.name === "Chat Support" ? (
                  <AnimatedModalDemo />
                ) : (
                  item.name
                )}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-white rounded-full md:hidden hover:bg-white/20 focus:outline-none transition-all duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
          ) : (
            <Menu className="w-6 h-6 transition-transform duration-300" />
          )}
        </button>

        {/* Mobile Navigation with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="absolute h-[100vh] top-full left-0 right-0 w-full flex flex-col p-4 space-y-2 bg-gray-900/95 backdrop-blur-lg border-t border-white/20 md:hidden"
            >
              <div className="flex flex-col h-[60%] justify-evenly">
                {navItems.map((item) =>
                  item.name === "Chat Support" ? (
                    <div key={item.name} onClick={() => setIsOpen(true)}>
                      <AnimatedModalDemo />
                    </div>
                  ) : (
                    <motion.a
                      key={item.name}
                      href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center px-4 py-3 text-sm font-medium text-white transition-colors rounded-lg hover:bg-white/20"
                      onClick={() => setIsOpen(false)}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="ml-3">{item.name}</span>
                    </motion.a>
                  )
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header >
  );
};
