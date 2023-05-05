

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
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Paginantion from "./Pagination";


export  const Product = () => {
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [totalPage, setTotalPage] = useState("");
  const [sort, setSort] = useState("1");
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const params = useParams();

  // const { category } = params;
  // const [filterValues, setfilterValues] = useState([]);
  // const [brands, setBrand] = useState([]);
  // const navigate = useNavigate();
 

 
   
  
 
  useEffect(() => {
    // setLoader(true);
    setLoader(true);
    axios
      .get("http://localhost:3000/product")
      .then((res) => {
        setItem(res.data);
        // setPage(res.page);
        // setTotalPage(res.totalPages);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);


  // const handleFilterStr = () => {
  //   let str = "";
  //   if (filterValues.length > 0) {
  //     filterValues.forEach((el) => {
  //       str += `&filter=brand:${el}`;
  //     });
  //     setFilter(str);
  //   } else {
  //     setFilter(str);
  //   }
  // };

  // useEffect(() => {
  //   setLoader(true);
  //   axios
  //     .get(`http://localhost:3000/product?category=${category}`, {
        
  //     })
  //     .then((res) => {
  //       let obj = {};
  //       let arr = [];
  //       res.data.data.forEach((el) => {
  //         if (obj[el.brand] == undefined) {
  //           obj[el.brand] = 1;
  //           arr.push(el.brand);
  //         }
  //       });
  //       setBrand([...arr]);
  //       setLoader(false);
  //     });
  // }, [category]);


 

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
              <AccordionPanel pb={4}></AccordionPanel>
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
      <Paginantion
        key={page}
        page={page}
        setPage={setPage}
        divide={5}
        totalPage={totalPage}
      />
    </Box>
  );
}
