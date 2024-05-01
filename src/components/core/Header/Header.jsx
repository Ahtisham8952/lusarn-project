import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Button,
  Text,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import HeaderMenuList from "./HeaderMenuList";
import MobileMenu from "./MobileMenu";


const AppHeader = () => {
  return (
    <>
      <Box position="absolute" top="0px" left="0px" w="100%" zIndex="99999" pt={{xl: "65px", lg: "50px", base: "20px"}}>
        <Container maxW={{xxxl: "1560px", xxl: "1440px", xl: "1280px", lg: "991px", md: "768px", sm: "575px", base: "100%"}} w="100%" mx="auto" px="20px">
            <Flex w="100%" alignItems="center" justifyContent="space-between">
              <Link href="/" maxW={{lg: "233px", base: "170px"}} mr="50px">
                <Image src="/logo.svg" alt="logo" />
              </Link>
              <Box w="868px" ml="auto" display={{lg: "block", base: "none"}}>
                <HeaderMenuList/>
              </Box>
              <Box display={{lg: "none", base: "block"}}>
                <MobileMenu/>
              </Box>
            </Flex>
          </Container>
      </Box>
    </>
  );
};

export default AppHeader;
