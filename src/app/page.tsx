"use client";
import React, { useState } from "react";
import Footer from "./components/Footer";
import CirquraMarquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import { IoMdArrowRoundDown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does Cirqura’s recycling process work?",
    answer: "Cirqura’s recycling process involves several steps...",
  },
  {
    question: "How can I schedule a pickup through the app?",
    answer:
      "To schedule a pickup, go to the 'Schedule Pickup' tab in the app...",
  },
  {
    question: "What types of glass can be recycled?",
    answer:
      "The types of glass that can be recycled include bottles, jars, etc.",
  },
  {
    question: "What are the benefits of glass recycling?",
    answer:
      "Recycling glass helps reduce waste and conserves natural resources...",
  },
];

const page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="main">
      <Navbar />
      <div className="lg:min-h-screen bg-blue-50 relative ">
        {/* Header Section */}
        <header className="flex lg:flex-row  justify-between py-14 lg:w-[75%] m-auto  sm:gap-14  gap-5 lg:px-0 sm:px-6 px-4">
          <div className="bg-blue-50 font-sans  leading-none">
            <h1
              className="sm:text-9xl text-7xl  font-extrabold text-transparent tracking-wide lg:leading-none sm:lg:mb-[-38px] mb-[-25px]"
              style={{ WebkitTextStroke: "1px #d1d5db" }}
            >
              JOIN
            </h1>

            <div className="lg:ml-24 sm:ml-8 z-20">
              <h1 className="lg:text-9xl sm:text-6xl text-5xl font-bold sm:tracking-[0.6rem] uppercase font-sans text-transparent bg-clip-text bg-gradient-to-r from-black via-[#0043B7] to-black ">
                Cirqura
              </h1>

              <p className="lg:text-lg text-gray-500 lg:py-10 sm:py-6 py-5 sm:text text-xs sm:leading-5 ">
                AT CIRQURA, WE MAKE GLASS RECYCLING EFFORTLESS AND REWARDING.
                JOIN US IN CREATING A SUSTAINABLE FUTURE WITH OUR EASY-TO-USE
                APP AND ECO-FRIENDLY SOLUTIONS.
              </p>

              <div className=" flex lg:flex-row flex-col lg:gap-10 sm:gap-4 gap-4 ">
                <button className="py-4 lg:w-auto  sm:w-2/3 text-white sm:px-6 w-full bg-gradient-to-b from-[#0043B7] to-[#001E51] flex gap-2 justify-center">
                  Learn How It Works
                  <MdArrowOutward className="h-5 w-5" />
                </button>
                <button className="py-4 px-6 lg:w-auto sm:w-2/3 border border-[#0043B7] font-semibold">
                  Join Our Team
                </button>
              </div>
            </div>
          </div>

          <div className="lg:mt-12 sm:mt-20 mt-24">
            <img
              src="https://s3-alpha-sig.figma.com/img/db60/fcd4/75c603d745da19746e9bf63a4e9fbf18?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=loyF3DhsRqkEJA3HLpq9Gnv4iGFz8s7YlI2ES2qkxAJrCZQ7CfRPSDaF0ATc1n84VNOoxP8L9f-3NsY417Pu6vBO6xkXAn-QX25jyWby7d5TbGtBBSg71Q0miVPpTsFyWLiO4yrg0Zmw~XGNbSLRuiGJBOoN~4WDaQhbOPinJX6bsbgc01RvI482yGrs8ugfCbRzVFHnHGF13ldUnBEVVB02lAzDebv6BF~jZgHI-~HuJz4ynK-gQf0znmqyCtUE-wLhv8rZL63l5GrUVG2lccvcmuAQseA8k1023zwfFAKQJFf4wN-yPIjgeOHMgDQIN~ayT9vWCyprj3hqL8guvA__"
              alt="Eco-friendly bottle"
              className=""
            />
          </div>
        </header>

        {/* Stats Section */}
        
        <section className="bg-black absolute sm:-bottom-12  lg:right-20 sm:right-0 right-8 flex justify-center ">
          <div className="container mx-auto flex sm:flex-row flex-col justify-around text-white">

            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/333e/7de3/112657d94a9a20a4a57a4dffa69efd92?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hoDOTxUFp5JRniT2LcQp-3eR4OlHfEXbsFtTQUmzAtwT~Jr25q8aoPDEdiFKhudFIKXSkuTeL4KKN04OAj3L2ahIYM9~Zfs-szTNZYWUUiIjXfgP2B-V28izRfK6Miz2GYj0MNWTyfdWIlUeMm8zb6DROX53jfsFqVCXUUarkIfI1gzWN6gx0vQxqCU8KiTv1mb3zNHNAU8uX3HiBV75FGG3Grw5qylY-gLLV8CBz5zBWDjXRuW68gECoHZAe5nhX5fz~uFfAYh6En~wcKZnLrKfrLDJ6DH308yrDjiCqOZCiafS8hvv54xAupFhnozKaYVa3VueIHz3j3MxnV1HBg__"
                alt=""
                className="h-40 sm:w-72 w-80 object-cover"
              />
            </div>

            <div className="flex sm:flex-row flex-col gap-4 lg:space-x-24 px-10 sm:py-0 py-8 ">
              
              <div className="flex  items-center gap-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f0b0/2661/67d239714232b83ea9ede1f090305cdd?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4YlCSpbqNVMO2IkK6AbnZ1oHZY1VwLJen5hsXlk0OMqOjNzM1FlOesvAh5py-wAOpMDMXvQAdMKm-v61nvpOfyT~Y35WoAJFlw7TBhMal0AhZR~RX8DeYdsnlc36g5WDSwZPMd8yLFPja6ZB8LZz13XJ~v9Dc~0rWxji5TD3OSSu1Jsb8yllS48ozwcdVk3q1kcEl6YbRxiZVnNdhmYKgxqZDj-UVJMCyEY1lgtccvdMrnd0BySrfosfcqhCp3s9rjXYNeUHnCugOZVWFNflypN1PQ5r75xb7WSFz~DFRYWtOlcT2w6iP5he2NhE4rF0YSC58GvBi-Tq4PsTXWxZQ__"
                  alt="Recycling Icon"
                  className="h-12 mx-auto mb-4"
                />

                <div className=" flex flex-col sm:gap-4 gap-3">
                  <p className="text-4xl font-bold">3569+</p>
                  <div className="flex sm:flex-col flex-row sm:gap-0 gap-2">
                  <p className="text-sm">
                    Customers 
                    </p>
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
                  <p className="text-sm">
                    Customers 
                    </p>
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
                  <p className="text-sm">
                    Customers 
                    </p>
                    <p className="text-sm">Globally</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        
      </div>

      
      <div className="flex lg:flex-row flex-col w-[90%] m-auto sm:mt-28 mt-[30rem]  ">
        <div className="relative mx-10 w-full mt-8">
          <img src="/asset/Group 22.png" alt="" className="sm:w-auto h-auto w-[19rem] " />
          <div className="absolute -bottom-5 -left-10 sm:h-36 sm:w-36 h-28 w-28 bg-[#031C48] flex items-center justify-center flex-col gap-2">
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
          <p className="uppercase py-10 w-[85%]">
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

      <div className="w-[90%] m-auto lg:my-28 my-10 ">
        {/* Why Us Section */}
        <div className="flex sm:flex-row flex-col  gap-10 items-center">
          <div className="w-full">
            <div>
              <h1
                className="sm:text-9xl text-7xl font-extrabold text-transparent tracking-wide leading-none"
                style={{
                  WebkitTextStroke: "1px #d1d5db",
                  marginBottom: "-26px",
                }}
              >
                WHY US?
              </h1>
              <h3 className="text-xl text-[#0043B7] uppercase font-bold tracking-[0.1rem]">
                why choose us
              </h3>
            </div>

            {/* Subheading */}
            <h3 className="text-4xl font-bold  leading-snug font-sans">
              WE ARE BUILDING <br /> A SUSTAINABLE FUTURE
            </h3>

            {/* Description Text */}

            <p className="text-[#000000] font-sans uppercase font-thin mt-12">
              Highlight your unique selling points. Explain why clients should
              choose you over competitors (e.g., technology, experience,
              personal touch, solutions, innovation).
            </p>

            {/* Bullet Points */}
            <div className="mt-8 space-y-10">
              <div className="flex items-start gap-3 hover:shadow-xl lg:w-3/5 p-4 cursor-pointer">
                <img src="/asset/scability.svg" alt="" className="mt-2" />
                <div>
                  <h4 className="font-bold text-lg">Sustainability</h4>
                  <p className="text-gray-600">
                    Reducing environmental impact through efficient glass
                    recycling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 hover:shadow-xl lg:w-3/5 p-4 cursor-pointer">
                <img src="/asset/innovation 1.svg" alt="" className="mt-2" />
                <div>
                  <h4 className="font-bold text-lg">Innovation</h4>
                  <p className="text-gray-600">
                    Advanced recycling technology that maximizes material
                    recovery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 hover:shadow-xl lg:w-3/5 p-4 cursor-pointer">
                <img src="/asset/epidemiology 1.svg" alt="" className="mt-2" />
                <div>
                  <h4 className="font-bold text-lg">Community</h4>
                  <p className="text-gray-600">
                    Empowering communities to recycle better with our app.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Box Section */}
          <div className="w-full">
            <div className="flex lg:flex-row flex-col sm:gap-1 gap-3">
              {/* Top Image */}
              <div className="">
                <img
                  src="https://s3-alpha-sig.figma.com/img/116d/ce62/7bbf1d2c8b48bc7cd72bca02c4cba006?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TYY9~wj7I9hP3hzrAjnLFP2o5dL4LcQQdTidcFT6Hw7ofv8wGkKeFk7Hhzk5S0SF4NQupHjkds7OEDUD7m2GsVSmH8Q67Qh7X6~Bkmv9EvXK1M8qcf1yUdU~mx1oKv-3jaLLSofwaWZGvHI6-nLveEpTCZH9VywvqW5TYEI8c1yRR1gkK4GYcmPh4n47Hgw9FJf7QpEqzZRupXGeSCqTcAHQKNcdXExpFvywJ10qVjBCDSAkJypKFIKqw4OhQmvuEJ9UO~VHBtFmtgX3Q4nR0GLbQ3AiQbQsXNLgBrrhKJHvCTHf41BYY6pmErHM1I6DjPEOApqpGy611r0NOfPIww__"
                  alt="Sustainable Image"
                  className="sm:w-72 h-60  w-full object-cover"
                />
              </div>

              <div className="">
                <img
                  src="/asset/Group 24.svg"
                  alt="Sustainable Image"
                  className="sm:w-72 h-60  w-full object-cover"
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col sm:gap-1 gap-3 sm:mt-2 mt-3">
              {/* Top Image */}
              <div className="">
                <img
                  src="/asset/main .jpg"
                  alt="Sustainable Image"
                  className="sm:w-72 h-60  w-full object-cover"
                />
              </div>

              <div className="">
                <img
                  src="https://s3-alpha-sig.figma.com/img/7b4e/9e44/21572c567a91f00b4e9fe855582597de?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DMIAzUcy-oAZqRTugbFWWMMoxD58TT5nlVdBgK0ryz~WFYsTA0lgseaVRFUJi7TwMud7D~EiAXGOyejDdj0EarsiGMQNVK4zolAJooc~bHIk0FJP7aPka8V91h8KB1dm~PZlJdsS99iTVzTa5izpB1B~Dy7I-aCzm0rcr2oOimS8q4OsnxyDxRv3trcDzxrYhWJtKhxB8WXULOMk4K806TI~pRZ-a7qSYAGwlNlQeIUy15zJQG7oUFrWOlMBEbtcuMS9e1BWca0qgwNVl9aP3-CZScqb~LWlPEoalfsYoxGuhZjXSa4a8iaKcke~wxJTJ5pfORn9sQS4ZQ6jodsr0Q__"
                  alt="Sustainable Image"
                  className="sm:w-72 h-60  w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <CirquraMarquee />
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/3 h-[38rem] relative group ">
            <img
              src="https://s3-alpha-sig.figma.com/img/2696/863f/ad3a557aea321e9330b90c9372bec180?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qZMK47ux~Tb2KBKfyDWWStBapzwjqRg1XMqmXt07q3QDtj1OAJnb5mw9sVzCtBRQM15nHM~TLSrXqn~9zLwkT6rPgheXbJpixA4ryAVSePtmLYSz5dfT7rDbYHVdhpXrPd1xvsPhkbHYfqdfIOeQM2414GGyDid5I4t7DLNUh5lmldd~FiPkuS01~LnQEKBMzdcwnAbh-cRn27D~DCSZKDYe0PxGVzxc8BZ-LWWmynzwb96u7iU4hzDux~LynubhPZbZtj6pTMDxzOvEheFLza63~DjiKAS~6B-Ggi7zweDkEM2rDkl4F6fPyrL-W2Yp2NiiuFX2qpeh57tcWOAZMQ__"
              alt="Content Image"
              className="w-full h-full object-cover"
            />

            {/* Blue hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Text content */}
            <div className="absolute top-32 right-28">
              <p
                className="text-[14rem] font-extrabold text-transparent tracking-wide leading-none"
                style={{
                  WebkitTextStroke: "1px #d1d5db",
                  marginBottom: "-30px",
                }}
              >
                01
              </p>
              <h3 className="leading-none uppercase text-3xl font-sans font-bold text-white tracking-[0.2rem]">
                Content
              </h3>
            </div>
          </div>

          <div className="lg:w-1/3 h-[38rem] relative group">
            <img
              src="https://s3-alpha-sig.figma.com/img/e981/3911/154a9f71dec8d7841a47322e3ab8bee9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EU-~H4BM1VEbSYTKboI1rNSYk~SC7S6xlnga0snSBeZvNx~G539fWnExGowFmnIy-CwuszLO-VwN7pAYogK5BHCF5ewV9PEZWoJFiFWXPrXHs2c9~5v7RSNd-rRQMsIYfQh~ITTJVZNVqd6~auIH8Mt-2jnykZABMIVUwtE5idwRDtiMyp5L8G4NejCqdHkpKR0BjtmPNzvtaZxVapriUNkW9lRi1Hn05lWYnqy9y02NI3T7Hq-e~RC2i-fnsxD58uz2~Sk265RUYyuNpgQjXVTDJVyLB6hY0z4wx7w~7XK3wmBYLzII6GoXfcoHvYQ3hOwAiPiMcjaJmRNHRRMaDw__"
              alt="Data/Stats Image"
              className="w-full h-full object-cover"
            />
             {/* Blue hover overlay */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-32 sm:right-28 right-20">
              <p
                className="text-[14rem] font-extrabold text-transparent tracking-wide leading-none"
                style={{
                  WebkitTextStroke: "1px #d1d5db",
                  marginBottom: "-30px",
                }}
              >
                02
              </p>
              <h3 className="leading-none uppercase text-3xl font-sans font-bold text-white tracking-[0.2rem]">
                Data/Stats
              </h3>
            </div>
          </div>

          <div className="lg:w-1/3 h-[38rem] relative group">
            <img
              src="https://s3-alpha-sig.figma.com/img/859d/8164/545e1725e79d203e41bf8cc066a8ce8b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=laEgsUI-rcYL944OFh1gEEDF9IZ4xOLNFKjLptrf6DzULz9s~TRcE6YpnIlP3wZxgQkoTjozW9OLOMh7gW4VAdFzZe7XhJ0KbsJsi5xIBzoYeZuNPFjds5x39TBX1smw4X0ADhOjEjj5WgLmd~lVBpuQaKH04Vgm7-Gmqv~kSkiGuHXP2xMDe-LGVdltowkK94fq72X9OvrpLm7MsaOGZz9Cz1EoAj0kIcDoawHa-nBXnxFDsgG4Ck0N2Uy8-Ckgw7MaGGsHDk47ynQCaFMv8OAfOI6tAUzu4SO9Muk7kauoaNy8uuD-S2qGPdsZCBod26gq7LsY~JUljleaZHvH-Q__"
              alt="Infographic Image"
              className="w-full h-full object-cover"
            />
             {/* Blue hover overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-32 sm:right-28 right-20 ">
              <p
                className="text-[14rem] font-extrabold text-transparent tracking-wide leading-none"
                style={{
                  WebkitTextStroke: "1px #d1d5db",
                  marginBottom: "-30px",
                }}
              >
                03
              </p>
              <h3 className="leading-none uppercase text-3xl font-sans font-bold text-white tracking-[0.2rem]">
                Inforgraphic
              </h3>
            </div>
          </div>
        </div>
      </div>

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

      <div className="w-[90%] m-auto sm:my-28">
        <div>
          <h1
            className="sm:text-9xl text-7xl font-extrabold text-transparent lg:tracking-wide leading-none"
            style={{ WebkitTextStroke: "1px #d1d5db", marginBottom: "-30px" }}
          >
            SUPPORT
          </h1>
          <h3 className=" uppercase text-4xl font-sans font-bold text-black tracking-[0.2rem] ">
            FAQs
          </h3>
        </div>

        <div className="mt-5 flex sm:flex-row flex-col justify-between">
          <div className="w-full">
            <p className="sm:w-3/5">
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please chat to our friendly
              team.
            </p>
          </div>

          <div className="w-full">
            {faqData.map((item, index) => (
              <div key={index} className="py-3">
                <div className="px-5 py-6 bg-[#F9FAFB] rounded-md">
                  <button
                    className="flex justify-between  w-full text-left text-lg font-semibold text-gray-800"
                    onClick={() => toggleFAQ(index)}
                  >
                    {item.question}
                    <span className="text-2xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className=" text-gray-600 text-base">
                      {item.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       
      <Footer />
     
    </div>
  );
};

export default page;
