import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Newsletter = () => {
    return (
        <div className="bg-gradient-to-b from-[#1b3c2c] to-black w-full py-24 ">
            <h1 className="text-center lg:text-7xl text-5xl text-white lg:px-32">Ready to Turn Visitors Into
                <span className="text-[#1FFFA5]"> Real Customers?</span>
            </h1>
            <p className="text-[#F5F5F5] text-center mt-5 mb-10">Don't settle for an average page. Get a premium, conversion-focused
                landing page that pays for itself.</p>


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



        </div>
    );
};

export default Newsletter;