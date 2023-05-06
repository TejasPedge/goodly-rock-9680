import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import TopSlider from '../Components/HomePage Components/Sliders/TopSlider'
import { useColorModeValue } from '@chakra-ui/react'
import BlockbusterSlider from '../Components/HomePage Components/Sliders/BlockbusterDealsSlider'
import { blockbuster_data } from '../Components/HomePage Components/Sliders/BlockbasterSliderData'


const Home = () => {
return (
    <Box>
        <Box py = '11px' px = {{base:'none','620px':'10px'}} bg = {useColorModeValue('#effbfc','#06325f')}>
            <Text display = {{base : 'none','620px' : 'block'}} textAlign={'center'} pb={'10px'} fontSize={'13px'}>Sale is Live Now | Get Extra 10% Off | Exciting Freebies & Extra 5% HK Cash, T&Cs Apply*</Text>
            <TopSlider/>
        </Box>

        <Box h = '800px'  bg = {useColorModeValue('#fff','#001E3C')} border = '2px solid red'>
            <Box border = '2px solid green' w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                <HStack mt = '15px'  justify={'space-between'}>
                    <Text fontWeight={600} fontSize={{base : '16px','282px' : '18px','375px' : '23px'}}>Blockbuster Deals</Text>
                    <Text cursor={'pointer'} fontWeight={useColorModeValue(600,500)} color={useColorModeValue('#00b5b7','#13f1f5')} fontSize={'14px'}>View All</Text>
                </HStack> 
                {/* Blockbuster Deals */}
                <Box mt = '15px'>
                    <BlockbusterSlider data = {blockbuster_data}/>
                </Box>
            </Box>
        </Box>
    </Box>
)
}

export default Home