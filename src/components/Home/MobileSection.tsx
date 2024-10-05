import React from 'react'

const MobileSection = () => {
  return (
    <div className="lg:my-28 my-20">
    <div className="py-5 w-[90%] m-auto">
      <h1 
        className="sm:text-9xl text-7xl te font-extrabold text-transparent tracking-wide leading-none sm:mb-[-30px] mb-[-19px]"
        style={{ WebkitTextStroke: "1px #d1d5db" }}
      >
        New Way
      </h1>
      <div className="flex lg:flex-col flex-row lg:gap-0 gap-2">
      <p className=" uppercase sm:text-4xl text-3xl font-sans font-bold text-black sm:tracking-[0.2rem] leading-snug">
        Our New 
        </p>
        <p className=" uppercase sm:text-4xl text-3xl font-sans font-bold text-black sm:tracking-[0.2rem] leading-snug">

        Mobile App
        </p>
        </div>
     
    </div>

    <div className="py-10">
      <img src="/asset/group 23.png" alt="" className="w-full" />
    </div>
  </div>
  )
}

export default MobileSection
