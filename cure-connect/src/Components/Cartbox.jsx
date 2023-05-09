import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  VStack,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

// import { deleteCartItem, updateQuantity } from "../redux/CartReducer/action";

const Cartbox = ({
  pid,
  _id,
  image,
  title,
  description,
  price,
  originalPrice,
  quantity,
  handleChange,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    //dispatch(deleteCartItem(_id)).then(handleChange);
  };
  const handleAdd = () => {
    quantity += 1;
    let data = {
      pid,
      _id,
      image,
      title,
      description,
      price,
      originalPrice,
      quantity,
    };
    // dispatch(updateQuantity(data)).then(handleChange);
  };
  const handleReduce = () => {
    quantity -= 1;
    let data = {
      pid,
      _id,
      image,
      title,
      description,
      price,
      originalPrice,
      quantity,
    };
    // dispatch(updateQuantity(data)).then(handleChange);
  };
  return (
    <Card
      key={pid}
      // direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      justifyContent={"space-between"}
      m="2"
    >
      <Flex direction={{ base: "column", md: "row" }}>
        <Image
          objectFit="cover"
          maxW={{ base: "10%", sm: "200px" }}
          src={
            "https://img8.hkrtcdn.com/6186/prd_618577-Yogabars-Breakfast-Protein-Bar-6-PiecesPack-Almond-Coconut_o.jpg"
          }
          alt={title}
        />

        <VStack>
          <CardBody>
            <Heading size="sm">
              Yogabar Breakfast Protein Bar, 6 Piece(s)/Pack, Almond Coconut
            </Heading>
            <Heading size="md">Rs.264</Heading>
            <Flex>
              <Text>MRP:</Text>
              <Text textDecoration={"line-through"}>300</Text>
            </Flex>
          </CardBody>

          <CardFooter>
            <Flex alignItems="center">
              <Button
                _hover={{ bgColor: "rgb(5,161,163)" }}
                bgColor={"rgb(15,181,183)"}
                onClick={handleReduce}
                size="xs"
                color={"white"}
                //isDisabled={quantity === 1}
              >
                -
              </Button>
              <Text ml="5px" mr="5px">
                1
              </Text>
              <Button
                _hover={{ bgColor: "rgb(5,161,163)" }}
                bgColor={"rgb(15,181,183)"}
                onClick={handleAdd}
                size="xs"
                color={"white"}
              >
                +
              </Button>
            </Flex>
          </CardFooter>
        </VStack>
        <Spacer />
        <Button
          _hover={{ bgColor: "rgb(5,161,163)" }}
          bgColor={"rgb(15,181,183)"}
          onClick={handleDelete}
          size="sm"
        >
          <RiDeleteBin6Line color="white" />
        </Button>
      </Flex>
    </Card>
  );
};

export default Cartbox;
