import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { Box, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import { useLocation, useSearchParams } from "react-router-dom";

import { Button,useToast } from "@chakra-ui/react";

import { Link } from "react-router-dom";


import axios from "axios";
import { getProducts } from "../Redux/Product Reducer/action";
import Sidebar from "./Sidebar";

function Product() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { products, isLoading } = useSelector((store) => store.ProductReducer);

  //console.log(location.search);
  let obj = {
    params: {
      brand: searchParams.getAll("brand"),
      _sort: "price",
      _order: searchParams.get("order"),
      _page: searchParams.get("page"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);


   const toast = useToast();
   const handleClick = (el) => {
     toast({
       title: "Product Added",
       description: "We've added your product to cart.",
       status: "success",
       duration: 9000,
       isClosable: true,
       position: "top",
     });
     const newObj = { ...el, ["quantity"]: 1 };
     axios
       .post(`https://wild-pink-slug-sock.cyclic.app/cartt`, newObj)
       .then((response) => response.json())
       .then((data) => {
         console.log("Success:", data);
       })
       .catch((error) => {
         console.error("Error:", error);
       });
   };
  
  return (
    <Flex
      justifyContent={"center"}
      flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
      maxWidth={"95%"}
      margin="auto"
      // alignItems={"center"}
    >
      <Box
        justifyContent={"center"}
       
        mt={{ md: "130px", lg: "130px", sm: "none", base: "none" }}
      >
        <Sidebar />
      </Box>

      <Box width={"auto"}>
        <Text fontSize="4xl" display={"flex"} alignItems={"center"} justifyContent={"center"}>Products...</Text>
        {isLoading ? (
          <Center marginTop={"200px"}>
           <h1>loading....</h1>
          </Center>
        ) : (
          <SimpleGrid
            columns={[1, 2, 2, 4]}
            gap={"30px"}
            spacing={9}
            margin={9}
          >
            {products.map((el, i) => {
              return (
                <Box
                  display={"grid"}
                  gap={"5"}
                  p={4}
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                >
                  <Link to={`/product/${el._id}`}>
                    <Box>
                      <Box h={"210px"} display="grid" alignItems={"center"}>
                        <img
                          style={{ margin: "auto" }}
                          src={el.image[0]}
                          alt="product_image"
                        />
                      </Box>
                      <Box>
                        <Text fontSize="lg">
                          <i>{el.title.substring(0, 20).concat("...")}</i>
                        </Text>

                        <Text fontSize="md">
                          Brand:{" "}
                          <b>
                            <i>{el.brand}</i>
                          </b>
                        </Text>

                        <Text fontSize="sm" color="blue">
                          Rating:
                          <b>
                            {" "}
                            <i>{el.rating}</i> ★
                          </b>
                        </Text>
                        <Text fontSize="md" color={"black"}>
                          Price:{" "}
                          <i>
                            {" "}
                            <b>₹{el.price}</b>
                          </i>
                        </Text>
                      </Box>
                    </Box>
                  </Link>
                  <Button
                    onClick={() => handleClick(el)}
                    bg={"orange.200"}
                    color="red.900"
                  >
                    Add to cart
                  </Button>
                </Box>
              );
            })}
          </SimpleGrid>
        )}
      </Box>
      
    </Flex>
  );
}

export default Product;
