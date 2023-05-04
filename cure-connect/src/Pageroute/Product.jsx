

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";


export  const Product = () => {
  const [item, setItem] = useState([]);
 
 

 
   
  
 
  useEffect(() => {
    // setLoader(true);
    axios
      .get("http://localhost:3000/product")
      .then((res) => {
        setItem(res.data);
        
      })
      .catch((err) => console.log(err));
  }, []);


  

 

  return (
    <Box>
      <Box
        display={{ sm: "flex", md: "flex" }}
        gap={"2rem"}
        w={{ base: "70%", sm: "80%", md: "90%" }}
        m={"auto"}
        mt={"2rem"}
        mb={"2rem"}
      >
        <Box
          borderRadius={"1rem"}
          w={{ base: "15rem", sm: "25", md: "25rem", lg: "20rem" }}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Accordion defaultIndex={[0, 1]} mt={"1rem"} allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"xl"} fontWeight={"medium"}>
                    Sort By Price
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"xl"} fontWeight={"medium"}>
                    Brand Filter
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
           
            </AccordionItem>
          </Accordion>
        </Box>
        <SimpleGrid
          columns={{ base: "1", sm: "1", md: "2", lg: "4" }}
          spacing={10}
        >
          {item &&
            item?.map((ele) => {
              return (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                  gap={"1rem"}
                  p={"1rem"}
                  w={"15rem"}
                  alignItems={"center"}
                  justifyContent="center"
                  borderRadius={".5rem"}
                  textAlign={"center"}
                  maxH="400px"
                 
                >
                  <Image w={"50%"} src={ele.image[0]} />

                  <Box>{ele.title}</Box>
                  <Text fontWeight={"semibold"}>₹{ele.price}</Text>
                  <Box>
                    <Button
                      bg={"orange.50"}
                      color={"#ff8913"}
                      w={"14rem"}
                      border={"1px solid orange"}
                      _hover={{ bg: "orange", color: "white" }}
                    //   onClick={() => handleAddtoCart(ele)}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              );
            })}
        </SimpleGrid>
      </Box>
      
    </Box>
  );
}
