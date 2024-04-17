import React from "react";

const Forget = () => {
  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <div className="w-[40%] pt-20">
          <div className="flex flex-row justify-center items-center pt-10 pr-[350px] gap-3">
            <img
              src="/logo.jpg"
              alt="logo"
              className="h-[50px] w-[50px] rounded-3xl object-fill"
            />
          </div>
          <div className="flex flex-col justify-center pt-5 ">
            <h1 className="text-[#3272A4] font-extrabold text-[20px] pl-28">
              Forgot your Password ?
            </h1>
          </div>
          <form className="flex flex-col pt-7 pl-28 gap-5 ">
            <div class="relative">
              <input
                type="email"
                class="peer border-0 outline-none placeholder:text-transparent border-b-2 w-[350px] leading-7 border-[#3272A4]"
                placeholder="Password"
              />
              <label class="absolute left-0 -top-1/2 translate-y-1/2 peer-focus:-top-8 transition-all duration-500 peer-placeholder-shown:-top-1/2">
                Email
              </label>
            </div>
            <div className="pt-8">
              <button className="w-[350px] h-[40px] rounded-xl bg-[#3272A4]">
                <p className="text-white"> RESET PASSWORD </p>
              </button>
            </div>
          </form>
        </div>
        <div
          className="w-[60%] h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/login.jpg')" }}
        ></div>
      </div>
    </>
  );
};

export default Forget;
