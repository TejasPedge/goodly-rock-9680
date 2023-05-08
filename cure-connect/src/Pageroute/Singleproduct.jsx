import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  border,
  Center,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
// import { addToCart } from "../redux/productReducer/action";
import axios from "axios";

function Singleproduct() {
  const toast = useToast();
    const { _id } = useParams();
  const dispatch = useDispatch();
    const { products } = useSelector((store) => store.ProductReducer);
   
//   const [images, setImages] = useState([]);
  const [pic, setPic] = useState(0);
  const [el] = products.filter((i) => {
    return i._id;
  });
    console.log(products[0]._id)

  const handleClick = (el) => {
    const newObj = { ...el, ["quantity"]: 1 };
    toast({
      title: "Product Added",
      description: "We've added your product to cart.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
    fetch(`https://wild-pink-slug-sock.cyclic.app/cartt`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    //console.log(newObj);
  };
  console.log(el);
  return (
    <Box>
      <Box
        display={{ base: "flex", md: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
        mt={"2rem"}
        justifyContent={"center"}
      >
        <Box
          display={{ base: "flex", sm: "flex", md: "flex" }}
          flexDirection={{ md: "column" }}
          gap={"1rem"}
          mb={{ base: "2rem" }}
          w={{ md: "10%" }}
        >
        
              <Image
                w={{ base: "10%", md: "50%" }}
                onClick={() => setPic(0)}
                src={el.image[0]}
              />
              <Image
                w={{ base: "10%", md: "50%" }}
                onClick={() => setPic(1)}
                src={el.image[1]}
              />
              <Image
                w={{ base: "10%", md: "50%" }}
                onClick={() => setPic(2)}
                src={el.image[2]}
              />
            
        
        </Box>
        <Box w={{ base: "80%", md: "40%" }}>
          <Image w={"80%"} src={el.image[pic]} />
        </Box>
        <Box
          w={{ base: "80%", md: "40%" }}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
        >
          <Box color={"green.300"}>{el?.tags}</Box>
          <Box>
            <Heading fontSize={"2xl"}>{el?.title}</Heading>
          </Box>
          <Box>By {el?.brand}</Box>
          <Flex>
            MRP:{" "}
            <Text textDecoration={"line-through"}>₹{el?.originalPrice}</Text>
          </Flex>
          <Box>Price: ₹{el.price}</Box>
          <Box display={{ md: "flex" }} gap={"1rem"}>
            <Box
              mt={{ base: "2rem", md: "0" }}
              display={{ base: "flex" }}
              gap={"1rem"}
            >
              <Button
                bg={"orange.50"}
                color={"#ff8913"}
                border={"1px solid orange"}
                onClick={() => {
                  handleClick({el})
                }}
              >
                Add to Cart
              </Button>
              <Button
                p={"1em 1em"}
                color={"white"}
                _hover={{ bg: "orange" }}
                bg={"#ff8913"}
              >
                Quick Buy
              </Button>
            </Box>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"semibold"}>
              Weight
            </Text>
          </Box>
          <Box>
            <Button
              color={"#ff8913"}
              border={"1px solid orange"}
              _hover={{ bg: "orange.30" }}
              bg={"orange.30"}
            >
              {el&& el?.sizes[0]}
            </Button>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"semibold"}>
              Flavour
            </Text>
          </Box>
          <Box>
            <Button
              color={"#ff8913"}
              border={"1px solid orange"}
              _hover={{ bg: "orange.30" }}
              bg={"orange.30"}
            >
              {el?.flavour}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        w={{ base: "80%", lg: "50%" }}
        ml={{ base: "2rem", lg: "35rem" }}
        mt={"2rem"}
        gap={"2rem"}
        alignItems={"center"}
        flexDirection={"column"}
        mb={"2rem"}
      >
        <Box>
          <Heading>Product Details</Heading>
        </Box>
        <Box
          p={"3rem"}
          borderRadius={"1em"}
          bg={"gray.100"}
          lineHeight={"2rem"}
        >
          {el?.description}
        </Box>
      </Box>
    </Box>
  );
}

export default Singleproduct;
