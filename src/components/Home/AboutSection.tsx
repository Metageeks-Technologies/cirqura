import React from 'react'
import { IoMdArrowRoundDown } from 'react-icons/io'

const AboutSection = () => {
  return (
    <div className="flex lg:flex-row flex-col w-[90%] m-auto sm:mt-28 mt-[30rem]  ">
      <div className="relative sm:mx-10 w-full mt-8">
          <img
            src="/asset/Group 22.png"
            alt=""
            className="sm:w-auto h-auto w-[19rem] sm:m-0 m-auto  "
          />
          <div className="absolute -bottom-5 sm:-left-10 -left-0 sm:h-36 sm:w-36 h-28 w-28 bg-[#031C48] flex items-center justify-center flex-col gap-2">
            <span className="text-white font-semibold text-lg font-sans">
              45K
            </span>
            <p className="text-white font-semibold text-lg uppercase font-sans">
              People
            </p>
          </div>
        </div>

    <div className="py-10">
      <h1
        className="sm:text-9xl text-7xl  font-extrabold text-transparent tracking-wide leading-none"
        style={{ WebkitTextStroke: "1px #d1d5db", marginBottom: "-20px" }}
      >
        ABOUT
      </h1>
      <p className="leading-none uppercase text-xl font-sans font-bold text-[#0043B7] tracking-[0.2rem]">
        Who We Are
      </p>
      <h1 className="text-2xl  uppercase font-bold mt-3 font-sans">
        Cirqura is Recycle
      </h1>
      <p className="uppercase py-10 sm:w-[85%]">
        Cirqura is dedicated to [industry-specific mission]. Our team
        combines cutting-edge technology and expertise to deliver innovative
        solutions that cater to [target audience’s needs]. Our focus is on
        delivering value, efficiency, and innovation in every project we
        undertake.
      </p>

      <div className="flex gap-5 items-center mt-5">
        <div className="w-24 h-24 rounded-full border border-neutral-500 flex justify-center items-center  ">
          <button className="w-12 h-12 rounded-full bg-[#0043B7] shadow-lg shadow-[#819bea] flex justify-center items-center">
            <IoMdArrowRoundDown className="text-white h-5 w-5" />
          </button>
        </div>
        <h1 className="text-xl font-semibold uppercase">
          Download Brochure
        </h1>
      </div>
    </div>
  </div>
  )
}

export default AboutSection
