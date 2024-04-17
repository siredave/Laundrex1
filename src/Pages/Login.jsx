import React, {useState} from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {API_URI} from "../Apis/Api"

// when getting the error message of "422" we use this headers to change the content type from the json type to "application/x-www-form-urlencoded" this is so because the backend sets the content type 
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded', // Set the desired content type here
  },
};


const Login = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  };
  const Login = (e) => {
    e.preventDefault();
    // validation: to prevent the user for submitting an empty folder
    if (
      formFields.username == "" ||
      formFields.password == ""
    ) {
      alert("please enter all fields");
    }
    // posting to axio
    console.log(formFields);
    axios
      .post(`${API_URI}/login/oauth`, {
        ...formFields,
      }, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <div className="w-[45%]">
          <div className="flex flex-row justify-center items-center pt-10 pr-[350px] gap-3">
            <img
              src="/logo.jpg"
              alt="logo"
              className="h-[50px] w-[50px] rounded-3xl object-fill"
            />
          </div>
          <div className="flex flex-col justify-center pt-5 ">
            <h1 className="text-[#3272A4] font-extrabold text-[40px] pl-28">
              Welcome
            </h1>
            <p className="text-[40px] leading-5 pl-28 text-[#121749] font-light">
              {" "}
              Login to wash{" "}
            </p>
          </div>
          <form className="flex flex-col pt-7 pl-28 gap-5" onSubmit={Login}>
            <div className="flex flex-col">
              <span>Email</span>
              <input
                type="username"
                className="border-0 outline-0 focus:border-red-900 border-b-2 border-[#3272A4] w-[350px] leading-3"
                value={formFields.username}
                onChange={handleChange}
                name="username"
              />
       </div>
            <div class="relative">
              <input
                type="password"
                class="peer border-0 outline-none placeholder:text-transparent border-b-2 w-[350px] leading-7 border-[#3272A4]"
                placeholder="Password"
                value={formFields.password}
                onChange={handleChange}
                name="password"
              />
              <label class="absolute left-0 -top-1/2 translate-y-1/2 peer-focus:-top-8 transition-all duration-100 peer-placeholder-shown:-top-1/2">
                Password
              </label>
            </div>

            {/* <div className="relative">
              <input type="password" 
              className="peer border-0 outline-none placeholder:text-transparent border-b-2 w-[350px] leading-7 border-[#3272A4]"
              placeholder="Password"
              />
              <label 
              className="absolute left-0 -top-4 translate-y-1/2 peer-focus:-top-8 transition-all duration-500 peer-placeholder-shown:-top-1/2"> Password </label>
            </div> */}
            <div className="flex flex-row justify-between w-[350px]">
              <div className="flex flex-row items-start ">
                <input type="checkbox" className="h-[15px] " />
                <p className="pl-[10px] text-[11px]">Remember Me</p>
              </div>
              <div>
                <p className="text-[11px]">
                  <Link to="/forget">Forgot Password ?</Link>
                </p>
              </div>
            </div>
            <div className="pt-8">
              <button className="w-[350px] h-[40px] rounded-xl bg-[#3272A4]">
                <p className="text-white">LOGIN</p>
              </button>
            </div>
            <div className="flex flex-row items-center ml-3 mt-5 gap-1">
              <hr className="h-[2px] w-[100px] bg-[#3272A4]" />
              <p className="pb"> or login with </p>
              <hr className="h-[2px] w-[100px] bg-[#3272A4]" />
            </div>
            <div className="flex flex-row items-center gap-7 ml-[110px]">
              <FcGoogle className="size-full max-w-[35px]" />
              <FaFacebook className="size-full max-w-[35px] fill-blue-800" />
            </div>
            <div>
              <p className="text-[#3272A4] text-[11px] font-light">
                Don't have an account?{" "}
                <b className="font-semibold">
                  <Link to="/register">Sign up </Link>
                </b>
              </p>
            </div>
          </form>
        </div>
        <div
          className="w-[55%] h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/login.jpg')" }}
        ></div>
      </div>
    </>
  );
};

export default Login;

