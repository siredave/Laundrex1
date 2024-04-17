import React from 'react'

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="flex flex-row items-center justify-evenly pt-[30px] pb-[20px] fixed w-full top-0 z-50 bg-white bg-opacity-60">
          <div className="flex flex-row items-center justify-center gap-3">
            <h1 className="text-2xl font-bold text-[#161C2D]">Laundrex</h1>
            <div
              className="w-[35px] h-[35px] bg-cover bg-center"
              style={{ backgroundImage: "url('/logo1.png')" }}
            ></div>
          </div>
          <div>
            <ul className=" flex flex-row items-center justify-center gap-10">
              <li className="font-bold text-[#161C2D] text-[20px] "> Home </li>
              <li className="font-bold text-[#161C2D] text-[20px]"> About </li>
              <li className="font-bold text-[#161C2D] text-[20px]">
                {" "}
                Services{" "}
              </li>
              <li className="font-bold text-[#161C2D] text-[20px]">
                {" "}
                Contact{" "}
              </li>
              <li className="font-bold text-[#161C2D] text-[20px]">
                {" "}
                Testimonials{" "}
              </li>
            </ul>
          </div>
        </nav>
        <div className=" flex items-center justify-center mt-[50px] pt-14 px-[150px] leading-12">
          <h1 className="font-bold text-[46px] text-center">
            Experience the{" "}
            <b className="text-[#3272A4]"> Ultimate Convenience </b> of Fresh
            Laundry
          </h1>
        </div>
      </div>
    </>
  )
}

export default Navbar
