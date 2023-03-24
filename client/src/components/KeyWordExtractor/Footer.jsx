import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../../asstes/openai.png";

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignContent="center">
        <span>
          <Image src={logo} marginRight={0} />
        </span>
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
