import { Box, Flex, Grid, Image, list, Text } from "@chakra-ui/react";
import React from "react";
const Locations = [
  {
    Image: "/Communityicon-1.svg",
    Name: "Discord Server",
  },
  {
    Image: "/Communityicon-2.svg",
    Name: "Reddit.com/lusarn",
  },
  {
    Image: "/Communityicon-3.svg",
    Name: "Twitter/lusarn",
  },
  {
    Image: "/Communityicon-4.svg",
    Name: "Twitter/lusarn",
  },
  {
    Image: "/Communityicon-5.svg",
    Name: "Telegram/lusarn",
  },
  {
    Image: "/markershort.svg",
    Name: "Medium/lusarn",
  },
  
];
const CommunitySection = () => {
  return (
    <Box maxW={{ xxxl: "1560px", xxl: "1440px", xl: "1280px", lg: "991px", md: "768px", sm: "575px", base: "100%" }} w="100%" mx="auto" px="20px">
      <Flex flexDirection={"column"} alignItems="center" justifyContent={"center"}>
        
        
          <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize="36px"
            fontWeight="400"
            lineHeight={"150%"}
          >
           Community
          </Text>
          <Text
            maxW={"619px"}
            textAlign="center"
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
          >
           Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum.
          </Text>
        
      </Flex>
      <Flex
        mt="40px"
        // templateColumns={{
        //   base: "repeat(2, 1fr)",
        //   sm: "repeat(2, 1fr)",
        //   md: "repeat(3, 1fr)",
        //   lg: "repeat(6, 1fr)",
        // }}
        // w="100%"
      
       
        alignItems="center"
        gap="24px"
        flexWrap="wrap"
      >
        {Locations.map((list) => (
          <Box
          w={{base:'46%',md:'30%',xl:'23%',xxl:'15%'}}
         
            colorScheme="linear-gradient(#2b026d, #2b026d) padding-box, linear-gradient(10deg, #FFBA07, #FB24FF) border-box"
            borderRadius={"24px"}
           px="20px"
           py="20px"
           h={{base:'auto',xl:'198px'}}
            display={"flex"}
            justifyContent="center"
            flexDirection={"column"}
            alignItems="center"
            css={{
              background: 'linear-gradient(#2b026d, #2b026d) padding-box, linear-gradient(10deg, #FFBA07, #FB24FF) border-box',
      border: '2px solid transparent',
      borderRadius: '50px',
      display: '',
            }}
          >
            <Box mb={{base:'17px',lg:'34px'}}>
            <Image mx={"auto"} h={{base:'60px',xxl:'auto'}}  src={list.Image}></Image>
            </Box>
           

            <Text
              textAlign={"center"}
              color="#FFFFFF"
              fontSize="12px"
              fontWeight="400"
              lineHeight={"14px"}
            >
              {list.Name}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CommunitySection;
