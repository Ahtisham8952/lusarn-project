import {
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Flex,
  Link,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import HeaderMenuList from "./HeaderMenuList";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="transparent"
        color="#FFF"
        as={Button}
        p="0"
        _hover={{ bg: "transparent" }}
        _focus={{ bg: "transparent" }}
      >
        <Image src="/menu-icon.svg" alt="menu" maxW={{lg: "auto", base: "45px"}} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg="rgba(18, 26, 33, 0.8)" backdropFilter="blur(2px)" position="relative" zIndex="99999" h="100vh" />
        <DrawerContent bg="linear-gradient(180.08deg, #0E0063 0.07%, #2E015B 38.67%, #060532 100.55%)" h="100vh" overflow="hidden" minW={{sm: "400px", base: "100%"}} position="relative" zIndex="99999">
          <DrawerCloseButton color="#FFFFFF" fontSize="20px" position="absolute" top="30px" right="30px" zIndex="2" />
          <DrawerBody pl="30px" position="relative">
            <Flex mt="70px">
              <HeaderMenuList/>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
