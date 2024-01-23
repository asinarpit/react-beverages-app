import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ data }) {
  const [slidesPerView, setSlidesPerView] = useState(3);
  

  useEffect(() => {
    // Update slides per view based on the viewport width
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="product-carousel-wrapper flex flex-col bg-white my-10">
      <Swiper
        slidesPerView={slidesPerView}
        // centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper !p-5"
      >
        {data
          .filter((item, index) => index < 6)
          .map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
