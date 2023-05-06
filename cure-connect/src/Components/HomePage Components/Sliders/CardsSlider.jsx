// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from './styles/blockbuster.module.css'

// import required modules
import { Pagination, Navigation } from "swiper";
import { Image } from "@chakra-ui/react";

export default function CardSlider({data}) {

return (
    <>
    <Swiper
        slidesPerView={1}
        speed={'800'}
        slidesPerGroup = {1}
        spaceBetween={10}
        breakpoints={
            {
                1293 :{
                    slidesPerView : 4,
                    slidesPerGroup : 4
                },

                925 :{
                    slidesPerView : 3,
                    slidesPerGroup : 3
                },

                612 :{
                    slidesPerView : 2.3,
                    slidesPerGroup : 2
                },

                558 :{
                    slidesPerView : 2,
                    slidesPerGroup : 2
                },

                380 : {
                    slidesPerView : 1.4,
                    slidesPerGroup : 1
                },

                334 : {
                    slidesPerView : 1.2,
                    slidesPerGroup : 1
                }



            }
        }
        navigation={true}
        pagination={false}
        modules={[Pagination,Navigation]}
        className={style.mySwiper}
    >
        {data.map ((el) => {
        
            return <SwiperSlide className={style.slide}>
                        <Image w = '100%' src = {el.img}></Image>
            </SwiperSlide>
})}

    </Swiper>
    </>
);
}
