import React from 'react'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <>
       {/* section1 */}
       <div className="flex flex-col relative items-center justify-center mt-[20px] ">
        <div
          className=" w-[90%] h-[500px] rounded-2xl bg-cover bg-center inset-0 bg-navy-900 "
          style={{ backgroundImage: "url('/washbg.jpg')" }}
        ></div>
        <button className="bg-white py-[20px] px-[60px] rounded-lg absolute translate-x-[453px] translate-y-[120px]">
          <p className="text-[30px] font-semibold font-[Montserrat]">
            <Link to="/login"> Book now </Link> 
          </p>
        </button>
      </div>
    </>
  )
}

export default Section1
