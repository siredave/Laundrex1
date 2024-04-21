import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import Profile from "./Profile";
import { UserContext } from "../Context/UserProvider";
const NavbarDashboard = () => {
  const {userName} = useContext(UserContext)
  return (
    <>
      <nav className="navbar fixed items-end justify-end h-[100px] pl-[300px] pr-[100px] bg-gray-200">
        {/* <div>
          <img
            src="/logo2.jpg"
            alt=""
            className="h-[50px] w-[50p] rounded-lg"
          />
        </div> */}
        <div>
          <label htmlFor="my_modal_7">
            {userName}
          <FaUser className="h-16 w-16 fill-white pb-5 " />
          </label>
          <Profile/>
        </div>
      </nav>
    </>
  );
};

export default NavbarDashboard;
