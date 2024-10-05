import React from 'react'

const FatureSection = () => {
  return (
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
  )
}

export default FatureSection
