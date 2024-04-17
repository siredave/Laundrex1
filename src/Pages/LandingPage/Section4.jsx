import React from 'react'

const Section4 = () => {
  return (
    <>
       {/* why choose laundrex */}
      {/* div1 */}
      <div className="flex flex-row items-start justify-center gap-8 px-[100px] pt-[143px]">
        <div className="mt-16">
          <div
            className="w-[280px] h-[400px] bg-cover bg-center rounded-xl"
            style={{ backgroundImage: "url('/img2.jpg')" }}
          ></div>
        </div>
        {/* div 2 */}
        <div className="flex flex-col items-start justify-center gap-10">
          <div
            className="w-[200px] h-[250px] bg-cover bg-center rounded-xl"
            style={{ backgroundImage: "url('/img3.jpg')" }}
          ></div>
          <div
            className="w-[350px] h-[250px] bg-cover bg-center rounded-xl"
            style={{ backgroundImage: "url('/img1.jpg')" }}
          ></div>
        </div>
        {/* div 3 */}
        <div className=" flex flex-col px-0 items-center justify-center font-Montserrat text-center max-w-[30%]">
          <div className="flex flex-col items-center justify-center w-[80%]">
            <h1 className="font-bold text-black text-[30px]">
              Why Choose <b className="text-[#3272A4]"> Laundrex </b> ?
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center w-[250px] h-[150px]">
              <img src="/Icon.png" alt="" className="pt-10" />
              <div>
                <h1 className="text-[15px] text-start pl-3 text-black pt-6">
                  Hygienic
                </h1>
                <p className="text-[10px] text-start px-3 pt-2 text-black font-light">
                  No blending of garments. Ultra-clean laundromats with
                  extraordinary bundling to keep up freshness
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-[250px] h-[150px]">
              <img src="/Icon2.png" alt="" className="pt-10" />
              <div>
                <h1 className="text-[15px] text-black text-start pl-3 pt-6">
                  {" "}
                  Convenience{" "}
                </h1>
                <p className="text-[10px] text-start px-3 pt-2 text-black font-light">
                  Save you time and energy.Just book your laundry online or drop
                  it yourself at our nearest store.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-[250px] h-[150px]">
              <img src="/Icon3.png" alt="" className="pt-10" />
              <div>
                <h1 className="text-[15px] text-start pl-3 text-black pt-6">
                  {" "}
                  High Quality{" "}
                </h1>
                <p className="text-[10px] text-start px-3 pt-2 text-black font-light">
                  We provide high quality laundry service for Spotless Business
                  Reputation.We serves diverse sectors with quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section4
