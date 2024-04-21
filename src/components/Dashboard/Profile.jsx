import React, {useContext, useState} from "react";
import { UserContext } from "../Context/UserProvider";

const Profile = () => {
  const { authUser } = useContext(UserContext);
  console.log(authUser, "from profile");
  return (
    <>
      <div className="">
        <input type="checkbox" id="my_modal_7" className="modal-toggle " />
        <div className="modal pl-72" role="dialog">
          <div className="modal-box">
            <div className="ml-32 mb-4">
              <h1 className="text-[#3272A4] text-[20px] font-bold">
                Personal Information
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-row items-center justify-center gap-2">
              <h1 className="text-black font-bold text-[20px]"> Name: </h1>
              <p className="text-[18px] text-black font-semibold"> {authUser.full_name} </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <h1 className="text-black font-bold text-[20px]"> Email: </h1>
              <p className="text-[18px] text-black font-semibold"> {authUser.email}</p>
            </div> 
            </div>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </div>
    </>
  );
};

export default Profile;



{/* */}