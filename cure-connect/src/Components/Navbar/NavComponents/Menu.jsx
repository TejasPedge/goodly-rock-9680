import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    HStack,
    Text
} from '@chakra-ui/react'
import {IoMdArrowDroprightCircle} from 'react-icons/io'
import {IoMdArrowDropdownCircle} from 'react-icons/io'
import { useColorMode } from '@chakra-ui/react'


const ResponsiveMenu = () => {

    const {colorMode} = useColorMode();


    return (
        <Box zIndex={2} display={{base : 'flex','1208px' : 'none'}} alignItems={'center'}>
            <Menu>
                {({isOpen}) => (<>
                            <MenuButton>
                                {isOpen ? <IoMdArrowDropdownCircle size = '23px'/> : <IoMdArrowDroprightCircle size = '23px' />}
                            </MenuButton>

                            <MenuList>
                                <MenuItem display = {{base : 'flex','1208px' : 'none'}}>
                                    <HStack >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 8.33325C17.5 14.1666 10 19.1666 10 19.1666C10 19.1666 2.5 14.1666 2.5 8.33325C2.5 6.34413 3.29018 4.43647 4.6967 3.02995C6.10322 1.62343 8.01088 0.833252 10 0.833252C11.9891 0.833252 13.8968 1.62343 15.3033 3.02995C16.7098 4.43647 17.5 6.34413 17.5 8.33325Z" fill={colorMode === 'light' ? "#77777E" :'#d2cece'}></path><path d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z" fill={colorMode === 'light' ? "white" : '#001E3C'} stroke={colorMode === 'light' ? "white" : '#001E3C'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        <Text cursor={'pointer'} fontSize={'13px'} _hover = {{color : '#00b5b7'}} fontWeight={500} color = {colorMode === 'light' ? 'black' : 'white'}>Store locator</Text>
                                    </HStack>
                                </MenuItem>

                                <MenuItem display = {{base : 'flex','955px' : 'none'}}>
                                    <HStack >
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.37202 0.000997242C3.81186 -0.0686701 0.0899012 3.52044 0.00157589 8.08028C-0.0113566 8.74969 0.055548 9.4014 0.193441 10.0264C0.426867 11.0847 0.565641 12.1617 0.565641 13.2455V15.3404C0.565641 15.6614 0.825812 15.9216 1.1468 15.9216H3.2417C4.32547 15.9216 5.40247 16.0604 6.46081 16.2938C7.08582 16.4316 7.73749 16.4986 8.40689 16.4856C12.9667 16.3973 16.5558 12.6755 16.4863 8.1154C16.4183 3.66442 12.823 0.0689429 8.37202 0.000997242Z" fill={colorMode === 'light' ? "#77777E" :'#d2cece'}></path><path d="M4.36379 9.95293C5.06898 9.95293 5.64066 9.38125 5.64066 8.67605C5.64066 7.97085 5.06898 7.39917 4.36379 7.39917C3.65859 7.39917 3.08691 7.97085 3.08691 8.67605C3.08691 9.38125 3.65859 9.95293 4.36379 9.95293Z" fill={colorMode === 'light' ? "white" : '#001E3C'}></path><path d="M7.97512 9.95293C8.68031 9.95293 9.25199 9.38125 9.25199 8.67605C9.25199 7.97085 8.68031 7.39917 7.97512 7.39917C7.26992 7.39917 6.69824 7.97085 6.69824 8.67605C6.69824 9.38125 7.26992 9.95293 7.97512 9.95293Z" fill={colorMode === 'light' ? "white" : '#001E3C'}></path><path d="M11.586 9.95293C12.2912 9.95293 12.8628 9.38125 12.8628 8.67605C12.8628 7.97085 12.2912 7.39917 11.586 7.39917C10.8808 7.39917 10.3091 7.97085 10.3091 8.67605C10.3091 9.38125 10.8808 9.95293 11.586 9.95293Z" fill={colorMode === 'light' ? "white" : '#001E3C'}></path></svg>
                                        <Text cursor={'pointer'} fontSize={'13px'} _hover = {{color : '#00b5b7'}} fontWeight={500} color = {colorMode === 'light' ? 'black' : 'white'}>Customer Support</Text>
                                    </HStack>
                                </MenuItem>

                                <MenuItem  display = {{base : 'flex','734px' : 'none'}}>
                                    <HStack>
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 3.75025H6.25V7.50025H1.25C0.918479 7.50025 0.600537 7.36855 0.366116 7.13413C0.131696 6.89971 0 6.58177 0 6.25025V5.00025C0 4.66873 0.131696 4.35079 0.366116 4.11636C0.600537 3.88194 0.918479 3.75025 1.25 3.75025H2.835C2.52491 3.2133 2.42543 2.58028 2.55586 1.97411C2.6863 1.36793 3.03734 0.831852 3.54083 0.469968C4.04432 0.108084 4.66433 -0.0537836 5.28047 0.015797C5.8966 0.0853777 6.4649 0.381441 6.875 0.846498C7.2851 0.381441 7.8534 0.0853777 8.46953 0.015797C9.08567 -0.0537836 9.70567 0.108084 10.2092 0.469968C10.7127 0.831852 11.0637 1.36793 11.1941 1.97411C11.3246 2.58028 11.2251 3.2133 10.915 3.75025H12.5C12.8315 3.75025 13.1495 3.88194 13.3839 4.11636C13.6183 4.35079 13.75 4.66873 13.75 5.00025V6.25025C13.75 6.58177 13.6183 6.89971 13.3839 7.13413C13.1495 7.36855 12.8315 7.50025 12.5 7.50025H7.5V3.75025ZM3.75 2.50025C3.75 2.83177 3.8817 3.14971 4.11612 3.38413C4.35054 3.61855 4.66848 3.75025 5 3.75025H6.25V2.50025C6.25 2.16873 6.1183 1.85078 5.88388 1.61636C5.64946 1.38194 5.33152 1.25025 5 1.25025C4.66848 1.25025 4.35054 1.38194 4.11612 1.61636C3.8817 1.85078 3.75 2.16873 3.75 2.50025ZM7.5 3.75025H8.75C8.99723 3.75025 9.2389 3.67694 9.44446 3.53958C9.65002 3.40223 9.81024 3.20701 9.90485 2.9786C9.99946 2.75019 10.0242 2.49886 9.97598 2.25639C9.92775 2.01391 9.8087 1.79118 9.63388 1.61636C9.45907 1.44155 9.23634 1.3225 8.99386 1.27427C8.75139 1.22603 8.50005 1.25079 8.27165 1.3454C8.04324 1.44001 7.84801 1.60022 7.71066 1.80579C7.57331 2.01135 7.5 2.25302 7.5 2.50025V3.75025ZM12.5 8.75025H7.5V15.0002H10C10.663 15.0002 11.2989 14.7369 11.7678 14.268C12.2366 13.7992 12.5 13.1633 12.5 12.5002V8.75025ZM6.25 15.0002V8.75025H1.25V12.5002C1.25 13.1633 1.51339 13.7992 1.98223 14.268C2.45107 14.7369 3.08696 15.0002 3.75 15.0002H6.25Z" fill={colorMode === 'light' ? "#77777E" :'#d2cece'}></path></svg>
                                        <Text cursor={'pointer'} fontSize={'13px'} _hover = {{color : '#00b5b7'}} fontWeight={500} color = {colorMode === 'light' ? 'black' : 'white'}>Gift Card</Text>
                                    </HStack>
                                </MenuItem>

                            </MenuList>
                </>)}
            </Menu>
        </Box>
    )
    }

export default ResponsiveMenu