import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="flex flex-row items-center justify-between px-[90px] pt-[30px] pb-[20px] border-b-2 border-[#3272A4] fixed w-full top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md">
          <div className="flex flex-row items-center justify-start gap-3">
            <h1 className="text-2xl font-bold text-[#161C2D]">Laundrex</h1>
            <div
              className="w-[35px] h-[35px] bg-cover bg-center"
              style={{ backgroundImage: "url('/logo1.png')" }}
            ></div>
          </div>
          <div>
            <ul className=" flex flex-row items-center justify-end gap-10">
              <a href="#Home-Header">
              <li className="font-bold text-[#161C2D] text-[20px] "> Home </li>
              </a>
              <a href="#About-Header">
              <li className="font-bold text-[#161C2D] text-[20px]"> About </li>
              </a>
              <a href="#Service-Header">
              <li className="font-bold text-[#161C2D] text-[20px]"> Services</li>
              </a>
              <a href="#Testimonial-Header">
              <li className="font-bold text-[#161C2D] text-[20px]">
                {" "}
                Testimonials{" "}
              </li>
              </a>
            </ul>
          </div>
        </nav>
        <div className=" flex items-center justify-center mt-[50px] pt-10 px-[150px] leading-12">
          <h1 className="font-bold text-[46px] text-center">
            Experience the{" "}
            <b className="text-[#3272A4]"> Ultimate Convenience </b> of Fresh
            Laundry
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
