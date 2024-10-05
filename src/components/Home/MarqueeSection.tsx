import React from 'react'
import CirquraMarquee from '../Marquee'

const MarqueeSection = () => {
  return (
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
  )
}

export default MarqueeSection
