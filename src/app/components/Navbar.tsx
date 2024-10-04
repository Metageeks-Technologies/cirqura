"use client"
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top section with address and contact info */}
      <div className="flex justify-between items-center px-4 lg:px-6 sm:py-2 w-[95%] m-auto">
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
      <nav className=" sm:border-black border">
         
         {/* for desktop view */}
        <div className='sm:block hidden'>
        <div className="flex justify-between items-center   w-full sm:pt-0 pt-8 sm:pb-0 pb-3  m-auto sm:border border-black border-none">
          {/* Logo */}
          <div className="bg-[#0043B7]  px-5 py-1 border">
            <img
              src="/asset/Frame 7.svg"
              alt="Cirqura logo"
              className="object-cover w-auto"
            />
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden mr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white p-3 rounded-xl shadow-md"
            >
              {isOpen ?<RxCross2 className='h-6 w-6 text-blue-600 cursor-pointer' />:  <FiMenu className='h-6 w-6 text-blue-600 cursor-pointer' />}
            </button>
          </div>

          {/* Nav Links for larger screens */}
          <div className="hidden md:flex  lg:space-x-20 sm:space-x-2  text-sm">
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
          <div className="hidden md:flex lg:space-x-4">
            <Link href="#" className="py-5 px-5 text-blue-600 font-bold">
              Contact Us
            </Link>
            <Link href="#" className="py-5 px-5 bg-[#0043B7] text-white font-bold">
              Learn More
            </Link>
          </div>
        </div>
        </div>
         
         {/* for mobile view */}
         <div className='sm:hidden block'>
        <div className="flex justify-between items-center bg-[#0043B7]   w-full sm:pt-0 pt-8 sm:pb-0 pb-3  m-auto">
          {/* Logo */}
          <div className="bg-[#0043B7]  px-5 py-1 ">
            <img
              src="/asset/Frame 7.svg"
              alt="Cirqura logo"
              className="object-cover w-auto"
            />
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden mr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white p-3 rounded-xl shadow-md"
            >
              {isOpen ?<RxCross2 className='h-6 w-6 text-blue-600 cursor-pointer' />:  <FiMenu className='h-6 w-6 text-blue-600 cursor-pointer' />}
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
            <Link href="#" className=" text-blue-600 font-bold">
              Contact Us
            </Link>
            <Link href="#" className="  text-blue-600 font-bold">
              Learn More
            </Link>

            <div className="flex justify-start space-x-8">
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
