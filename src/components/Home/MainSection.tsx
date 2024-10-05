import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const MainSection = () => {
  return (
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
    
    <section className="bg-black absolute sm:-bottom-12  lg:left-96 sm:left-0 left-10 flex justify-center ">
      <div className="container mx-auto flex sm:flex-row flex-col justify-around text-white">

        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/333e/7de3/112657d94a9a20a4a57a4dffa69efd92?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hoDOTxUFp5JRniT2LcQp-3eR4OlHfEXbsFtTQUmzAtwT~Jr25q8aoPDEdiFKhudFIKXSkuTeL4KKN04OAj3L2ahIYM9~Zfs-szTNZYWUUiIjXfgP2B-V28izRfK6Miz2GYj0MNWTyfdWIlUeMm8zb6DROX53jfsFqVCXUUarkIfI1gzWN6gx0vQxqCU8KiTv1mb3zNHNAU8uX3HiBV75FGG3Grw5qylY-gLLV8CBz5zBWDjXRuW68gECoHZAe5nhX5fz~uFfAYh6En~wcKZnLrKfrLDJ6DH308yrDjiCqOZCiafS8hvv54xAupFhnozKaYVa3VueIHz3j3MxnV1HBg__"
            alt=""
            className="h-40 sm:w-72 w-[20rem] object-cover"
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
  )
}

export default MainSection
