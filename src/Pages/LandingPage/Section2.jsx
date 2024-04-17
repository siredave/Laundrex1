import React from 'react'

const Section2 = () => {
  return (
    <>
      {/* how laundrex works */}
      <div className="flex flex-col items-center mt-14 justify-center">
        <h1 className="font-extrabold text-[55px] text-center">
          How <b className="text-[#3272A4]"> Laundrex </b> Works?
        </h1>
        <div className="flex flex-col items-start text-center justify-center w-[60%]">
          <p>
            Keep up a vital separation from the hassle of Washing Cloths. Book
            your Laundry in your locations with us. Book Now and we will
            delivery to your door step.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 items-center justify-center ">
          <div className="w-[220px] h-[200px] bg-[#9bc9ec] relative mt-10 rounded-xl">
            <p className="text-white text-[20px] font-semibold pt-3 pl-5">
              {" "}
              pick up{" "}
            </p>
            <div
              className="w-[70px] h-[80px] absolute -translate-y-[41px] rounded-xl translate-x-[150px] bg-cover bg-center"
              style={{ backgroundImage: "url('/count1.png')" }}
            ></div>
            <div
              className="w-[100px] h-[100px] mt-10 fill-white ml-12 bg-cover bg-center"
              style={{ backgroundImage: "url('/car.png')" }}
            ></div>
          </div>
          <div className="w-[220px] h-[200px] bg-[#9bc9ec] relative mt-10 rounded-xl">
            <p className="text-white text-[20px] font-semibold pt-3 pl-5">
              {" "}
              wash and dry{" "}
            </p>
            <div
              className="w-[70px] h-[80px] absolute -translate-y-[41px] rounded-xl translate-x-[150px] bg-cover bg-center"
              style={{ backgroundImage: "url('/count3.png')" }}
            ></div>
            <div
              className="w-[100px] h-[100px] mt-10 fill-white ml-12 bg-cover bg-center"
              style={{ backgroundImage: "url('/shirt.png')" }}
            ></div>
          </div>
          <div className="w-[220px] h-[200px] bg-[#9bc9ec] relative mt-10 rounded-xl">
            <p className="text-white text-[20px] font-semibold pt-3 pl-5">
              {" "}
              fold and iron{" "}
            </p>
            <div
              className="w-[70px] h-[80px] absolute -translate-y-[41px] rounded-xl translate-x-[150px] bg-cover bg-center"
              style={{ backgroundImage: "url('/count3.png')" }}
            ></div>
            <div
              className="w-[100px] h-[100px] mt-10 fill-white ml-12 bg-cover bg-center"
              style={{ backgroundImage: "url('/iron.png')" }}
            ></div>
          </div>
          <div className="w-[220px] h-[200px] bg-[#9bc9ec] relative mt-10 rounded-xl">
            <p className="text-white text-[20px] font-semibold pt-3 pl-5">
              {" "}
              Delivery{" "}
            </p>
            <div
              className="w-[70px] h-[80px] absolute -translate-y-[41px] rounded-xl translate-x-[150px] bg-cover bg-center"
              style={{ backgroundImage: "url('/count4.png')" }}
            ></div>
            <div
              className="w-[100px] h-[100px] mt-10 fill-white ml-12 bg-cover bg-center"
              style={{ backgroundImage: "url('/delivery.png')" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2
