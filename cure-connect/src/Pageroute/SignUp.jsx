import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { validate } from "email-validator";

export default function Signup() {
  const initData = {
    name: "",
    email: "",
    password: "",
    gender: "",
    role: "",
  };
  const [userData, setUserData] = useState(initData);
  const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={9} m={"auto"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          p={8}
          boxShadow={"lg"}
          maxW="4xl"
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="name" isRequired>
                  <FormLabel>FirstName</FormLabel>
                  <Input
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="name" isRequired>
                  <FormLabel>LastName</FormLabel>
                  <Input
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    type="text"
                  />
                </FormControl>
              </Box>
            </HStack>
            <Select
              onChange={(e) =>
                setUserData({ ...userData, role: e.target.value })
              }
              placeholder="Select role"
            >
              <option value="user">User</option>
              <option value="admin">Register as a seller</option>
            </Select>
            <Select
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
              placeholder="Select gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                _hover={{ bgColor: "rgb(5,161,163)" }}
                bgColor={"rgb(15,181,183)"}
                color={"white"}
                onClick={() => {
                  if (validate(userData.email)) {
                    onOpen();
                  } else {
                    toast({
                      title: "Please Enter Valid Email",
                      status: "error",
                      duration: 3000,
                      position: "top",
                      isClosable: true,
                    });
                  }
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/login" style={{ color: "teal" }}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
