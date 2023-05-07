import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {AiFillStar} from 'react-icons/ai'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from './styles/blockbuster.module.css'

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react";

export default function BlockbusterSlider({data}) {

    const {colorMode} = useColorMode();

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
        navigation={isNavigation}
        pagination={false}
        modules={[Pagination,Navigation]}
        className={style.mySwiper}
    >
        {data.map ((el) => {
        
            return <SwiperSlide className={style.slide}>
                        <Box>
                            <Box overflow={'hidden'} position={'relative'} bg = 'white' p = '10%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <Image _hover={{transform : 'scale(1.4)'}} transition={'0.5s'} w = '70%' src = {el.img}></Image>
                                <Image w = '11%' cursor={'pointer'} top = '10px' right={'10px'} position={'absolute'} src = 'https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/heart.svg'></Image>
                                <HStack display = {el.offer ? 'flex' : 'none'} color={'white'} bottom={'8px'} right={'10px'} borderRadius={'3px'} px = '10px' py = '2px' position={'absolute'} bg = '#249346'>
                                    <Image src = 'https://static1.hkrtcdn.com/hknext/static/media/common/variant/freebie-old.svg'></Image>
                                    <Text fontSize={12}>{el.offer}</Text>
                                </HStack>
                            </Box>
                            
                            <Box bg = '#00e5ff1f'  p = '10px'>

                                <HStack visibility = {el.ratings ? 'visible' : 'hidden'} justify={'space-between'}>
                                    <HStack>
                                        <HStack borderRadius={'2px'} px = '5px' bg = '#00b5b7' py={'1px'}>
                                            <Text color={'#fff'} fontSize={11}>{el.ratings}</Text>
                                            <AiFillStar color={'#fff'} size = '11px'/>
                                        </HStack>
                                        <Text color = {colorMode === 'light' ? '' : 'gray.400'} fontSize={'11px'}>{el.reviews} reviews</Text>
                                    </HStack>

                                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w='15px' h = '15px' border = '1px solid' borderColor={el.tag==='veg' ? 'green' : 'red'}>
                                        <Box bg = {el.tag==='veg' ? 'green' : 'red'} w = '8px' h = '8px' borderRadius={'50%'}></Box>
                                    </Box>
                                </HStack>

                                <Text lineHeight={'2'} mt = '10px' noOfLines={2} fontSize={'13px'}>{el.title}</Text>

                                <HStack mt = '10px'>
                                    <Text fontSize={14} fontWeight={'600'}>₹ {el.price}</Text>
                                    <Text fontSize={13} color = {colorMode === 'light' ? '#8f8d8d' : '#c8c4c4'} as = 'del'>₹ {el.offer_price}</Text>
                                    <Text fontSize={11} color = {colorMode === 'light' ? '#08a157' : 'green.300'}>{el.discount}</Text>
                                </HStack>

                                <HStack visibility={el.isPremium ? 'visible' : 'hidden'} mt = '10px' borderRadius={'3px'} bg = '#20eca535' p = '5px' justify={'center'} alignItems={'center'} fontSize={'12'}>
                                    <Image w = '18px' src = {'https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg'}></Image>
                                    <Text>₹ {el.premium_price}</Text>
                                    <Text>for Premium Member</Text>
                                </HStack>

                                <Button variant={'none'} _hover = {{backgroundColor : '#00f0f9', color : 'white'}} border = '1px solid' borderColor = '#00ffe5' fontSize={'13'} mt = '10px' w = '100%'>Add To Cart</Button>
                            </Box>


                        </Box>
            </SwiperSlide>
})}

    </Swiper>
    </>
);
}
