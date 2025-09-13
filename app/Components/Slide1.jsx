"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Slide1 = () => {
  return (
    <div className="w-full mt-20">
      <Swiper
        modules={[ Autoplay]}
        spaceBetween={20}
        slidesPerView={2} // 👈 প্রতি স্লাইডে ২টা ইমেজ
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="rounded-2xl shadow-lg"
      >
        <SwiperSlide>
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757743255/Size_Default_nex3ca.png"
            alt="Slide 1"
            width={960}
            height={540}
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757745704/Size_Default_1_p7fkut.png"
            alt="Slide 2"
            width={960}
            height={50}
            className=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757745814/Size_image_1_gebemt.png"
            alt="Slide 3"
            width={960}
            height={540}
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757745835/f589fcf4efd8a0200cb93bf407a117471251abb2_abi4wo.png"
            alt="Slide 3"
            width={960}
            height={540}
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1757745823/05277202ae95eea6fb8fa62238bee7417cfd9db9_z2axbc.png"
            alt="Slide 3"
            width={960}
            height={540}
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide1;
