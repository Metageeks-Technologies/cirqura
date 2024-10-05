import React from 'react'

const ContactSection = () => {
  return (
    <div className="flex lg:flex-row flex-col">
    <div className="basis-[40%]">
      <div className="sm:w-[80%] m-auto flex flex-col ">
        <div className="sm:px-0 px-8">
        <h1
          className="sm:text-9xl text-7xl font-extrabold text-transparent tracking-wide leading-none sm:mb-[-30px] mb-[-20px]"
          style={{ WebkitTextStroke: "1px #d1d5db" }}
        >
          Join Us
        </h1>
        <h3 className=" uppercase sm:text-4xl text-2xl font-sans font-bold text-black sm:tracking-[0.2rem] ">
          Contact Us
        </h3>

        <p className="text-[#000000] font-sans uppercase font-thin my-8">
          We’re here to answer your questions, provide more information
          about our services, or help you get started with glass recycling.
        </p>
        </div>

        <img src="/asset/Group 29.svg" alt="" className="w-full sm:hidden block" />

        <div className="sm:mt-12 sm:mx-0 mx-8  h-[40rem] lg:w-[40rem] flex z-10  sm:bg-gradient-to-r from-[#FFFFFF] to-[#0043B7] bg-gradient-to-t  ">
          {/* Form */}
          <form className="space-y-10 sm:p-14 p-6 w-full ">
            {/* Name Input */}
            <div>
              <label className="block sm:text-gray-700 text-white mb-2">
                Enter your name
              </label>
              <input
                placeholder="jone abc"
                aria-label="name"
                className="py-2 px-4 rounded-lg sm:w-3/5 w-full "
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block sm:text-gray-700 text-white mb-2">
                Enter your email
              </label>
              <input
                placeholder="abc@mail.com"
                type="email"
                aria-label="email"
                className="py-2 px-4 rounded-lg sm:w-3/5 w-full"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block sm:text-gray-700 text-white mb-2">
                Write a message
              </label>
              <textarea
                rows={6} // Add this line to define 6 rows (6 lines of height)
                placeholder="description..."
                aria-label="message"
                className="py-2 px-4 rounded-lg sm:w-3/5 w-full"
              />
            </div>

            {/* Send Button */}
            <button className="mt-4 bg-[#0043B7] text-white sm:w-1/3 w-full rounded-lg py-2.5 px-6 flex items-center justify-center gap-2">
              Send Message
              <img src="/asset/Icon.svg" alt="" />
            </button>
          </form>
        </div>

      </div>
    </div>
    <img src="/asset/Group 29.svg" alt="" className="w-full sm:block hidden" />
  </div>
  )
}

export default ContactSection
