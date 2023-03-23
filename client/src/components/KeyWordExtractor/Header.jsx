import React from "react";
import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../../asstes/light-bulb.svg";

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={100} marginBottom="1rem" />
      <Heading>AI Keword Extractor</Heading>
      <Text fontSize={25} textAlign="center">
        Paste in your text belowe and we'll extract the keywords for you
      </Text>
    </>
  );
};

export default Header;
