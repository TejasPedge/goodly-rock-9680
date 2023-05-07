import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function Sidebar() {
  const { total } = useSelector((store) => store.ProductReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  //console.log(initialBrand);
  const [brand, setBrand] = useState(initialBrand || []);
  const [order, setOrder] = useState("");
  const getCurrentPage = (page) => {
    page = Number(page);

    if (typeof page !== "number" || page <= 0 || !page) {
      return 1;
    }
    return page;
  };
  const [page, setPage] = useState(getCurrentPage(searchParams.get("page")));

  const handleChange = (e) => {
    let newBrand = [...brand];
    const val = e.target.value;
    if (newBrand.includes(val)) {
      newBrand = newBrand.filter((el) => el !== val);
    } else {
      newBrand.push(val);
    }
    setBrand(newBrand);
  };

  const handleSort = (e) => {
    //console.log(e);
    setOrder(e);
  };

  const handleClick = (val) => {
    setPage((prev) => prev + val);
  };

  useEffect(() => {
    const params = {
      brand,
    };
    order && (params.order = order);
    page && (params.page = page);
    //params.sort?
    setSearchParams(params);
  }, [brand, order, page]);

  return (
    <Box
      w={"210px"}
      p={5}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      gap={3}
      m={"auto"}
    >
      <Box borderBottom={"1px solid grey"} textAlign={"left"}>
        <Text>
          <b>Filter by brand</b>
        </Text>
        <Input placeholder="search" mb={3} />

        <br />
        <Checkbox
          value="Labrada"
          onChange={handleChange}
          isChecked={brand.includes("Labrada")}
        >
          Labrada
        </Checkbox>
        <br />
        <Checkbox
          value="Hyp"
          onChange={handleChange}
          isChecked={brand.includes("Hyp")}
        >
          Hyp
        </Checkbox>
        <br />
        <Checkbox
          value="Myprotein"
          onChange={handleChange}
          isChecked={brand.includes("Myprotein")}
        >
          Myprotein
        </Checkbox>
        <br />
        <Checkbox
          value="Wellbeing"
          onChange={handleChange}
          isChecked={brand.includes("Wellbeing")}
        >
          Wellbeing
        </Checkbox>
        <br />
        <Checkbox
          value="MuscleBlaze"
          onChange={handleChange}
          isChecked={brand.includes("MuscleBlaze")}
        >
          MuscleBlaze
        </Checkbox>
        <br />
        <Checkbox
          value="ON"
          onChange={handleChange}
          isChecked={brand.includes("ON")}
        >
          ON
        </Checkbox>
        <br />
        <Checkbox
          value="Healthistic"
          onChange={handleChange}
          isChecked={brand.includes("Healthistic")}
        >
          Healthistic
        </Checkbox>
        <br />
        <Checkbox
          value="Bragg"
          id=""
          onChange={handleChange}
          isChecked={brand.includes("Bragg")}
        >
          Bragg
        </Checkbox>
        <br />
        <Checkbox
          value="Alpino"
          id=""
          onChange={handleChange}
          isChecked={brand.includes("Alpino")}
        >
          Alpino
        </Checkbox>
        <br />
        <Checkbox
          value="Yogabar"
          id=""
          onChange={handleChange}
          isChecked={brand.includes("Yogabar")}
        >
          Yogabar
        </Checkbox>
        <br />
        <Checkbox
          value="Herbalife"
          id=""
          onChange={handleChange}
          isChecked={brand.includes("Herbalife")}
        >
          Herbalife
        </Checkbox>
        <br />
        <Checkbox
          value="Unflavored"
          id=""
          onChange={handleChange}
          isChecked={brand.includes("Unflavored")}
        >
          Unflavored
        </Checkbox>
        <br />
        <Checkbox
          value="Oziva"
          id=""
          onChange={handleChange}
          isChecked={brand.includes("Oziva")}
        >
          Oziva
        </Checkbox>
      </Box>

      <Box mt={"2"} mb={"2"}>
        <Text mb={3}>
          <b> Sort by Price</b>
        </Text>
        <RadioGroup onChange={handleSort}>
          <Stack>
            <Radio value="desc">High to Low</Radio>
            <Radio value="asc">Low to High</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Flex gap={2}>
        <Button
          colorScheme={"blue"}
          isDisabled={page === 1}
          onClick={() => handleClick(-1)}
        >
          Prev
        </Button>
        <Button colorScheme={"blue"} isDisabled>
          {page}
        </Button>
        <Button
          colorScheme={"blue"}
          isDisabled={page === Math.ceil(total / 8)}
          onClick={() => handleClick(1)}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default Sidebar;
