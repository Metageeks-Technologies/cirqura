"use client"
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top section with address and contact info */}
      <div className="flex justify-between items-center px-4 lg:px-6 py-2 w-[95%] m-auto">
        {/* Info hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <span className="text-gray-600">Dubai International Financial Centre</span>
          <span className="text-gray-800 font-bold">(+97) 19876 54321</span>
        </div>

        {/* Social Icons hidden on mobile */}
        <div className="hidden md:flex space-x-8">
          <a href="https://facebook.com" className="hover:text-gray-900">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-900">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-900">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="border-t border-black md:border-none ">
        <div className="flex justify-between items-center   m-auto border border-black">
          {/* Logo */}
          <div className="bg-[#0043B7] px-5 py-1">
            <img
              src="/asset/Frame 7.svg"
              alt="Cirqura logo"
              className="object-cover w-auto"
            />
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Nav Links for larger screens */}
          <div className="hidden md:flex space-x-6 lg:space-x-20 text-sm">
            <Link href="#" className="hover:font-bold">
              Home
            </Link>
            <Link href="#" className="hover:font-bold">
              About
            </Link>
            <Link href="#" className="hover:font-bold">
              Services
            </Link>
            <Link href="#" className="hover:font-bold">
              Portfolio
            </Link>
            <Link href="#" className="hover:font-bold">
              Blogs
            </Link>
          </div>

          {/* Call to action buttons */}
          <div className="hidden md:flex space-x-4">
            <Link href="#" className="py-5 px-5 text-blue-600 font-bold">
              Contact Us
            </Link>
            <Link href="#" className="py-5 px-5 bg-[#0043B7] text-white font-bold">
              Learn More
            </Link>
          </div>
        </div>

        {/* Dropdown menu for mobile screens */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 px-4 py-2 bg-white">
            <Link href="#" className="hover:font-bold">
              Home
            </Link>
            <Link href="#" className="hover:font-bold">
              About
            </Link>
            <Link href="#" className="hover:font-bold">
              Services
            </Link>
            <Link href="#" className="hover:font-bold">
              Portfolio
            </Link>
            <Link href="#" className="hover:font-bold">
              Blogs
            </Link>
            <Link href="#" className="py-2 text-blue-600 font-bold">
              Contact Us
            </Link>
            <Link href="#" className="py-2 bg-[#0043B7] text-white font-bold">
              Learn More
            </Link>

            <div className="flex justify-center space-x-8 mt-4">
              <a href="https://facebook.com" className="hover:text-gray-900">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-900">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="hover:text-gray-900">
                <FaInstagram />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
