import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer/Footer";
import AppHeader from "./Header/Header";

const LayoutWrapper = ({ children }) => {
  return (
  
    <Box
      bg="linear-gradient(180.08deg, #0E0063 0.07%, #2E015B 38.67%, #060532 100.55%)"
      h="100%"
      minH={"100vh"}
   
      zIndex="999"
      bgImage="url('/BgCroped.webp')"
      bgSize="cover"
      bgPosition="top-center"
      bgRepeat="no-repeat"
      w="100%"
      objectFit={"contain"}
    
     
    >
      <Box position="relative" zIndex="99">
        <AppHeader />
        {children}
        <Footer />
      </Box>
    </Box>
    
  );
};

export default LayoutWrapper;
