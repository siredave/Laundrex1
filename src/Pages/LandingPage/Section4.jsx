import React from "react";

const Section4 = () => {
  return (
    <>
      {/* why choose laundrex */}
      <div className="flex flex-row items-center mt-[80px] gap-8 justify-center px-28  ]">
        <div className="flex flex-row items-start justify-center gap-8 pt-[80px]">
          {/* div1 */}
          <div className="mt-16">
            <div
              className="w-[150px] h-[250px] bg-cover bg-center rounded-xl shadow-xl"
              style={{ backgroundImage: "url('/img2.jpg')" }}
            ></div>
          </div>
          {/* div 2 */}
          <div className="flex flex-col items-start justify-center gap-10">
            <div
              className="w-[150px] h-[200px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: "url('/img3.jpg')" }}
            ></div>
            <div
              className="w-[250px] h-[150px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: "url('/img1.jpg')" }}
            ></div>
          </div>
        </div>
        {/* div 3 */}
        <div className=" flex flex-col items-center justify-center font-Montserrat text-center ">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="font-bold text-black text-[30px]">
              Why Choose <b className="text-[#3272A4]"> Laundrex </b> ?
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <img src="/Icon.png" alt="" className="pt-10" />
              <div>
                <h1 className="text-[20px] text-start pl-3 text-black pt-6">
                  Hygienic
                </h1>
                <p className="text-[15px] text-start px-3 pt-2 text-black font-light max-w-64">
                  No blending of garments. Ultra-clean laundromats with
                  extraordinary bundling to keep up freshness
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center ">
              <img src="/Icon2.png" alt="" className="pt-10" />
              <div>
                <h1 className="text-[20px] text-black text-start pl-3 pt-6 ">
                  {" "}
                  Convenience{" "}
                </h1>
                <p className="text-[15px] text-start px-3 pt-2 text-black font-light max-w-64">
                  Save you time and energy.Just book your laundry online or drop
                  it yourself at our nearest store.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center ">
              <img src="/Icon3.png" alt="" className="pt-10" />
              <div>
                <h1 className="text-[20px] text-start pl-3 text-black pt-6">
                  {" "}
                  High Quality{" "}
                </h1>
                <p className="text-[15px] text-start px-3 pt-2 text-black font-light max-w-64">
                  We provide high quality laundry service for Spotless Business
                  Reputation.We serves diverse sectors with quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
