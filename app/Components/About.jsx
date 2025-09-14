"use client"
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";


const About = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
  });

  return (
    <div className="bg-gradient-to-b  from-[#112f20] to-blackk pb-7 min-h-screen flex flex-col w-full text-white">
      <div className="lg:px-32 px-10">
        <h1 className="text-center text-5xl mt-28">
          From Idea to Live Landing Page in{" "}
          <span className="text-[#1FFFA5]"> Just 5 Days</span>
        </h1>
        <p className="text-center text-[16px] mt-5 text-[#F5F5F5]">
          Our streamlined process ensures fast delivery without compromising
          quality.
        </p>

        {/* 3 Day Process Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
          {/* Card 1 */}
          <div className="bg-[#192420] rounded-xl p-9 relative flex flex-col items-center text-center">
            <div className="bg-[#192420] text-[#1FFFA5] border border-[#1FFFA5] text-sm px-3 py-1 rounded-full absolute -top-4">
              Day 1
            </div>
            <div className="bg-[#003D25] rounded-full p-6 mt-6 flex justify-center items-center">
              <Image
                src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757702746/User_zdb3vl.png"
                alt="User Icon"
                width={36}
                height={36}
              />
            </div>
            <h1 className="text-xl mt-6">Book Your Project</h1>
            <p className="text-[#B2B2B2] text-sm mt-1">
              Fill out a short form and we'll get started immediately.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#192420] rounded-xl p-9 relative flex flex-col items-center text-center">
            <div className="bg-[#192420] text-[#1FFFA5] border border-[#1FFFA5] text-sm px-3 py-1 rounded-full absolute -top-4">
              Day 2-4
            </div>
            <div className="bg-[#003D25] rounded-full p-6 mt-6 flex justify-center items-center">
              <Image
                src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757747069/CurrencyDollar_ztj3vv.png"
                alt="Dollar Icon"
                width={36}
                height={36}
              />
            </div>
            <h1 className="text-xl mt-6">Book Your Project</h1>
            <p className="text-[#B2B2B2] text-sm mt-1">
              Fill out a short form and we'll get started immediately.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#192420] rounded-xl p-9 relative flex flex-col items-center text-center">
            <div className="bg-[#192420] text-[#1FFFA5] border border-[#1FFFA5] text-sm px-3 py-1 rounded-full absolute -top-4">
              Day 5
            </div>
            <div className="bg-[#003D25] rounded-full p-6 mt-6 flex justify-center items-center">
              <Image
                src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757747070/Lightning_vkduhw.png"
                alt="Lightning Icon"
                width={36}
                height={36}
              />
            </div>
            <h1 className="text-xl mt-6">Book Your Project</h1>
            <p className="text-[#B2B2B2] text-sm mt-1">
              Fill out a short form and we'll get started immediately.
            </p>
          </div>
        </div>
      </div>

    
      <div className="lg:mt-36 mt-20 lg:pl-20">
        <h1 className="text-5xl px-4">What Our Clients Are Saying <span className="text-[#1FFFA5]"> About Us</span></h1>
        <p className="text-[#F5F5F5] text-[16px] mt-3 px-4">
          Real feedback from real businesses who've seen real results.
        </p>

        <div ref={sliderRef} className="keen-slider mt-12 pl-4">
          {/* card-1 */}
          <div className="keen-slider__slide bg-[#192420] rounded-[12px] px-6 pb-6">
            <div className="mt-8 mb-6">
            <ul className="flex gap-2">
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
            </ul>
            </div>
            <p className="mt-1 mb-10">
             "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!"
            </p>
            <div className="flex items-center gap-3 mt-5">
              <span>
                <Image
                  src={
                    "https://res.cloudinary.com/dgisrhgoe/image/upload/v1757847631/724a2b74ea81bad794d43ad0d54c7b88adab082b_svt7xm.png"
                  }
                  width={36}
                  height={36}
                  className="rounded-full"
                  alt="Profile"
                />
              </span>
              <span>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-[12px]">SaaS Founder</p>
              </span>
            </div>
          </div>

          {/* Card-2 */}
          <div className="keen-slider__slide bg-[#192420] rounded-[12px] px-6 pb-6">
           <div className="mt-8 mb-6">
            <ul className="flex gap-2">
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
            </ul>
            </div>
            <p className="mt-1 mb-10">
             “Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before."
            </p>
            <div className="flex items-center gap-3 mt-5">
              <span>
                <Image
                  src={
                    "https://res.cloudinary.com/dgisrhgoe/image/upload/v1757847631/d775736db44e292e17b20fadb74b909886e4e496_p3xp9m.png"
                  }
                  width={36}
                  height={36}
                  className="rounded-full"
                  alt="Profile"
                />
              </span>
              <span>
                <p className="font-semibold">Mike Chen</p>
                <p className="text-[12px]">Fitness Coach</p>
              </span>
            </div>
          </div>

          {/* Card-3 */}
          <div className="keen-slider__slide bg-[#192420] rounded-[12px] px-6 pb-6">
            <div className="mt-8 mb-6">
            <ul className="flex gap-2">
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
            </ul>
            </div>
            <p className="mt-1 mb-10">
              "Best investment for my business. The ROI was immediate and substantial. Will definitely order again."
            </p>
            <div className="flex items-center gap-3 mt-5">
              <span>
                <Image
                  src={
                    "https://res.cloudinary.com/dgisrhgoe/image/upload/v1757847631/e30c36fc83c466638bd211bf530e06ecd17e9a82_pgid7u.png" 
                  }
                  width={36}
                  height={36}
                  className="rounded-full"
                  alt="Profile"
                />
              </span>
              <span>
                <p className="font-semibold">Amanda Rodriguez</p>
                <p className="text-[12px]">E-Commerce Owner</p>
              </span>
            </div>
          </div>
          {/* Card-4 */}
          <div className="keen-slider__slide bg-[#192420] rounded-[12px] px-6 pb-6">
           <div className="mt-8 mb-6">
            <ul className="flex gap-2">
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
              <li className="text-xl text-[#1FFFA5]"><FaStar/></li>
            </ul>
            </div>
            <p className="mt-1 mb-10">
             "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!"
            </p>
            <div className="flex items-center gap-3 mt-5">
              <span>
                <Image
                  src={
                    "https://res.cloudinary.com/dgisrhgoe/image/upload/v1757847631/def21b52a64995bb2ec099123ac14b92d6e60ae8_me8kdc.png"
                  }
                  width={36}
                  height={36}
                  className="rounded-full"
                  alt="Profile"
                />
              </span>
              <span>
                <p className="font-semibold">David Lee</p>
                <p className="text-[12px]">SaaS Founder</p>
              </span>
            </div>
          </div>

        </div>
      </div>

      <div className="lg:px-32 px-10 mt-36 mb-10 text-center">
       <h1 className="text-5xl">Got Questions<span className="text-[#1FFFA5]">? </span>  We’ve Got The Answers</h1>

      <div>

        <div className="bg-[#192420] p-6 rounded-xl my-4">
          <FaCircle className="text-[#1FFFA5] text-[12px] mb-4"/>
          <h1 className="text-2xl text-start">How long does it take?How long does it take?</h1>
          <p className="text-[#B2B2B2] text-sm text-start mt-4">5 days from start to finish - design, development, and deployment included.</p>
            
        </div>
        <div className="bg-[#192420] p-6 rounded-xl my-4">
          <FaCircle className="text-[#1FFFA5] text-[12px] mb-4"/>
          <h1 className="text-2xl text-start">Do you provide revisions?</h1>
          <p className="text-[#B2B2B2] text-sm text-start mt-4">Yes, unlimited revisions until you're 100% satisfied with the final result.</p>
            
        </div>
        <div className="bg-[#192420] p-6 rounded-xl my-4">
          <FaCircle className="text-[#1FFFA5] text-[12px] mb-4"/>
          <h1 className="text-2xl text-start">What's the payment process?</h1>
          <p className="text-[#B2B2B2] text-sm text-start mt-4">50% upfront to get started, 50% after final delivery and your approval.</p>
            
        </div>
        <div className="bg-[#192420] p-6 rounded-xl my-4">
          <FaCircle className="text-[#1FFFA5] text-[12px] mb-4"/>
          <h1 className="text-2xl text-start">Can you deploy on my hosting?</h1>
          <p className="text-[#B2B2B2] text-sm text-start mt-4">Absolutely! Deployment is included in every package, on your hosting or ours.</p>
            
        </div>
        <div className="bg-[#192420] p-6 rounded-xl my-4">
          <FaCircle className="text-[#1FFFA5] text-[12px] mb-4"/>
          <h1 className="text-2xl text-start">Why are your prices so affordable compared to agencies?</h1>
          <p className="text-[#B2B2B2] text-start text-sm mt-4">We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.</p>
        </div>

      </div>
      </div>
    </div>
  );
};

export default About;
