import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
    Box,
    Stack,
    HStack,
    Text,
    Image,
} from '@chakra-ui/react'

import appstore from '../../../Images/appstore.png';
import playstore from '../../../Images/googleplay.png';
import DarkTheme_cureconnect_Logo from '../../../Images/CureConnect DT-Logo.png'

import { Link } from 'react-router-dom';


import { useDisclosure } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

import {HiMenuAlt1} from 'react-icons/hi'
import {TbDiscount2} from 'react-icons/tb'

import React from 'react'

const DrawerComp = ({isOpen,onClose}) => {

    return (
        <>
            <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            >
            <DrawerOverlay display = {{base : 'block','620px' : 'none'}}/>
            <DrawerContent display = {{base : 'block','620px' : 'none'}}>
                <DrawerCloseButton zIndex={3} bg = 'green.200' borderRadius={'50%'} />

                <Box py = '20px' bg = '#04a381' display = 'flex' justifyContent={'center'} alignItems={'center'}>
                    <Link to = '/login'>
                        <Button fontSize={'13'} borderRadius={'5px'} w = '90%' variant={'none'} bg = '#ffffff' color={'#04a381'}>Login / Sign Up</Button>
                    </Link>
                </Box>

                <DrawerBody>

                    <Stack spacing={'20px'}>
                        <HStack mt = '15px' cursor={'pointer'} borderRadius={'3px'} border={'1px solid'} borderColor={useColorModeValue('#88878790','#90adeab6')} px = '15px' py = '7px'>
                            <HiMenuAlt1 size = '20px' color='#00b5b7'/>
                            <Text fontSize={'13px'} fontWeight={600} color = {useColorModeValue('#77777e','#c1bfbf')}>Categories</Text>
                        </HStack>
                        {/* Best Sellers */}
                        <HStack>
                            <Box mr = '10px'>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5567 19.5C9.35571 19.5 8.14618 19.0402 7.23477 18.1291L3.3762 14.272C2.43924 13.3354 1.94521 12.0412 2.00483 10.7214L2.20926 6.45561C2.30296 4.42062 3.91282 2.81136 5.9571 2.70918L10.216 2.50483C11.5448 2.44523 12.831 2.93908 13.7679 3.87568L17.6265 7.7328C19.4578 9.56345 19.4578 12.5521 17.6265 14.3827L13.8872 18.1206C12.9673 19.0402 11.7662 19.5 10.5567 19.5Z" fill="#33C4C5"></path><path d="M7.5 10.5C6.12308 10.5 5 9.37692 5 8C5 6.62308 6.12308 5.5 7.5 5.5C8.87692 5.5 10 6.62308 10 8C10 9.37692 8.87692 10.5 7.5 10.5ZM7.5 6.65385C6.76154 6.65385 6.15385 7.26154 6.15385 8C6.15385 8.73846 6.76154 9.34615 7.5 9.34615C8.23846 9.34615 8.84615 8.73846 8.84615 8C8.84615 7.26154 8.23846 6.65385 7.5 6.65385Z" fill="white"></path><path d="M10.6802 15.5C10.5073 15.5 10.3344 15.4363 10.1979 15.2999C9.93403 15.0362 9.93403 14.5996 10.1979 14.3358L13.8376 10.6978C14.1015 10.4341 14.5382 10.4341 14.8021 10.6978C15.066 10.9616 15.066 11.3981 14.8021 11.6619L11.1624 15.2999C11.0259 15.4363 10.853 15.5 10.6802 15.5Z" fill="white"></path></svg>
                            </Box>
                            <Link to = '/product'>
                                <Text cursor={'pointer'} fontSize={'13px'} _hover = {{color : '#00b5b7'}} fontWeight={500} color = {useColorModeValue('black','white')}>Best Sellers</Text>
                            </Link>
                        </HStack>

                        {/* Brands */}
                        <HStack>
                            <Box mr = '17px'>
                                <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 6.36341C12.9964 4.67688 12.3101 3.06049 11.0916 1.86783C9.87316 0.675247 8.22173 0.00371928 6.49847 0C0.435452 0 -2.28802 7.47812 2.30352 11.231V17.3105C2.30462 17.4853 2.37331 17.6533 2.4957 17.7805C2.61823 17.9078 2.78531 17.9851 2.96342 17.9967C3.1417 18.0085 3.31793 17.9537 3.45657 17.8437L6.49859 15.3924L9.5335 17.8435C9.63709 17.9264 9.76247 17.9789 9.89512 17.9949C10.0279 18.0108 10.1625 17.9896 10.2834 17.9336C10.4052 17.8785 10.5083 17.7907 10.5809 17.6803C10.6536 17.57 10.6927 17.4417 10.6937 17.3105V11.231C12.1564 10.0193 13 8.23907 13 6.36341ZM9.27195 15.8424L7.39722 14.3261C7.14345 14.1207 6.82447 14.0081 6.49524 14.0081C6.16584 14.0081 5.84686 14.1207 5.59327 14.3261L3.71853 15.8424V12.1173C5.4772 12.9272 7.51316 12.9272 9.27219 12.1173L9.27195 15.8424ZM3.56265 6.14856C3.4229 6.0161 3.37253 5.81734 3.43269 5.63637C3.49286 5.45538 3.65313 5.3237 3.84564 5.29696L5.08367 5.13081C5.25153 5.10577 5.39665 5.00253 5.47277 4.85385L6.02449 3.74597C6.11277 3.57689 6.29042 3.47055 6.48433 3.47055C6.67841 3.47055 6.8559 3.57689 6.94417 3.74597L7.50302 4.85385C7.57581 5.00222 7.71888 5.10593 7.88516 5.13081L9.13031 5.30392C9.32281 5.33066 9.48309 5.46234 9.54326 5.64333C9.60342 5.82431 9.55289 6.02308 9.4133 6.15552L8.51476 7.02104C8.39332 7.13557 8.33774 7.30156 8.36616 7.46415L8.5784 8.67588C8.60398 8.85455 8.52881 9.03276 8.38211 9.14186C8.23541 9.25098 8.03992 9.27401 7.87093 9.20214L6.75324 8.62751C6.60481 8.55116 6.42763 8.55116 6.27917 8.62751L5.16149 9.20214C4.98778 9.31991 4.75802 9.32038 4.58369 9.20368C4.40951 9.08684 4.32692 8.87695 4.37619 8.67586L4.58842 7.46413C4.62001 7.30262 4.56695 7.13631 4.44694 7.02102L3.56265 6.14856Z" fill={useColorModeValue("#77777E",'#d2cece')}></path></svg>
                            </Box>
                            <Text cursor={'pointer'} fontSize={'13px'} _hover = {{color : '#00b5b7'}} fontWeight={500} color = {useColorModeValue('black','white')}>Brands</Text>
                        </HStack>
                        
                        {/* Deals */}
                        <HStack w = '105px'>
                            <Box mr = '10px'>
                                <TbDiscount2 mr = '20px' color ={useColorModeValue("#77777E",'#d2cece')} size = '19px'/>
                            </Box>
                        {/* <Image src = 'https://static1.hkrtcdn.com/hknext/static/media/pdp/deal-icon.svg'></Image> */}
                            <Text cursor={'pointer'} fontSize={'13px'} _hover = {{color : '#00b5b7'}} fontWeight={500} color = {useColorModeValue('black','white')}>Deals</Text>
                        </HStack>

                        {/* Blogs */}
                        <HStack w = '105px'>
                            <Box mr = '10px'>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 16.6971C12.4784 17.0556 11.8221 17.3543 11.0228 17.6189L9.69344 18.0627C6.35323 19.1553 4.59478 18.242 3.50942 14.8534L2.43247 11.482C1.35553 8.0934 2.24737 6.30097 5.58759 5.20844L6.91694 4.7646C7.2619 4.65364 7.59003 4.55975 7.90134 4.5C7.64893 5.02066 7.447 5.65228 7.27873 6.37779L6.45419 9.95412C5.62965 13.5219 6.71501 15.2802 10.2235 16.1252L11.637 16.4666C12.125 16.5861 12.5793 16.6629 13 16.6971Z" fill={useColorModeValue("#77777E",'#d2cece')} stroke={useColorModeValue("#77777E",'#d2cece')} strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.7293 9.06595L17.8802 12.5232C17.1524 15.509 15.7141 16.7166 13.0108 16.4685C12.5776 16.4354 12.1097 16.361 11.6071 16.2452L10.1515 15.9143C6.53844 15.0955 5.42072 13.3917 6.26984 9.9344L7.11895 6.46886C7.29224 5.76583 7.50019 5.15378 7.76012 4.64925C8.77387 2.64767 10.4981 2.11006 13.392 2.76347L14.839 3.08603C18.4694 3.89659 19.5785 5.60868 18.7293 9.06595Z" fill={useColorModeValue("#77777E",'#d2cece')} stroke={useColorModeValue("white",'#001E3C')} strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 7.5L15 8.5" stroke={useColorModeValue("white",'#001E3C')} strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 10.5L12 11.5" stroke={useColorModeValue("white",'#001E3C')} strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </Box>
                            <Text cursor={'pointer'} fontSize={'13px'} _hover = {{color : '#00b5b7'}} fontWeight={500} color = {useColorModeValue('black','white')}>Blogs</Text>
                        </HStack>

                        {/* Gift Card */}
                        <HStack w = '105px'>
                            <Box mr = '15px'>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 3.75025H6.25V7.50025H1.25C0.918479 7.50025 0.600537 7.36855 0.366116 7.13413C0.131696 6.89971 0 6.58177 0 6.25025V5.00025C0 4.66873 0.131696 4.35079 0.366116 4.11636C0.600537 3.88194 0.918479 3.75025 1.25 3.75025H2.835C2.52491 3.2133 2.42543 2.58028 2.55586 1.97411C2.6863 1.36793 3.03734 0.831852 3.54083 0.469968C4.04432 0.108084 4.66433 -0.0537836 5.28047 0.015797C5.8966 0.0853777 6.4649 0.381441 6.875 0.846498C7.2851 0.381441 7.8534 0.0853777 8.46953 0.015797C9.08567 -0.0537836 9.70567 0.108084 10.2092 0.469968C10.7127 0.831852 11.0637 1.36793 11.1941 1.97411C11.3246 2.58028 11.2251 3.2133 10.915 3.75025H12.5C12.8315 3.75025 13.1495 3.88194 13.3839 4.11636C13.6183 4.35079 13.75 4.66873 13.75 5.00025V6.25025C13.75 6.58177 13.6183 6.89971 13.3839 7.13413C13.1495 7.36855 12.8315 7.50025 12.5 7.50025H7.5V3.75025ZM3.75 2.50025C3.75 2.83177 3.8817 3.14971 4.11612 3.38413C4.35054 3.61855 4.66848 3.75025 5 3.75025H6.25V2.50025C6.25 2.16873 6.1183 1.85078 5.88388 1.61636C5.64946 1.38194 5.33152 1.25025 5 1.25025C4.66848 1.25025 4.35054 1.38194 4.11612 1.61636C3.8817 1.85078 3.75 2.16873 3.75 2.50025ZM7.5 3.75025H8.75C8.99723 3.75025 9.2389 3.67694 9.44446 3.53958C9.65002 3.40223 9.81024 3.20701 9.90485 2.9786C9.99946 2.75019 10.0242 2.49886 9.97598 2.25639C9.92775 2.01391 9.8087 1.79118 9.63388 1.61636C9.45907 1.44155 9.23634 1.3225 8.99386 1.27427C8.75139 1.22603 8.50005 1.25079 8.27165 1.3454C8.04324 1.44001 7.84801 1.60022 7.71066 1.80579C7.57331 2.01135 7.5 2.25302 7.5 2.50025V3.75025ZM12.5 8.75025H7.5V15.0002H10C10.663 15.0002 11.2989 14.7369 11.7678 14.268C12.2366 13.7992 12.5 13.1633 12.5 12.5002V8.75025ZM6.25 15.0002V8.75025H1.25V12.5002C1.25 13.1633 1.51339 13.7992 1.98223 14.268C2.45107 14.7369 3.08696 15.0002 3.75 15.0002H6.25Z" fill={useColorModeValue("#77777E",'#d2cece')}></path></svg>
                            </Box>
                            <Text cursor={'pointer'} fontSize={'13px'} _hover = {{color : '#00b5b7'}} fontWeight={500} color = {useColorModeValue('black','white')}>Gift Card</Text>
                        </HStack>

                        {/* Customer Support */}
                        <HStack>
                            <Box mr = '12px'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.37202 0.000997242C3.81186 -0.0686701 0.0899012 3.52044 0.00157589 8.08028C-0.0113566 8.74969 0.055548 9.4014 0.193441 10.0264C0.426867 11.0847 0.565641 12.1617 0.565641 13.2455V15.3404C0.565641 15.6614 0.825812 15.9216 1.1468 15.9216H3.2417C4.32547 15.9216 5.40247 16.0604 6.46081 16.2938C7.08582 16.4316 7.73749 16.4986 8.40689 16.4856C12.9667 16.3973 16.5558 12.6755 16.4863 8.1154C16.4183 3.66442 12.823 0.0689429 8.37202 0.000997242Z" fill={useColorModeValue("#77777E",'#d2cece')}></path><path d="M4.36379 9.95293C5.06898 9.95293 5.64066 9.38125 5.64066 8.67605C5.64066 7.97085 5.06898 7.39917 4.36379 7.39917C3.65859 7.39917 3.08691 7.97085 3.08691 8.67605C3.08691 9.38125 3.65859 9.95293 4.36379 9.95293Z" fill={useColorModeValue("white",'#001E3C')}></path><path d="M7.97512 9.95293C8.68031 9.95293 9.25199 9.38125 9.25199 8.67605C9.25199 7.97085 8.68031 7.39917 7.97512 7.39917C7.26992 7.39917 6.69824 7.97085 6.69824 8.67605C6.69824 9.38125 7.26992 9.95293 7.97512 9.95293Z" fill={useColorModeValue("white",'#001E3C')}></path><path d="M11.586 9.95293C12.2912 9.95293 12.8628 9.38125 12.8628 8.67605C12.8628 7.97085 12.2912 7.39917 11.586 7.39917C10.8808 7.39917 10.3091 7.97085 10.3091 8.67605C10.3091 9.38125 10.8808 9.95293 11.586 9.95293Z" fill={useColorModeValue("white",'#001E3C')}></path></svg>
                            </Box>
                            <Text cursor={'pointer'} fontSize={'13px'} _hover = {{color : '#00b5b7'}} fontWeight={500} color = {useColorModeValue('black','white')}>Customer Support</Text>
                        </HStack>

                        {/* Store locator */}
                        <HStack>
                            <Box mr = '10px'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 8.33325C17.5 14.1666 10 19.1666 10 19.1666C10 19.1666 2.5 14.1666 2.5 8.33325C2.5 6.34413 3.29018 4.43647 4.6967 3.02995C6.10322 1.62343 8.01088 0.833252 10 0.833252C11.9891 0.833252 13.8968 1.62343 15.3033 3.02995C16.7098 4.43647 17.5 6.34413 17.5 8.33325Z" fill={useColorModeValue("#77777E",'#d2cece')}></path><path d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z" fill={useColorModeValue("white",'#001E3C')} stroke={useColorModeValue("white",'#001E3C')} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </Box>
                            <Text cursor={'pointer'} fontSize={'13px'} _hover = {{color : '#00b5b7'}} fontWeight={500} color = {useColorModeValue('black','white')}>Store locator</Text>
                        </HStack>
                    </Stack>

                    <HStack mt = '30px'>
                        <Image w = '48%' src = {playstore}></Image>

                        <Image w = '48%' src = {appstore}></Image>
                    </HStack>

                    <Image borderRadius={'5px'} mt = '30px' src = {DarkTheme_cureconnect_Logo}></Image>

                </DrawerBody>
            </DrawerContent>
            </Drawer>
        </>
    )
    
}

export default DrawerComp