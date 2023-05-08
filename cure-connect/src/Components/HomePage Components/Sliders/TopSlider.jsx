import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import  './styles/TopSlider.css'
import { Image } from "@chakra-ui/react";

// import required modules
import { Autoplay,Pagination, Navigation } from "swiper";


export default function TopSlider({data,autoplay,isRounded,speed}) {

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
        key = {Math.random()}
        slidesPerView={1}
        loop={true}
        speed={speed || '800'}
        autoplay={autoplay === false ? false : {
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
      
        {data.map((el,i) => {
        return <Box overflow={'hidden'}>
                  <SwiperSlide  className={'slides'}>
                    <Image cursor={'pointer'} borderRadius={isRounded ? '14px' : ''} src = {el.img}/>
                  </SwiperSlide>
        </Box>})}

      </Swiper>
    </>
  );
}
