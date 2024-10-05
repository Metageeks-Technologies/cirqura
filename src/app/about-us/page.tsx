import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const page = () => {
  return (
    <div className="main">
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src="/asset/About-banner.jpg"
          alt="about banner"
          className="w-full sm:h-auto h-80 object-cover"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4 font-chillax">About Us</h1>
          <p className="text-lg">Home &gt; About Us</p>
        </div>
      </div>
           
      {/* About Section*/}
      <div className="flex lg:flex-row flex-col w-[90%] m-auto sm:mt-20   ">
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
          <h1 className="text-3xl tracking-[0.2rem]  uppercase font-bold mt-3 font-sans">
            Cirqura is Recycle
          </h1>
          <p className="uppercase py-10 w-[85%]">
            Cirqura is dedicated to [industry-specific mission]. Our team
            combines cutting-edge technology and expertise to deliver innovative
            solutions that cater to [target audience’s needs]. Our focus is on
            delivering value, efficiency, and innovation in every project we
            undertake.
          </p>

          <div className=" flex lg:flex-row flex-col lg:gap-10 sm:gap-4 gap-4 ">
            <button className="py-4 lg:w-auto  sm:w-2/3 text-white sm:px-6 w-full bg-gradient-to-b from-[#0043B7] to-[#001E51] flex gap-2 justify-center">
              Free Consultancy
              <MdArrowOutward className="h-5 w-5" />
            </button>
            <button className="py-4 px-6 lg:w-auto sm:w-2/3 border border-[#0043B7] font-semibold">
              (+97) 19876 54321
            </button>
          </div>
        </div>
      </div>

      {/* Sticker Section */}
      <div className="w-full flex lg:justify-end  justify-center mt-14">
        <div className="bg-black lg:w-[75%]  w-[90%]   flex justify-center border ">
          <div className="container mx-auto flex sm:flex-row flex-col justify-around text-white">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/333e/7de3/112657d94a9a20a4a57a4dffa69efd92?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hoDOTxUFp5JRniT2LcQp-3eR4OlHfEXbsFtTQUmzAtwT~Jr25q8aoPDEdiFKhudFIKXSkuTeL4KKN04OAj3L2ahIYM9~Zfs-szTNZYWUUiIjXfgP2B-V28izRfK6Miz2GYj0MNWTyfdWIlUeMm8zb6DROX53jfsFqVCXUUarkIfI1gzWN6gx0vQxqCU8KiTv1mb3zNHNAU8uX3HiBV75FGG3Grw5qylY-gLLV8CBz5zBWDjXRuW68gECoHZAe5nhX5fz~uFfAYh6En~wcKZnLrKfrLDJ6DH308yrDjiCqOZCiafS8hvv54xAupFhnozKaYVa3VueIHz3j3MxnV1HBg__"
                alt=""
                className="h-40 lg:w-80 w-full object-cover"
              />
            </div>

            <div className="flex sm:flex-row flex-col gap-4 lg:space-x-24 lg:px-14 sm:px-5 px-14 sm:py-0 py-8 sm:self-center self-start  ">
              <div className="flex  items-center  gap-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f0b0/2661/67d239714232b83ea9ede1f090305cdd?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4YlCSpbqNVMO2IkK6AbnZ1oHZY1VwLJen5hsXlk0OMqOjNzM1FlOesvAh5py-wAOpMDMXvQAdMKm-v61nvpOfyT~Y35WoAJFlw7TBhMal0AhZR~RX8DeYdsnlc36g5WDSwZPMd8yLFPja6ZB8LZz13XJ~v9Dc~0rWxji5TD3OSSu1Jsb8yllS48ozwcdVk3q1kcEl6YbRxiZVnNdhmYKgxqZDj-UVJMCyEY1lgtccvdMrnd0BySrfosfcqhCp3s9rjXYNeUHnCugOZVWFNflypN1PQ5r75xb7WSFz~DFRYWtOlcT2w6iP5he2NhE4rF0YSC58GvBi-Tq4PsTXWxZQ__"
                  alt="Recycling Icon"
                  className="h-12 mx-auto mb-4"
                />

                <div className=" flex flex-col sm:gap-4 gap-3">
                  <p className="text-4xl  font-bold">3569+</p>
                  <div className="flex sm:flex-col flex-row sm:gap-0 gap-2">
                    <p className="text-sm">Customers</p>
                    <p className="text-sm">Globally</p>
                  </div>
                </div>
              </div>

              <div className="flex  items-center gap-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/56be/38f7/f80942f286915986e118fffbd8a8c6bc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L-6f2kWCzau6SUysuIZK53X~Vs-ipLQgHaV7RzijL5xNzQCveKgri~FS7kdKTRxpi5VZTG7k2YvTDpeMV6EuIh3tpWk-691aXxugFSL42sZ40zCqFKgir4WCbBMaJ9ozSmPB7-M5uSwuB0IP5f9sny74JgIt8Od7sJRrwqruwbBx6RqGuo0cgJG4t3qqDVVbxnULxBnetLJVqK4-L0vF0ttP7FUtBHoP3CIoNjdeuif6i9C6EXCFmdG5abrHUpRK1ng0YwjLvOHJ8wNOgvRGZ-UPY8uORwkpCvmv5k4M8QEZvYCLmjjXTvsMXcoNITEvcWphimxj9Qetsj6BkFGbcA__"
                  alt="Recycling Icon"
                  className="h-12 mx-auto mb-4"
                />

                <div className=" flex flex-col sm:gap-4 gap-3">
                  <p className="text-4xl font-bold">3569+</p>
                  <div className="flex sm:flex-col flex-row sm:gap-0 gap-2">
                    <p className="text-sm">Customers</p>
                    <p className="text-sm">Globally</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0d92/a797/fe386dc9925e8bf5b382847cc4e7057b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CvJQrwNs5b0RL4Y0z5UQnmTRN6wvZNsBRy3ORHm2oO4Dug8O6YSn0hQ~4IEjqJn04T-TGLBEfjYnBE5bXd1s~AWAE1qTp8yEu0OAiFR-3nW7u1gNku9QSd7bGcdj87VWW5GubAz3o7p3BRYfStBQrL5nkdisN-~9-syd~l56PiaoyrT12~3BqyhmWdLOCIj7w-fk~5lJ1tteqldesDgZbi~LVZwNye0g9yTohqgAzaKsgeqEM9yXbWnEEKOskR8Q2fskumB~26aBq7xlSnizh8RSb2MtOvSm9ld6ZIBEhtwNauFNpWtxHchvNSOPEVybzpskTtn10HSzWRDDOP0qaQ__"
                  alt="Recycling Icon"
                  className="h-12 mx-auto mb-4"
                />

                <div className=" flex flex-col gap-4">
                  <p className="text-4xl font-bold">3569+</p>
                  <div className="flex sm:flex-col flex-row sm:gap-0 gap-2">
                    <p className="text-sm">Customers</p>
                    <p className="text-sm">Globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Steps Section */}
      <div className="my-10  sm:mt-20 flex justify-center  ">
        <div className="max-w-2xl sm:px-0 px-4 flex flex-col justify-center">
          <h1
            className="sm:text-9xl text-7xl  text-center font-extrabold text-transparent tracking-wide leading-none"
            style={{ WebkitTextStroke: "1px #d1d5db", marginBottom: "-20px" }}
          >
            STEPS
          </h1>
          <p className="leading-none uppercase text-xl text-center font-sans font-bold text-[#0043B7] tracking-[0.3rem]">
          how we work
          </p>
          <h1 className="text-3xl tracking-[0.2rem]  uppercase font-bold mt-3 text-center font-sans">
          Our Work Process
          </h1>
          <p className=" py-5  text-center">
            All functions including supply chain, value chain, project
            scheduling, manufacturing, services and spares, technology, R&D,
            etc. are integrated to give a complete solutions package.
          </p>
        </div>
      </div>
      
      {/* Info Section */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 w-[90%] m-auto my-10">
        <div className="bg-[#F8F8F8] px-10 py-14 rounded-lg flex flex-col ">
          <div className="relative">
            <h1
              className="text-9xl   font-extrabold text-transparent tracking-wide leading-none lg:ml-5 "
              style={{ WebkitTextStroke: "1px #d1d5db" }}
            >
              01
            </h1>
            <p className="leading-none uppercase text-xl font-sans font-bold text-black tracking-[0.1rem] absolute bottom-6 left-0">
              step
            </p>
          </div>

          <h1 className="font-bold text-xl font-sans uppercase tracking-[0.2rem] ">
            Project Planing
          </h1>

          <p className="mt-8">
            Cirqura is among the world's leading renewable energy solutions
            provider that is revolutionising.
          </p>
        </div>

        <div className="bg-[#F8F8F8] px-10 py-14 rounded-lg flex flex-col ">
          <div className="relative">
            <h1
              className="text-9xl  font-extrabold text-transparent tracking-wide leading-none lg:ml-5 "
              style={{ WebkitTextStroke: "1px #d1d5db" }}
            >
              02
            </h1>
            <p className="leading-none uppercase text-xl font-sans font-bold text-black tracking-[0.1rem] absolute bottom-6 left-0">
              step
            </p>
          </div>

          <h1 className="font-bold text-xl font-sans uppercase tracking-[0.2rem] ">
            Research & Analysis
          </h1>

          <p className="mt-8">
            Cirqura is among the world's leading renewable energy solutions
            provider that is revolutionising.
          </p>
        </div>

        <div className="bg-[#F8F8F8] px-10 py-14 rounded-lg flex flex-col ">
          <div className="relative">
            <h1
              className="text-9xl  font-extrabold text-transparent tracking-wide leading-none lg:ml-5 "
              style={{ WebkitTextStroke: "1px #d1d5db" }}
            >
              03
            </h1>
            <p className="leading-none uppercase text-xl font-sans font-bold text-black tracking-[0.1rem] absolute bottom-6 left-0">
              step
            </p>
          </div>

          <h1 className="font-bold text-xl font-sans uppercase tracking-[0.2rem] ">
            Make it Happen
          </h1>

          <p className="mt-8">
            Cirqura is among the world's leading renewable energy solutions
            provider that is revolutionising.
          </p>
        </div>
      </div>
      
      {/* Support Section */}
      <div className="relative w-full py-12 sm:pb-28">
        <img
          src="/asset/about.jpg"
          alt="Renewable energy"
          className="w-full lg:h-auto h-64 object-cover"
        />

        <div className="absolute lg:top-44 sm:top-28 top-20 flex sm:flex-row flex-col justify-around items-center  w-full">
          

          <div className="lg:w-[45%] sm:w-2/3 w-[90%]">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-2 font-sans">
              HAVE QUESTIONS? WE ARE HERE  TO HELP YOU!
            </h1>
            <p className=" font-medium text-[#000000] mt-4">
            CIRQURA IS AMONG THE WORLD'S LEADING RENEWABLE ENERGY SOLUTIONS
            PROVIDER.
          </p>
          </div>

          <span
              className="sm:text-9xl text-7xl  font-extrabold text-transparent tracking-wide leading-none lg:ml-5 lg:block hidden "
              style={{ WebkitTextStroke: "1px white" }}
            >
              24/7
            </span>

          <div className="mt-6">
            <button className="px-6 py-3 text-black bg-white font-bold">
              LEARN MORE
            </button>
          </div>

        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default page;
