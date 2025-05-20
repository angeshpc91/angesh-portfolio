import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="font-bold text-xl text-brand-700 dark:text-brand-400"
            >
              Angesh Chettiar
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-between md:flex-1 md:ml-10">
            <div className="flex items-baseline space-x-4">
              <a
                href="#about"
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#education"
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                Education
              </a>
              <a
                href="#contact"
                className="px-8 py-2 text-sm font-medium text-white bg-brand-600 dark:bg-brand-700 rounded-md shadow-sm hover:bg-brand-700 dark:hover:bg-brand-600 transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="ml-4">
              <ThemeSwitcher />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#experience"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#education"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Education
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-brand-600 dark:bg-brand-700 text-white hover:bg-brand-700 dark:hover:bg-brand-600"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
