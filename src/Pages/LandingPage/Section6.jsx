import React from 'react'

const Section6 = () => {
  return (
    <>
      {/* testimonies */}
      <div
        className="flex flex-col items-center justify-center w-[90%] rounded-xl ml-14 bg-cover bg-center inset-0  mt-20 pb-10 bg-navy-900 "
        style={{ backgroundImage: "url('/before2.png')" }}
      >
        <div className="mt-10">
          <h1 className="font-bold text-white  text-[30px]">
            Client <b className="text-[#3272A4]"> Testimonials </b>
          </h1>
          <p className="text-white text-center">
            Customer Satisfaction Drives Us
          </p>
        </div>
        {/* cards 2 */}
        <div className="flex flex-wrap items-center justify-center gap-7 ">
          <div className="relative flex flex-col items-center justify-center w-[250px] h-[230px] mt-10 pb-5 bg-white rounded-lg">
            <img src="/c1.png" alt="" className="-translate-y-6 " />
            <h1 className="text-black text-semibold text-[20px] px-5 -translate-y-1">
              Michel jordan
            </h1>
            <h5 className="text-[#3272A4] text-[15px]">Bank Manager</h5>
            <p className="text-[#3272A4] text-[10px] pt-[22px] px-5 text-center font-light ">
              I am highly impressed by the professionalism these young guys have
              demonstrated. They not only picked it from my doorstep but also
              delivered it within the given time.
            </p>
          </div>
          <div className="relative flex flex-col items-center justify-center w-[250px] h-[230px] mt-10 pb-5 bg-white rounded-lg">
            <img src="/c1.png" alt="" className="-translate-y-6 " />
            <h1 className="text-black text-semibold text-[20px] px-5 -translate-y-1">
              Hannah Kobel
            </h1>
            <h5 className="text-[#3272A4] text-[15px]">House wife </h5>
            <p className="text-[#3272A4] text-[10px] pt-[22px] px-5 text-center font-light ">
              Very good service! Always polite and quick turn around between
              pick up and drop of! Would definitely recommend!
            </p>
          </div>
          <div className="relative flex flex-col items-center justify-center w-[250px] h-[230px] mt-10 pb-5 bg-white rounded-lg">
            <img src="/c2.png" alt="" className="-translate-y-6 " />
            <h1 className="text-black text-semibold text-[20px] px-5 -translate-y-1">
              Din Rechard
            </h1>
            <h5 className="text-[#3272A4] text-[15px]">Hotel Manager</h5>
            <p className="text-[#3272A4] text-[10px] pt-[22px] px-5 text-center font-light ">
              These guys are the greatest! My favorite coat was stained and I
              needed back for my job interview on the next day. As they promised
              I got my coat on time.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section6
