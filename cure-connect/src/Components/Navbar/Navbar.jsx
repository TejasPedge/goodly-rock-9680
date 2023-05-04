import React from 'react'
import { Badge, Box, Button, Flex, HStack, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import DarkTheme_cureconnect_Logo from '../../Images/CureConnect DT-Logo.png';
import LightTheme_cureconnect_Logo from '../../Images/CureConnect-Logo.png';
import { useColorModeValue,useColorMode } from '@chakra-ui/react';
import {CgSearch} from 'react-icons/cg'
import {FiShoppingCart} from 'react-icons/fi'
import {MdDarkMode} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

return (
    <Box bg = {useColorModeValue('white','#001E3C')} py = '16px' border = '2px solid red'>
        <HStack w = {{base : '95%','732px' : '85%','872px' : '78%'}} m = 'auto' justify={'space-between'} border = '1px solid green'>
            {/* Logo of the image */}
            <Image w = {{base : '190px','929px' : '220px'}} src = {useColorModeValue(LightTheme_cureconnect_Logo,DarkTheme_cureconnect_Logo)}></Image>
            {/* SearchBox */}
            <InputGroup w = {{base : '30%','1107px' : '40%'}}>
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
            <HStack border = '1px solid' w = {{base : '220px','929px' : '250px'}} justify={'space-between'}>
                <Button borderRadius={'4px'} fontSize={'16px'} fontWeight={500} variant={'none'} color = 'white' bg = {'primary.100'} px = {{base : '20px','760px' : '30px'}}>Login</Button>
                <Box position="relative">
                    <FiShoppingCart color = {useColorModeValue('#33333e','aqua')} size = '25px'/>
                    <Badge textAlign={'center'} minH = '20px' minW = '20px' border = '2px solid' borderColor={useColorModeValue('white','#001E3C')} borderRadius={'50%'} bg = {useColorModeValue('#83f2a6','#2e5bc5')} position="absolute" top="-2" right="-2">
                        0
                    </Badge>
                </Box>
                <Button  variant={'none'} borderRadius={'50%'} onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MdOutlineLightMode size = '20px'/> : <MdDarkMode size = '20px' color = 'aqua' />}
                </Button>
            </HStack>
        </HStack>
    </Box>
)
}

export default Navbar