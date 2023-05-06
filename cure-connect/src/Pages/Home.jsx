import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import TopSlider from '../Components/HomePage Components/Sliders/TopSlider'
import { useColorModeValue } from '@chakra-ui/react'
import BlockbusterSlider from '../Components/HomePage Components/Sliders/BlockbusterDealsSlider'
import { blockbuster_data } from '../Components/HomePage Components/Sliders/BlockbasterSliderData'
import CardSlider from '../Components/HomePage Components/Sliders/CardsSlider'
import { CardSlider_data } from '../Components/HomePage Components/Sliders/cardSliderdata'

const Home = () => {
return (
    <Box>
        <Box py = '11px' pb = '20px' px = {{base:'none','620px':'10px'}} bg = {useColorModeValue('#effbfc','#06325f')}>
            <Text display = {{base : 'none','620px' : 'block'}} textAlign={'center'} pb={'10px'} fontSize={'13px'}>Sale is Live Now | Get Extra 10% Off | Exciting Freebies & Extra 5% HK Cash, T&Cs Apply*</Text>
            <TopSlider/>
        </Box>

        {/* Blockbuster Deals */}
        <Box  bg = {useColorModeValue('#fff','#001E3C')}>
            <Box w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                <HStack pt={'15px'}  justify={'space-between'}>
                    <Text fontWeight={600} fontSize={{base : '17px','478px' : '23px'}}>Blockbuster Deals</Text>
                    <Text cursor={'pointer'} fontWeight={useColorModeValue(600,500)} color={useColorModeValue('#00b5b7','#13f1f5')} fontSize={'14px'}>View All</Text>
                </HStack> 
                {/* Blockbuster Deals */}
                <Box mt = '15px'>
                    <BlockbusterSlider data = {blockbuster_data}/>
                </Box>
            </Box>
        </Box>

        <Box mt = '7px' bg = {useColorModeValue('#fff','#001E3C')}>
            <Box w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                <Box pt = '30px'>
                    <CardSlider data = {CardSlider_data}/>
                </Box>
            </Box>
        </Box>

        {/* Buy 1 Get 1 Free  */}
        <Box mt = '7px' bg = {useColorModeValue('#fff','#001E3C')}>
            <Box w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                <HStack pt={'15px'}  justify={'space-between'}>
                    <Text fontWeight={600} fontSize={{base : '17px','478px' : '23px'}}>Buy 1 Get 1 Free</Text>
                    <Text cursor={'pointer'} fontWeight={useColorModeValue(600,500)} color={useColorModeValue('#00b5b7','#13f1f5')} fontSize={'14px'}>View All</Text>
                </HStack> 
                {/* Buy 1 Get 1 Free  */}
                <Box mt = '15px'>
                    <BlockbusterSlider data = {blockbuster_data}/>
                </Box>
            </Box>
        </Box>
    </Box>
)
}

export default Home