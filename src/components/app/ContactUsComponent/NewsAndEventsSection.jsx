import { Box, Flex, Grid, Image, list, Text } from "@chakra-ui/react";
import React from "react";
const Locations = [
  {
    Image: "/newcardimg.svg",
    Heading: "Heading here",
    text:'Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum. Built on an adapted.',
  },
  {
    Image: "/newcardimg.svg",
    Heading: "Heading here",
    text:'Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum. Built on an adapted.',
  },
  {
    Image: "/newcardimg.svg",
    Heading: "Heading here",
    text:'Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum. Built on an adapted.',
  },
 
];
const NewsAndEventsSection = () => {
  return (
    <Box maxW={{ xxxl: "1560px", xxl: "1440px", xl: "1280px", lg: "991px", md: "768px", sm: "575px", base: "100%" }} w="100%" mx="auto" px="20px">
      <Flex flexDirection={"column"} justifyContent="center" alignItems={"center"} >
        
       
          <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize="36px"
            fontWeight="400"
            lineHeight={"150%"}
          >
           News & Events 
          </Text>
          <Text
            maxW={"619px"}
            textAlign="center"
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
            Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum.
          </Text>
        
      </Flex>
      <Grid
        mt="40px"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        w="100%"
        gap="27px"
      >
        {Locations.map((list,index) => (
          <Box
           key={index}
            colorScheme="linear-gradient(#2b026d, #2b026d) padding-box, linear-gradient(10deg, #FFBA07, #FB24FF) border-box"
            borderRadius={"24px"}
            px="20px"
            pt="20px"
            pb="39px"
            
            css={{
              background: 'linear-gradient(#2b026d, #2b026d) padding-box, linear-gradient(80deg, #FFFCDF , #F0FF41 ) border-box',
      border: '1px solid transparent',
      borderRadius: '50px',
      display: '',
            }}
          >
            <Image alt="img" mb="40px" src={list.Image}></Image>

            <Text
            mb="16px"
              color="#FFFFFF"
              fontSize="28px"
              fontWeight="400"
              lineHeight={"27px"}
            >
              {list.Heading}
            </Text>
            <Text
            
              color="#FFFFFF"
              fontSize="20px"
              fontWeight="400"
              lineHeight={"27px"}
            >
              {list.text}
            </Text>
            <Flex alignItems={"center"} justifyContent="space-between">
                <Flex alignItems={"center"} gap="8px">
                <Text
            
            color="#FFC93F"
            fontSize="18px"
            fontWeight="400"
            lineHeight={"21px"}
          >
      Read More
          </Text>
          <Image alt="img" src="/righttwoyellow.svg"></Image>
                </Flex>
                <Image alt="img" src="/metatag.svg"></Image>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsAndEventsSection;
