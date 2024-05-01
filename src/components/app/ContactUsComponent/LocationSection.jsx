import { Box, Flex, Grid, Image, list, Text } from "@chakra-ui/react";
import React from "react";
const Locations = [
  {
    Image: "/newyorkbranch.png",
    NameLocation: "New York , USA ( Branch Office )",
  },
  {
    Image: "/londonlocate.png",
    NameLocation: "London, UK (Headquarter ) ",
  },
  {
    Image: "/punelocate.png",
    NameLocation: "Pune,India - R&D ",
  },
];
const LocationSection = () => {
  return (
    <Box maxW={{ xxxl: "1560px", xxl: "1440px", xl: "1280px", lg: "991px", md: "768px", sm: "575px", base: "100%" }} w="100%" mx="auto" px="20px">
      <Flex flexDirection={{base:'column',sm:'row'}}>
        <Box w={{base:'100%',sm:'25%'}}>
          <Image src="/clocksides.svg"></Image>
        </Box>
        <Box
          w={{base:'100%',sm:'50%'}}
          display={"flex"}
          flexDirection="column"
          alignItems={"flex-start"}
        >
          <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize="36px"
            fontWeight="400"
            lineHeight={"150%"}
            mx="auto"
          >
            Our Locations
          </Text>
          <Text
            maxW={"619px"}
            textAlign="center"
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
            mx="auto"
          >
            Lusarn Network is a Layer-2 scaling enterprise solution that
            provides instant, low cost, and secure transactions on Ethereum.
          </Text>
        </Box>
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
        gap={{base:'20px',md:'30px',xl:'40px',xxl:'74px'}}
      >
        {Locations.map((list) => (
          <Box
            border="1px solid #FFBA07"
            colorScheme="linear-gradient(#2b026d, #2b026d) padding-box, linear-gradient(10deg, #FFBA07, #FB24FF) border-box"
            borderRadius={"24px"}
            px={{base:'20px',xl:'35px'}}
            pt="35px"
            pb={{base:'20px',lg:'66px'}}
            h={{base:'auto',lg:'326px'}}
            display={"flex"}
            justifyContent="flex-end"
            flexDirection={"column"}
            alignItems="center"
            css={{
              background: 'linear-gradient(#2b026d, #2b026d) padding-box, linear-gradient(10deg, #FFBA07, #FB24FF) border-box',
      border: '2px solid transparent',
      borderRadius: '50px',
      display: '',
            }}
          >
            <Image mb={{base:'17px',lg:'34px'}} src={list.Image}></Image>

            <Text
              textAlign={"center"}
              color="#FFFFFF"
              fontSize={{base:'18px',lg:'23px'}}
              fontWeight="400"
              lineHeight={"27px"}
            >
              {list.NameLocation}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default LocationSection;
