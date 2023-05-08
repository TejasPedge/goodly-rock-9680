import { Box, Button, Flex, Grid, HStack, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import TopSlider from '../Components/HomePage Components/Sliders/TopSlider'
import { useColorModeValue } from '@chakra-ui/react'
import BlockbusterSlider from '../Components/HomePage Components/Sliders/BlockbusterDealsSlider'
import { blockbuster_data } from '../Components/HomePage Components/Sliders/BlockbasterSliderData'
import CardSlider from '../Components/HomePage Components/Sliders/CardsSlider'
import { CardSlider_data } from '../Components/HomePage Components/Sliders/cardSliderdata'
import { Buy1get1_Data } from '../Components/HomePage Components/Sliders/SliderData'
import { TopSlider_data } from '../Components/HomePage Components/Sliders/SliderData'
import { SecondSlider_data } from '../Components/HomePage Components/Sliders/SliderData'
import { ExtraOff_data } from '../Components/HomePage Components/Sliders/SliderData'
import {Knockout_data} from '../Components/HomePage Components/Sliders/SliderData' 
import { Wellness_Combos_data } from '../Components/HomePage Components/Sliders/SliderData'
import {PicksYouCan_t_Miss_data} from '../Components/HomePage Components/Sliders/SliderData'
import { Pick_of_the_day_data } from '../Components/HomePage Components/Sliders/SliderData'
import memberShipImage from '../Images/memberShipImage.png'
import {afterMembershipSlider_data} from '../Components/HomePage Components/Sliders/SliderData'
import { Top_slider_mobile_screen_data } from '../Components/HomePage Components/Sliders/SliderData'

const Home = () => {
return (
    <Box>
        <Box display = {{base : 'none','620px' : 'block'}} py = '11px' pb = '20px' px = {{base:'none','620px':'10px'}} bg = {useColorModeValue('#effbfc','#06325f')}>
            <Text display = {{base : 'none','620px' : 'block'}} textAlign={'center'} pb={'10px'} fontSize={'13px'}>Sale is Live Now | Get Extra 10% Off | Exciting Freebies & Extra 5% HK Cash, T&Cs Apply*</Text>
            <TopSlider data = {TopSlider_data}/>
        </Box>

        {/* Top Slider Visible on mobile screen */}

        <Box display = {{base : 'block','620px' : 'none'}} py = '11px' pb = '20px' px = {{base:'none','620px':'10px'}} bg = {useColorModeValue('#effbfc','#06325f')}>
            <Text display = {{base : 'none','620px' : 'block'}} textAlign={'center'} pb={'10px'} fontSize={'13px'}>Sale is Live Now | Get Extra 10% Off | Exciting Freebies & Extra 5% HK Cash, T&Cs Apply*</Text>
            <TopSlider data = {Top_slider_mobile_screen_data}/>
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
                    <BlockbusterSlider data = {Buy1get1_Data}/>
                </Box>
            </Box>
        </Box>

        {/* Slider after buy 1 get 1 slider */}
        <Box mt = '7px' bg = {useColorModeValue('#fff','#001E3C')}>
            <Box py = '20px' w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                {/* Slider after buy 1 get 1 slider  */}
                <Box mt = '15px'>
                    <TopSlider speed={400} data = {SecondSlider_data} autoplay = {false} isRounded = {true}/>
                </Box>
            </Box>
        </Box>

        {/* Extra 5% Off  */}
        <Box mt = '7px' bg = {useColorModeValue('#fff','#001E3C')}>
            <Box w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                <HStack pt={'15px'}  justify={'space-between'}>
                    <Text fontWeight={600} fontSize={{base : '17px','478px' : '23px'}}>Extra 5% Off</Text>
                    <Text cursor={'pointer'} fontWeight={useColorModeValue(600,500)} color={useColorModeValue('#00b5b7','#13f1f5')} fontSize={'14px'}>View All</Text>
                </HStack> 
                {/* Extra 5% Off  */}
                <Box mt = '15px'>
                    <BlockbusterSlider data = {ExtraOff_data}/>
                </Box>
            </Box>
        </Box>

        {/* Slider after Extra 5% Off */}
        <Box mt = '7px' bg = {useColorModeValue('#fff','#001E3C')}>
            <Box w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                <HStack pt={'15px'}  justify={'space-between'}>
                    <Text fontWeight={600} fontSize={{base : '17px','478px' : '23px'}}>Knock Out Deals</Text>
                    <Text cursor={'pointer'} fontWeight={useColorModeValue(600,500)} color={useColorModeValue('#00b5b7','#13f1f5')} fontSize={'14px'}>View All</Text>
                </HStack> 
                {/* Slider after Extra 5% Off  */}
                <Box pt = '10px'>
                    <CardSlider data = {Knockout_data}/>
                </Box>
            </Box>
        </Box>

        {/* Wellness Combos */}
        <Box mt = '7px' bg = {useColorModeValue('#fff','#001E3C')}>
            <Box w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                <HStack pt={'15px'}  justify={'space-between'}>
                    <Text fontWeight={600} fontSize={{base : '17px','478px' : '23px'}}>Wellness Combos</Text>
                    <Text cursor={'pointer'} fontWeight={useColorModeValue(600,500)} color={useColorModeValue('#00b5b7','#13f1f5')} fontSize={'14px'}>View All</Text>
                </HStack> 
                {/* Wellness Combos */}
                <Box mt = '15px'>
                    <BlockbusterSlider data = {Wellness_Combos_data}/>
                </Box>
            </Box>
        </Box>

        {/* Picks You Can't Miss */}
        <Box mt = '7px' bg = {useColorModeValue('#fff','#001E3C')}>
            <Box w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                <HStack pt={'15px'}  justify={'space-between'}>
                    <Text fontWeight={600} fontSize={{base : '17px','478px' : '23px'}}>Picks You Can't Miss</Text>
                    <Text cursor={'pointer'} fontWeight={useColorModeValue(600,500)} color={useColorModeValue('#00b5b7','#13f1f5')} fontSize={'14px'}>View All</Text>
                </HStack> 
                {/* Picks You Can't Miss */}
                <Box pt = '10px'>
                    <CardSlider data = {PicksYouCan_t_Miss_data}/>
                </Box>
            </Box>
        </Box>

        {/* Pick Of The Day  */}
        <Box mt = '7px' bg = {useColorModeValue('#fff','#001E3C')}>
            <Box w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                <HStack pt={'15px'}  justify={'space-between'}>
                    <Text fontWeight={600} fontSize={{base : '17px','478px' : '23px'}}>Pick Of The Day</Text>
                    <Text cursor={'pointer'} fontWeight={useColorModeValue(600,500)} color={useColorModeValue('#00b5b7','#13f1f5')} fontSize={'14px'}>View All</Text>
                </HStack> 
                {/* Buy 1 Get 1 Free  */}
                <Box mt = '15px'>
                    <BlockbusterSlider data = {Pick_of_the_day_data}/>
                </Box>
            </Box>
        </Box>

            {/* MemberShip Image */}
            <Box display = {{base : 'none','620px' : 'block'}} my = '15px'>
                <Box w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                    <Image borderRadius={'8px'} src = {memberShipImage}></Image>
                </Box>
            </Box>

            {/* Slider after MemberShip Image */}
        <Box mt = '7px' bg = {useColorModeValue('#fff','#001E3C')}>
            <Box py = '20px' w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                {/* Slider after MemberShip Image  */}
                <Box mt = '15px'>
                    <TopSlider speed={400} data = {afterMembershipSlider_data} autoplay = {false} isRounded = {true}/>
                </Box>
            </Box>
        </Box>

        <Box mt = '7px' bg = {useColorModeValue('#fff','#001E3C')}>
                <VStack py = '15px' w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                    <Text fontWeight={600} fontSize={{base : '17px','478px' : '23px'}}>Why Cure Connect ?</Text>
                    <SimpleGrid columnGap={'110px'} rowGap={'20px'} columns={{base : 1,'455px' : 2,'751px':3}} pt = '15px'>
                        <Stack spacing={'15px'}>
                            <Image w = '50px' src = 'https://img9.hkrtcdn.com/20791/normal_2079088_o.png'></Image>
                            <Text fontSize={15} fontWeight={600}>Wide range of Nutritional products</Text>
                            <Text fontSize = '12'>One-stop fitness and health destination</Text>
                        </Stack>

                        <Stack spacing={'15px'}>
                            <Image w = '50px' src = 'https://img3.hkrtcdn.com/20791/normal_2079092_o.png'></Image>
                            <Text fontSize={15} fontWeight={600}>100% Original & Authentic</Text>
                            <Text fontSize = '12'>Tight control on sourcing and distribution</Text>
                        </Stack>

                        <Stack spacing={'15px'}>
                            <Image w = '50px' src = 'https://img1.hkrtcdn.com/20791/normal_2079090_o.png'></Image>
                            <Text fontSize={15} fontWeight={600}>Guide to Fit and Healthy Lifestyle</Text>
                            <Text fontSize = '12'>Your true partner in health & wellness journey</Text>
                        </Stack>
                    </SimpleGrid>
                </VStack>
        </Box>

        <Box display = {{base : 'none','620px' : 'flex'}}  mt = '7px' bg = {useColorModeValue('#fff','#001E3C')}>
            <Box py = '20px' w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                <Flex flexDirection={{base : 'column','955px' : 'row'}} justify={'space-between'}>

                    {/* HK Premium */}
                    <Stack w = {{base : '100%','955px' : '50%'}}>
                        <Flex mb = '45px' borderRadius={'25px'} color={'white'} bg = '#00b5b7' >
                            <Stack px = '30px' py = '20px' pb = '25px'>
                                <Text  fontWeight={700} fontSize={'30px'}>HK Premium</Text>
                                <Text pb = '15px' pt = '5px' fontWeight={400} fontSize={13}>Earn extra HK Cash & Enjoy more discounts and deals than anyone else!</Text>
                                <Box cursor={'pointer'}  w = '155px' color={'#00b5b7'} py = '8px' fontWeight={600} fontSize={15} px = '20px' bg = '#fff' borderRadius={'6px'}>Be a part now!</Box>
                            </Stack>
                            <Image mt = '10px' w = '125px' h = '125px' src = 'https://static1.hkrtcdn.com/hknext/static/media/common/misc/subscribe.svg'></Image>
                        </Flex>

                        {/* Refer and earn */}
                        <Flex  justify={'space-between'} bg = {useColorModeValue('#f7f7f7','#193479')} borderRadius={'25px'}>
                            <Stack  w = '48%' pl = '30px' py = '20px' >
                                <Text fontWeight={600} fontSize={'25px'}>Refer & Earn</Text>
                                <Text fontSize = '12.3'>Tell your friends to shop at HealthKart. They get Rs.200 off when they shop with us the 1st time & you get Rs. 200 off on your next order.</Text>
                                <HStack>
                                    <Text fontSize = '12'>Refer now</Text>
                                    <Image cursor={'pointer'} src = 'https://static1.hkrtcdn.com/hknext/static/media/common/misc/refer-arrow-go.svg'></Image>
                                </HStack>
                            </Stack>

                            <Box position={'relative'}>
                                <Image src = 'https://static1.hkrtcdn.com/hknext/static/media/common/misc/rne_refer_back.svg'></Image>
                                <Image w = '75.5%' position={'absolute'} bottom = '0px' right = '13%' src = 'https://static1.hkrtcdn.com/hknext/static/media/common/misc/boy-refer.svg'></Image>
                            </Box>
                        </Flex>
                    </Stack>

                    <Box display = {{base : 'none', '955px' : 'flex'}} position={'relative'} overflow={'hidden'} borderRadius={'25px'} bg = {useColorModeValue('#f6f6f6','#193479')} w = '49%'>
                        <Stack justifyContent={'space-between'}>
                            <Stack px = '30px' pt = '20px'>
                                <Text fontWeight={600} fontSize={'32px'}>Instant</Text>
                                <Text fontWeight={600} fontSize={'32px'}>Assistance</Text>
                                <Text pb = '40px' pt = '10px' w = '70%' fontSize = '20px'>Wish to seek advise from nutritionists and dietitians?</Text>
                                <Box cursor={'pointer'} w = '46%' color={'#fff'} py = '8px' fontWeight={600} fontSize={15} px = '20px' bg = '#00b5b7' borderRadius={'6px'}>Book an Appointment</Box>
                                <Text w = '50%' fontSize = '12.5'><Text as = 'span' color = 'red'>*</Text>Get your customized nutrition and lifestyle plan</Text>
                            </Stack>
                        
                            <Box position={'absolute'} bottom={0}>
                                <Image w = '100%' src = '	https://static1.hkrtcdn.com/hknext/static/media/common/misc/bg-wave.svg'></Image>
                            </Box>
                            <Image w='58%' position = 'absolute' bottom = '0' right={'0'} src = 'https://static1.hkrtcdn.com/hknext/static/media/common/misc/physician.png'></Image>
                            
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Box>

{/* Visible on mobile Screen only  */}
        <Box display = {{base : 'block','620px' : 'none'}} mt = '7px' bg = {useColorModeValue('#fff','#001E3C')}>
            <Box py = '10px' pt = '37px' w = {{base : '95%','816px' : '85%','1063px' : '78%'}} m = 'auto'>
                <Flex justifyContent={'space-between'} bg = {useColorModeValue('#ffffff','#193479')} borderRadius={'10px'} border = '1px solid gray'>
                    <Stack  w = '55%' pl = '6px' py = '10px' >
                        <Text fontWeight={600} fontSize={'14px'}>Refer & Earn</Text>
                        <Text fontSize = '12'>Tell your friends to shop at HealthKart. & Earn upto ₹200 when they shop with us</Text>
                        <HStack>
                            <Text fontSize = '12'>Refer now</Text>
                            <Image w = '20px' cursor={'pointer'} src = 'https://static1.hkrtcdn.com/hknext/static/media/common/misc/refer-arrow-go.svg'></Image>
                        </HStack>
                    </Stack>

                    <Box w = '200px' display = 'flex' justifyContent={'flex-end'}  position={'relative'}>
                        <Image w = '100%' src = 'https://static1.hkrtcdn.com/hknext/static/media/common/misc/rne_refer_back.svg'></Image>
                        <Image w = '77%' position={'absolute'} bottom = '0px' right = '0' src = 'https://static1.hkrtcdn.com/hknext/static/media/common/misc/boy-refer.svg'></Image>
                    </Box>
                </Flex>
            </Box>
        </Box>

    </Box>
)
}

export default Home