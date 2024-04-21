import React, { useState } from "react";
import WomenWear from "./Womenwear/WomenWear";
import { FaNairaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Otherswear } from "./Others/Otherswear";
import MenWear from "./Menwear/Mencloth";
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

const BookWash = () => {
  const [showWomen, setShowWomen] = useState(false);
  const [showMen, setShowMen] = useState(true);
  const [showOthers, setShowOthers] = useState(false);
  const {
    calculateMenTotalPrice,
    calculateWomenTotalPrice,
    calculateOtherTotalPrice,
    formFields,
    setFormFields,
    updateFormData
  } = useContext(UserContext);

  // const handleChange = (e) => {
  //   const { HomeAddress, PhoneNumber, date, time } = e.target;
  //   updateFormData(HomeAddress, PhoneNumber, date, time);
  // };

  const handleShowWomen = () => {
    setShowMen(false);
    setShowWomen(true);
    setShowOthers(false);
  };

  const handleShowMen = () => {
    setShowMen(true);
    setShowWomen(false);
    setShowOthers(false);
  };

  const handleShowOthers = () => {
    setShowMen(false);
    setShowWomen(false);
    setShowOthers(true);
  };

  return (
    <>
      <div className="w-[90%] flex flex-col items-center justify-center rounded-xl shadow-2xl pb-10">
        {/* buttons */}
        <div className="w-[90%] flex flex-row items-center justify-around gap-10 py-10 border-b-2 border-[#4e6475]">
          <button className="btn w-[20%]" onClick={handleShowMen}>
            <p>MALE</p>
          </button>
          <button className="btn w-[20%]" onClick={handleShowWomen}>
            <p>FEMALE</p>
          </button>
          <button className="btn w-[20%]" onClick={handleShowOthers}>
            <p>OTHERS</p>
          </button>
        </div>
        {/* different components for theirs cloths */}
        <div>
          {showWomen && <WomenWear />}
          {showMen && <MenWear/> }
          {showOthers && <Otherswear/> }
        </div>
        {/* total prices */}
        <div className="flex flex-row items-center justify-center mx-14 mt-8">
         <div className="flex flex-col items-center justify-center mt-4 border-t border-gray-200 bg-[#3272A4] w-[150px] h-24 rounded-xl text-white ">
            <h3 className="text-lg font-semibold mb-2"> FEMALE WEAR </h3>
            <p className="text-[13px]">
              Total Price: {calculateWomenTotalPrice()}
            </p>
       </div>
       <div className="flex flex-col items-center justify-center mt-4 border-t border-gray-200 ml-10 bg-[#3272A4] w-[150px] h-24 rounded-xl text-white ">
            <h3 className="text-lg font-semibold mb-2"> MALE WEAR </h3>
            <p className="text-[13px]">
              Total Price: {calculateMenTotalPrice()}
            </p>
       </div>
       <div className="flex flex-col items-center justify-center mt-4 border-t border-gray-200 ml-10 bg-[#3272A4] w-[150px] h-24 rounded-xl text-white ">
            <h3 className="text-lg font-semibold mb-2"> OTHERS </h3>
            <p className="text-[13px]">
              Total Price: {calculateOtherTotalPrice()}
            </p>
       </div>
        </div>
        {/* pick up address and phone number */}
        <div className="flex flex-row items-start justify-center mt-5 w-[80%] gap-3 py-5 pl-3 ml-10">
          <div className="flex flex-col items-start justify-center w-[50%]">
            <label className="text-[#3272A4] font-semibold text-[22px]"> Home Address </label>
            <input
              type="text"
              name="HomeAddress"
              value={formFields.HomeAddress}
              onChange={updateFormData}
              placeholder="Type here"
              className="input input-bordered w-[80%]"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-[50%]">
            <label className="text-[#3272A4] font-semibold text-[22px]"> Phone Number </label>
            <input
              type="text"
              name="PhoneNumber"
              value={formFields.PhoneNumber}
              onChange={updateFormData}
              className="input input-bordered w-[80%]"
            />
          </div>
        </div>
        {/* pick up date */}
        <div className="flex flex-row  ml-10 items-start justify-center mt-5 w-[80%] gap-3 py-5 pl-3">
          <div className="flex flex-col items-start justify-center w-[50%]">
            <label className="text-[#3272A4] font-semibold text-[22px]"> Pick up date </label>
            <input
              type="date"
              name="date"
              value={formFields.date}
              onChange={updateFormData}
              placeholder="Type here"
              className="input input-bordered w-[80%]"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-[50%]">
            <label className="text-[#3272A4] font-semibold text-[22px]"> Pick up Time </label>
            <input
              type="time"
              name="time"
              value={formFields.time}
              onChange={updateFormData}
              className="input input-bordered w-[80%]"
            />
          </div>
        </div>
        {/* confirm order */}
        <div className="flex flex-col items-center justify-center mt-7 w-[80%]">
        <Link to="/dash/bookawash/summary" className="w-[90%]">
        <button className="btn w-full bg-[#3272a4] text-white text-[20px] hover:text-[#3272A4]"> Confirm Order </button></Link>
        </div>
      </div>
    </>
  );
};

export default BookWash;
