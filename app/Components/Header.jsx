"use client"

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
    return (
        <div className="flex mt-5 flex-col items-center justify-center min-h-screen">

            <Image
                className="mb-20"
                src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757699739/Logo_1_iz0jbd.png"
                alt="Logo"
                width={150}
                height={50}
            />
            <div className="bg-[#0a1b13] text-white px-4 py-2 rounded-md border-t-2 border-[#26d483] text-center shadow-md shadow-[#26d483]/30">
                <h1 className="text-sm sm:text-base">
                    Trusted by 30+ startups & entrepreneurs worldwide
                </h1>
            </div>


            <h1 className="text-center lg:text-7xl md:text-5xl text-4xl  lg:mx-10 md:mx-20 text-white mt-10">Strategic Landing Pages That Convert From Just $200</h1>
            <p className="text-center opacity-70 lg:mx-52 px-20  text-white mt-10 ">Stop wasting traffic on generic pages. We deliver premium, conversion-focused landing pages designed, developed, and launched in just 5 days.</p>

          <div className="px-5 md:px-12 lg:px-36 xl:px-48">
  <div className="mt-10 border border-[#2A3C36] shadow-md shadow-green-800 p-6 md:p-10 lg:p-12 rounded-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      
      {/* Name Input */}
      <div className="flex items-center gap-2 border border-[#2A3C36] bg-transparent text-white px-4 py-2 rounded-md focus-within:border-[#26d483]">
        <Image
          src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757702746/User_zdb3vl.png"
          alt="User Icon"
          width={20}
          height={20}
        />
        <input
          type="text"
          placeholder="Your name"
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
        />
      </div>

      {/* Email Input */}
      <div className="flex items-center gap-2 border border-[#2A3C36] bg-transparent text-white px-4 py-2 rounded-md focus-within:border-[#26d483]">
        <Image
          src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757702746/EnvelopeSimpleOpen_dmvbmi.png"
          alt="Email Icon"
          width={20}
          height={20}
        />
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
        />
      </div>

      {/* Phone Input */}
      <div className="flex items-center gap-2 border border-[#2A3C36] bg-transparent text-white px-4 py-2 rounded-md focus-within:border-[#26d483]">
        <Image
          src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757702745/Phone_gg9bbl.png"
          alt="Phone Icon"
          width={20}
          height={20}
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
        />
      </div>
    </div>

    <button className="w-full flex justify-center items-center gap-2 bg-[#1FFFA5] text-black mt-5 rounded-md p-3 hover:bg-[#17e694] transition">
      Get my high-converting landing page <FaArrowRight />
    </button>
  </div>
</div>


          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mt-5 text-white opacity-80 text-sm sm:text-base">
  <p className="flex items-center gap-2">
    <Image
      src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757703336/Lock_stidi6.png"
      alt="Lock Icon"
      width={20}
      height={20}
    />
    SSL secure
  </p>

  <p className="flex items-center gap-2">
    <Image
      src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757703310/Check_mnahzg.png"
      alt="Coins Icon"
      width={20}
      height={20}
    />
    Money-back guaranteed
  </p>

  <p className="flex items-center gap-2">
    <Image
      src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757703311/Star_bezrfw.png"
      alt="Star Icon"
      width={20}
      height={20}
    />
    Satisfaction guaranteed
  </p>
</div>


        </div>
    );
};

export default Header;
