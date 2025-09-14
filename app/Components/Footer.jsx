import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#1FFFA5] py-10 px-5">
      <div className="flex justify-between gap-5">
        
        {/* Logo */}
        <div>
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757861565/Logo_yu5paj.png"
            alt="Logo"
            width={150}
            height={50}
          />
        </div>

        {/* Text */}
       <div className="lg:flex xl:flex md:flex justify-between lg:gap-72 md:gap-44 items-center">
         <div>
          <h1 className="text-[#161e1b] text-[12px]">
            © All rights reserved to <br className="lg:hidden" />
            Ena Ema Technologies
          </h1>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757861792/Frame_63_r4hzyy.png"
            alt="social-icons"
            width={205}
            height={80}
          />
        </div>
       </div>
      </div>
    </div>
  );
};

export default Footer;
