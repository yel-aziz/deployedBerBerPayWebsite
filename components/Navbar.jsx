import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {/* <div className="h-10 w-10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#1A5276"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 12h8M12 8v8"
                    stroke="#1A5276"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div> */}
            <div className="ml-3">
              <span className="text-xl font-sans font-bold text-primary-blue">
                BerBerPay
              </span>
              <div className="flex items-center">
                <span className="text-sm text-primary-blue font-arabic">
                  المغرب
                </span>
                <span className="mx-1 text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">Maroc</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-primary-blue transition"
            >
              À Propos
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-primary-blue transition"
            >
              Fonctionnement
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-600 hover:text-primary-blue transition"
            >
              Témoignages
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2 text-sm text-white bg-primary-blue rounded-lg hover:bg-primary-blue/90 transition shadow-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-blue focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-60 opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg mt-2">
          <Link
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-blue hover:bg-primary-blue/5"
          >
            À Propos
          </Link>
          <Link
            href="#how-it-works"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-blue hover:bg-primary-blue/5"
          >
            Fonctionnement
          </Link>
          <Link
            href="#testimonials"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-blue hover:bg-primary-blue/5"
          >
            Témoignages
          </Link>
          <Link
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-primary-blue mt-4 border-t border-gray-200 pt-4"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
