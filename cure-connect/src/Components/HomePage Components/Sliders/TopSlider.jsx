import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import  './styles/TopSlider.css'
import { Image } from "@chakra-ui/react";

// import required modules
import { Autoplay,Pagination, Navigation } from "swiper";


export default function TopSlider() {

  const [isNavigation, setNavigation] = useState(true);

  useEffect(() => {

    function handleResize() {
      if (window.innerWidth <= 620) {
        setNavigation(false);
      } else {
        setNavigation(true);
      }
    }
    // listen for resize events
    window.addEventListener("resize", handleResize);
  
    handleResize();



  },[isNavigation]);


  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        speed={'800'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={isNavigation}
        modules={[Autoplay,Pagination,Navigation]}
        className={'mySwiper'}
      >
        {/* ----1--- */}
        <SwiperSlide className={'slides'}>
          <Image src = 'https://img7.hkrtcdn.com/27423/bnr_2742256_o.jpg'/>
        </SwiperSlide>

        {/* ----2---- */}
        <SwiperSlide className={'slides'}>
          <Image src = 'https://img7.hkrtcdn.com/27424/bnr_2742386_o.jpg'/>
        </SwiperSlide>

        {/* ----3---- */}
        <SwiperSlide className={'slides'}>
          <Image src = 'https://img7.hkrtcdn.com/27423/bnr_2742266_o.jpg'/>
        </SwiperSlide>

        {/* ----4---- */}
        <SwiperSlide className={'slides'}>
          <Image src = 'https://img7.hkrtcdn.com/27423/bnr_2742296_o.jpg'/>
        </SwiperSlide>

        {/* ----5---- */}
        <SwiperSlide className={'slides'}>
          <Image src = 'https://img9.hkrtcdn.com/27423/bnr_2742278_o.jpg'/>
        </SwiperSlide>

        {/* ----6---- */}
        <SwiperSlide className={'slides'}>
          <Image src = 'https://img7.hkrtcdn.com/27432/bnr_2743156_o.jpg'/>
        </SwiperSlide>

        {/* ----7---- */}
        <SwiperSlide className={'slides'}>
          <Image src = 'https://img3.hkrtcdn.com/27424/bnr_2742382_o.jpg'/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
