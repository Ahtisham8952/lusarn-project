import { Box, Flex, Grid, Image, list, Text } from "@chakra-ui/react";
import React from "react";
const MileStons = [
  {
    Image: "/newcardimg.svg",
    Heading: "23rd May 2021 ",
    text:'Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum. Built on an adapted.',
  },
  {
    Image: "/newcardimg.svg",
    Heading: "23rd May 2021 ",
    text:'Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum. Built on an adapted.',
  },
  {
    Image: "/newcardimg.svg",
    Heading: "23rd May 2021 ",
    text:'Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum. Built on an adapted.',
  },
 
];
const UpcominMilestoneSection = () => {
  return (
    <Box position={"relative"} >
        <Image position={"absolute"} bottom="-48px"  right={"39%"} src="/chotaheera.svg"></Image>
      <Flex flexDirection={"column"} justifyContent="center" alignItems={"center"} >
        
       
          <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize={{base:'26px',md:'30px',lg:'36px'}}
            fontWeight="400"
            lineHeight={"150%"}
            fontFamily="Nasalization"
          >
           Upcoming Milestones
          </Text>
          <Text
            maxW={"619px"}
            textAlign="center"
            color="#FFFFFF"
            fontSize={{base:'16px',md:'20px',lg:'24px'}}
            fontWeight="400"
            lineHeight={"150%"}
          >
           Introducing our Roadmap  -  the road to Lusarn 2.0 
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
        {MileStons.map((list) => (
          <Box
           
          bgImage="/border-bg.png"
          bgSize="100% 100%"
          bgRepeat="no-repeat"
            px="20px"
            pt="20px"
            pb="39px"
            
           
          >
            <Image mb="40px" src={list.Image}></Image>
            <Flex  alignItems={"center"} gap="20px">
                <Image src="/calendarverb.svg"></Image>
                <Text
            
              color="#FFFFFF"
              fontSize="28px"
              fontWeight="400"
              lineHeight={"27px"}
              fontFamily="Nasalization"
            >
              {list.Heading}
            </Text>
            </Flex>

            
            <Text
            my='18px'
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
            fontFamily="Nasalization"
          >
      Read More
          </Text>
          <Image src="/righttwoyellow.svg"></Image>
                </Flex>
               
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default UpcominMilestoneSection;
