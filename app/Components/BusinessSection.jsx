import Image from "next/image";

const BusinessSection = () => {
  return (
    <section className="py-24 text-white bg-[#192420] w-full">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center px-5">
        <h1 className="text-4xl">
          Why Businesses
          <span className="text-[#1FFFA5]"> Trust Us </span>
          With Their Designs
        </h1>
        <p className="text-[#B2B2B2] text-sm mt-3">
          We combine proven conversion frameworks with agency-level design to
          deliver results that matter.
        </p>
      </div>

      {/* Grid Section */}
      <div className="mt-10  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-5 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#192420] border border-[#2A3C36] shadow-md p-6 rounded-[8px] hover:shadow-lg transition">
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757747069/RocketLaunch_mag0dw.png"
            alt="Rocket Launch Icon"
            width={40}
            height={40}
            className="mb-6"
          />
          <h2 className="text-lg font-semibold mb-2">
            Proven Conversion Framework
          </h2>
          <p className="text-[#B2B2B2] text-sm">
            Designs based on 100+ tested layouts that actually convert visitors
            into customers.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#192420] border border-[#2A3C36] shadow-md p-6 rounded-[8px] hover:shadow-lg transition">
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757747070/Palette_p8bl09.png"
            alt="Palette Icon"
            width={40}
            height={40}
            className="mb-6"
          />
          <h2 className="text-lg font-semibold mb-2">Agency Level Design</h2>
          <p className="text-[#B2B2B2] text-sm">
            Modern, premium, and tailored for your brand — without the agency
            price tag.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#192420] border border-[#2A3C36] shadow-md p-6 rounded-[8px] hover:shadow-lg transition">
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757747070/Lightning_vkduhw.png"
            alt="Lightning Icon"
            width={40}
            height={40}
            className="mb-6"
          />
          <h2 className="text-lg font-semibold mb-2">
            5-day Guaranteed Delivery
          </h2>
          <p className="text-[#B2B2B2] text-sm">
            With a highly professional team, we deliver on time, every time.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#192420] border border-[#2A3C36] shadow-md p-6 rounded-[8px] hover:shadow-lg transition">
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757747069/CurrencyDollar_ztj3vv.png"
            alt="Dollar Icon"
            width={40}
            height={40}
            className="mb-6"
          />
          <h2 className="text-lg font-semibold mb-2">Transparent Pricing</h2>
          <p className="text-[#B2B2B2] text-sm">
            No hidden fees, just clear value. What you see is what you pay.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-[#192420] border border-[#2A3C36] shadow-md p-6 rounded-[8px] hover:shadow-lg transition">
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757747069/ArrowsClockwise_sopiur.png"
            alt="Arrows Icon"
            width={40}
            height={40}
            className="mb-6"
          />
          <h2 className="text-lg font-semibold mb-2">
            Revisions Until You're Happy
          </h2>
          <p className="text-[#B2B2B2] text-sm">
            We keep working until it's right. Your satisfaction is guaranteed.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-[#192420] border border-[#2A3C36] shadow-md p-6 rounded-[8px] hover:shadow-lg transition">
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757747069/Trophy_n6x8kq.png"
            alt="Trophy Icon"
            width={40}
            height={40}
            className="mb-6"
          />
          <h2 className="text-lg font-semibold mb-2">Results That Speak</h2>
          <p className="text-[#B2B2B2] text-sm">
            Our pages consistently outperform industry averages for conversions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
