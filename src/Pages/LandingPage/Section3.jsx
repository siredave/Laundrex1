import React from 'react'

const Section3 = () => {
  return (
    <>
      {/* about laudrex */}
      <div className="w-[100%] flex flex-row px-[100px] gap-[80px] mt-[80px]">
        <div className="w-[50%] px-10 flex flex-col  items-start justify-center">
          <h1 className="font-bold text-[60px] font-[Montserrat] leading-[55px]">
            {" "}
            About <b className="text-[#3272A4]"> Laundrex </b>
          </h1>
          <div className="flex flex-col items-start justify-center mt-[25px] gap-3 leading-5">
            <h5 className="font-bold text-[22px]"> Our Mission </h5>
            <p className="font-light text-[16px]">
              At LAUNDREX, we're dedicated to providing top-notch laundry
              services with a commitment to quality, convenience, and customer
              satisfaction.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center mt-[25px] gap-3 leading-5">
            <h5 className="font-bold text-[22px]">Our Vision</h5>
            <p className="font-light text-[16px]">
              Empowering individuals and families to embrace life's moments
              fully by ensuring their garments are impeccably cleaned, cared
              for, and delivered with convenience and care. We envision a world
              where every garment tells a story of freshness, reliability, and
              the joy of everyday living.
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <div
            className="w-[498px] h-[501px] bg-cover bg-center"
            style={{ backgroundImage: "url('/cloth3.png')" }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Section3
