import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="main">
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src="/asset/About-banner.jpg"
          alt="about banner"
          className="w-full lg:h-auto h-80 object-cover"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4 font-chillax">Contact Us</h1>
          <p className="text-lg">Home &gt; Contact Us</p>
        </div>
      </div>
      
      {/* Contact and Map Section */}
      <div className="flex lg:flex-row flex-col sm:my-14 my-10">
        <div className="w-full flex items-center justify-center ">
          <div className="bg-white p-8 sm:w-[75%] m-auto ">
            <h2 className="text-4xl font-semibold font-sans">Contact us</h2>
            <p className="text-gray-600 my-6 text-lg  ">
              Our friendly team would love to hear from you.
            </p>

            <form className="pt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="firstName"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    className="border p-2 rounded w-full border-neutral-300"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="lastName"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    className="border p-2 rounded w-full border-neutral-300"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="border p-2 rounded w-full border-neutral-300"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="phoneNumber"
                >
                  Phone number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  placeholder="US +1 (555) 000-0000"
                  className="border p-2 rounded w-full border-neutral-300"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={8}
                  placeholder="Leave us a message..."
                  className="border w-full p-4 border-neutral-300"
                />
              </div>

              <div className="mb-6 flex items-center">
                <input id="privacyPolicy" type="checkbox" className="mr-2" />
                <label className="text-gray-600" htmlFor="privacyPolicy">
                  You agree to our friendly{" "}
                  <a href="#" className="text-blue-500 underline">
                    privacy policy
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0043B7] text-white py-2.5 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        <div className="w-full sm:block hidden">
          <img
            src="/asset/contact-map.jpg"
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
       
      {/* Only Contact Section */}
      <div className="sm:h-96 h-[40rem] bg-[#00E6601A] flex  items-center sm:mx-0 mx-5 ">
        <div className="lg:mx-12 sm:gap-0 gap-8 w-full  flex sm:flex-row flex-col justify-around">
          <div className="flex flex-col items-center gap-2">
            <img src="/asset/mail.svg" alt="" />
            <h3 className="text-lg font-bold text-[#101828]">Email</h3>
            <p className=" text-[#475467]">
              Our friendly team is here to help.
            </p>
            <p className="text-[#6941C6] font-semibold">hi@untitledui.com</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/asset/office.svg" alt="" />
            <h3 className="text-lg font-bold text-[#101828]">Office</h3>
            <p className=" text-[#475467]">Come say hello at our office HQ.</p>
            <p className="text-[#6941C6] text-center font-semibold">
              100 Smith Street <br />
              Collingwood VIC 3066 AU
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/asset/call.svg" alt="" />
            <h3 className="text-lg font-bold text-[#101828]">Phone</h3>
            <p className=" text-[#475467]">Mon-Fri from 8am to 5pm.</p>
            <p className="text-[#6941C6] font-semibold">+1 (555) 000-0000</p>
          </div>

        </div>
      </div>
  
      <Footer/>
       
    </div>
  );
};

export default page;
