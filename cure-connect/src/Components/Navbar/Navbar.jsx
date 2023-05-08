import React from 'react'
import { Badge, Box, Button, HStack, Image, Input, InputGroup, InputLeftElement, Text,useDisclosure } from '@chakra-ui/react'
import DarkTheme_cureconnect_Logo from '../../Images/CureConnect DT-Logo.png';
import LightTheme_cureconnect_Logo from '../../Images/CureConnect-Logo.png';
import MobileScreen_Logo_DT from '../../Images/Mobile-Screen-LogoDT.png'
import MobileScreen_Logo_LT from '../../Images/Mobile-Screen-LogoLT.png'
import { useColorModeValue,useColorMode } from '@chakra-ui/react';
import {CgSearch} from 'react-icons/cg'
import {FiShoppingCart} from 'react-icons/fi'
import {MdDarkMode} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md'
import {HiMenuAlt1} from 'react-icons/hi'
import NavOptions from './NavComponents/NavOptions';
import DrawerComp from './NavComponents/Drawer';


const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

return (
<Box>
    <Box bg = {useColorModeValue('white','#001E3C')} py = {{base : '7px','620px' : '16px'}}>
        <HStack w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto' justify={'space-between'}>
            {/* Logo of the image */}

            <HStack key = {Math.random()} w = {{'620px' : 'none'}}>
                <Box mr='10px' display = {{base : 'flex','620px' : 'none'}}>
                    <HiMenuAlt1 onClick = {onOpen} color = {useColorModeValue('black','aqua')} size = '25px'/>
                </Box>

                <Box display = {{base : 'block','620px' : 'none'}}>
                    <Image w = '60px' src = {useColorModeValue(MobileScreen_Logo_LT,MobileScreen_Logo_DT)}></Image>
                </Box>

                <Box display = {{base : 'none','620px' : 'block'}}>
                    <Image w = {{base : '190px','929px' : '220px'}} src = {useColorModeValue(LightTheme_cureconnect_Logo,DarkTheme_cureconnect_Logo)}></Image>
                </Box>
            </HStack>
            {/* SearchBox */}
            <InputGroup display = {{base : 'none','620px' : 'block'}} w = {{base : '30%','1107px' : '40%'}}>
                <InputLeftElement
                pointerEvents='none'
                children={<CgSearch color='#afafb4' size = '20px' />}
                />
                <Input 
                type='tel'
                variant={'none'}
                bg = {useColorModeValue('#f7f7f7','#0b345d')}
                placeholder='Search for products & brands...' 
                _placeholder={{
                    fontSize: "13px",
                    color: useColorModeValue("#636363","#a09a9a"),
                    fontWeight : "500"
                }}/>
            </InputGroup>
            {/* Login , Cart and colormode */}
            <HStack key = {Math.random()} w = {{base : '120px','301px' : '120px','620px' : '220px'}} justify={'space-between'}>
                <Button display = {{base : 'none','620px' : 'block'}} borderRadius={'4px'} fontSize={'16px'} fontWeight={500} variant={'none'} color = 'white' bg = {'primary.100'} px = {{base : '20px','760px' : '30px'}}>Login</Button>
                {/* visible on responsive screen */}
                <Box display = {{base : 'block','620px' : 'none'}}>
                    <CgSearch color={useColorModeValue('black','aqua')}  size = '20px' />
                </Box>
                <Box position="relative" cursor={'pointer'}>
                    <FiShoppingCart color = {useColorModeValue('#33333e','aqua')} size = {'20px'}/>
                    <Badge textAlign={'center'} minH = '15px' minW = '15px' border = '2px solid' borderColor={useColorModeValue('white','#001E3C')} borderRadius={'50%'} bg = {useColorModeValue('#83f2a6','#2e5bc5')} position="absolute" top="-2" right="-2">
                        <Text fontSize = '10'>0</Text>
                    </Badge>
                </Box>
                <Box cursor={'pointer'}  variant={'none'} onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MdOutlineLightMode size = '20px'/> : <MdDarkMode size = '20px' color = 'aqua' />}
                </Box>
            </HStack>
        </HStack>
    </Box>
    {/* Navbar pages / options BestSellers,brands,...  */}
    <NavOptions/>
    {/* Drawer with Menu */}
    <Box display = {{base : 'block','620px' : 'none'}}>
        <DrawerComp isOpen = {isOpen}  onClose = {onClose}/>
    </Box>
</Box>
)
}

export default Navbar