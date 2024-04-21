import React from 'react'

const Section5 = () => {
  return (
    <>
      {/* our service */}
      <div id='Service-Header' className="flex flex-col items-center justify-center mt-20">
        <div className="flex flex-col items-center justify-center max-w-[65%]">
          <h1 className="font-bold text-[#3272A4] text-[30px]">
            <b className="text-black"> Our </b> Services
          </h1>
          <h2 className="font-bold text-center text-black text-[15px]">
            Just drop-off your clothes at the desired address for a pick up. We
            will do the rest! We wash, dry and iron your clothes, you just have
            to ask.
          </h2>
        </div>
        {/* cards */}
        <div className="flex flex-wrap items-center justify-center gap-[50px] mt-[50px]">
          <div className="flex flex-col items-center justify-center text-center w-[300px] bg-base-100 rounded-3xl shadow-xl">
            <figure>
              <img src="/Figure 1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className=" text-[#3272A4] "> Drapery </h2>
              <p className=" text-[15px]  ">
                Dupioni silk is centuries old and has always remained a favorite
                as it offers the intricately woven silk yarns of varying
                thickness.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center w-[300px] bg-base-100 rounded-3xl shadow-xl">
            <figure>
              <img src="/Figure 2.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-[#3272A4] "> Wedding suites </h2>
              <p className=" text-[15px] ">
                We know it isn't just your most costly suit yet additionally the
                most appreciated suit of all events. Call us and we will pick.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center w-[300px] bg-base-100 rounded-3xl shadow-xl">
            <figure>
              <img src="/Figure3.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-[#3272A4] "> Curtains </h2>
              <p className=" text-[15px] ">
                The curtains lend a special effect to your tastefully decorated
                furnishings and wall paint. Often the first thing everyone.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center w-[300px] bg-base-100 rounded-3xl shadow-xl">
            <figure>
              <img src="/Figure 4.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-[#3272A4] "> Silk and Suede </h2>
              <p className=" text-[15px]">
                Every now and again support, refreshment stains and others like
                pen ink engravings could damage your mollified cowhide
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center w-[300px] bg-base-100 rounded-3xl shadow-xl">
            <figure>
              <img src="/Figure 5.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className=" text-[#3272A4] "> Dry Cleaning </h2>
              <p className=" text-[15px]">
                Dry Clean for You in Watertown is your licensed and certified
                dry cleaner, offering dry cleaning pick up and delivery.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center w-[300px] bg-base-100 rounded-3xl shadow-xl">
            <figure>
              <img src="/Figure 6.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className=" text-[#3272A4] "> Leather Cleaning </h2>
              <p className=" text-[15px]">
                Leather garments are a chic addition to any wardrobe. While they
                can be pricey, with the right care they can become
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section5
