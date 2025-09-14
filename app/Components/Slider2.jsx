import Image from "next/image";

const Slider2 = () => {
  return (
    <div className="bg-[#0A0F0D] text-[#fff] w-full py-24">
      <h1 className="text-center text-5xl">Case Studies</h1>
      <p className="text-center text-[16px]">See the designs that delivered results</p>

      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-[#172420] p-3 rounded-xl ">
          <Image
            src={"https://res.cloudinary.com/dgisrhgoe/image/upload/v1757748516/581532182df6bf4cbcf527933b36f522bd5853c6_1_v7lqlv.png"}
            alt="pc-1"
            width={559}
            height={372}
          />
          <div className="lg:flex justify-between gap-2 mt-3">
            <span><p>GrowthSummit</p></span>
            <span className="text-sm space-y-2 text-[10px] text-[#B2B2B2]">
              <p className="bg-[#003D25] rounded-xl px-2 py-1">✅20% high conversion than average in first week</p>
              <p className="bg-[#003D25] rounded-xl px-2 py-1">✅Clean and modern design with clear CTA</p>
            </span>
          </div>
        </div>

        <div className="bg-[#172420] p-3 rounded-xl">
          <Image
            src={"https://res.cloudinary.com/dgisrhgoe/image/upload/v1757748524/498603e99c0e796ff38e7504ccf985bf769e30e0_1_zbukts.png"}
            alt="pc-1"
            width={559}
            height={372}
          />
          <div className="lg:flex justify-between gap-2 mt-3">
            <span><p>GrowthSummit</p></span>
            <span className="text-sm space-y-2 text-[10px] text-[#B2B2B2]">
              <p className="bg-[#003D25] rounded-xl px-2 py-1">✅20% high conversion than average in first week</p>
              <p className="bg-[#003D25] rounded-xl px-2 py-1">✅Clean and modern design with clear CTA</p>
            </span>
          </div>
        </div>

        <div className="bg-[#172420] p-3 rounded-xl">
          <Image
            src={"https://res.cloudinary.com/dgisrhgoe/image/upload/v1757748480/1ccaa889ad6054e02ee1944de600d7c9986e58af_2_lqwqdi.png"}
            alt="pc-1"
            width={559}
            height={372}
          />
          <div className="lg:flex justify-between gap-2 mt-3">
            <span><p>GrowthSummit</p></span>
            <span className="text-sm space-y-2 text-[10px] text-[#B2B2B2]">
              <p className="bg-[#003D25] rounded-xl  px-2 py-1">✅20% high conversion than average in first week</p>
              <p className="bg-[#003D25] rounded-xl px-2 py-1">✅Clean and modern design with clear CTA</p>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="text-black bg-[#1FFFA5] py-4 px-8 rounded-[8px]">I want similar results</button>
      </div>


      <div className="mt-44 lg:px-28 px-10">
        <h1 className="text-4xl">Simple, Transparent Pricing — <span className="text-[#1FFFA5]"> Choose Your Plan</span></h1>
        <p className="text-[16px] mt-2">No hidden fees, no surprises. Just premium landing pages at unbeatable prices.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">

          {/* Basic Plan */}
          <div className="bg-[#192420] p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="text-white">
                  <h1 className="text-2xl font-semibold">Basic</h1>
                  <p className="text-sm text-gray-400">Perfect for solopreneurs</p>
                </div>
                <div className="text-2xl text-[#1FFFA5] font-bold">$200</div>
              </div>
              <hr className="border-gray-700" />
              <ul className="mt-8 space-y-3 text-gray-300">
                <li>1 Landing Page (Design + Development)</li>
                <li>Hosting Deployment</li>
                <li>5-Day Delivery</li>
                <li>Basic Support</li>
              </ul>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="bg-[#003D25] text-[#00E58A] px-8 py-3 rounded-xl hover:bg-[#005432] transition">
                Start my project
              </button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="relative bg-[#192420] p-8 rounded-2xl border-2 border-[#1FFFA5] flex flex-col justify-between">
            <div className="absolute -top-4 left-4 px-3 py-1 text-sm font-medium bg-[#192420] border-2 border-[#1FFFA5] rounded-full text-[#1FFFA5]">
              Most Popular
            </div>
            <div>
              <div className="flex justify-between items-start">
                <div className="text-white">
                  <h1 className="text-2xl font-semibold">Standard</h1>
                </div>
                <div className="text-2xl text-[#1FFFA5] font-bold">$300</div>
              </div>
              <p className="text-sm text-gray-400 mb-8">Best balance of value & features</p>
              <hr className="border-gray-700" />
              <ul className="mt-8 space-y-3 text-gray-300">
                <li>Everything in Basic</li>
                <li>Ectra Custom Section</li>
                <li>Free Hosting Setup</li>
                <li>Free Consultation call</li>
                <li>Priority Support</li>
              </ul>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="bg-[#1FFFA5] text-black px-8 py-3 rounded-xl hover:bg-[#0FCC8F] transition">
                Start my project
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#192420] p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="text-white">
                  <h1 className="text-2xl font-semibold">Premium</h1>
                  <p className="text-sm text-gray-400">For brands & agencies</p>
                </div>
                <div className="text-2xl text-[#1FFFA5] font-bold">$500</div>
              </div>
              <hr className="border-gray-700" />
              <ul className="mt-8 space-y-3 text-gray-300">
                <li>Everything in Standard</li>
                <li>Advanced Animations</li>
                <li>Priority Delivery (3 Days)</li>
                <li>6 Months Free Support</li>
                <li>Performance optimization</li>
              </ul>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="bg-[#003D25] text-[#00E58A] px-8 py-3 rounded-xl hover:bg-[#005432] transition">
                Start my project
              </button>
            </div>
          </div>

        </div>

      </div>

      <div className=" lg:px-28 px-10 flex items-center my-10 gap-5">
        <span>
           <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757747070/Lightning_vkduhw.png"
            alt="Lightning Icon"
            width={40}
            height={40}
            className=""
          />
        </span>
        <span>
          <h1>Limited Availability</h1>
          <p>We only onboard 5 new clients per month. 2 spots left for this month — secure yours today.</p>
        </span>
      </div>

      <div className="bg-[#192420] p-12 lg:mx-28 mx-10 rounded-2xl">
        <h1 className="text-center text-5xl">Special Offer For Early Clients</h1>
        <p className="text-center text-[16px] mt-5">Get 10% OFF + Free Hosting Setup when you book this week.</p>
        <div className="flex justify-center mt-12">
          <button className="px-8 py-4 bg-[#1FFFA5] text-black rounded-2xl">Claim my 10% discount</button>
        </div>
      </div>

    </div>
  );
};

export default Slider2;