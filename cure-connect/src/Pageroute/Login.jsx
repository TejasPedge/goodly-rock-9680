import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { login } from "../Redux/AuthReducer/action";

export default function Login() {
  const { isLoggedIn } = useSelector((store) => {
    return {
      isLoggedIn: store.AuthReducer.isLoggedIn,
    };
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    const details = { email, password };

    dispatch(login(details)).then((res) => {
      if (res === "Incorrect password ") {
        toast({
          title: "Incorrect Password.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else if (res === "User not register") {
        toast({
          title: "You are not Registered.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login Success",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      }
    });
  };

  // if (isLoggedIn) {
  //   if (role === "admin" || role === "Admin" || role === "ADMIN") {
  //     return <Navigate to="/admin" />;
  //   } else {
  //     return <Navigate to="/" />;
  //   }
  // }

  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      m="auto"
      // bg={useColorModeValue("gray.50", "gray.800")}
      bg="gray.50"
      borderRadius="10px"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login to your account!</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={(e) => setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  New User?{" "}
                  <Link to="/register" style={{ color: "#34c7c7" }}>
                    Register Here
                  </Link>
                </Text>
              </Stack>
              <Button
                color={"white"}
                _hover={{ bgColor: "rgb(5,161,163)" }}
                bgColor={"rgb(15,181,183)"}
                onClick={handleLogin}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
