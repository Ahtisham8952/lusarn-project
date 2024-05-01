import { Box,Text,Flex,Image } from '@chakra-ui/react'
import React from 'react'

const HeroSection = ({bgColor,Text1,Text2,Description}) => {
  return (
   
        <Box maxW={"1254px"} mx="auto" mb={{base:'30px',md:'40px',lg:'50px',xl:'99px'}}>
        <Box
    width={{base:'200px',md:'300px',lg:'400px',xl:'594px'}}
    height={{base:'200px',md:'300px',lg:'400px',xl:'594px'}}
    borderRadius="50%"
    backgroundColor={bgColor}
    overflow="visible"
    position="relative"
  >
    <Box
      position="absolute"
      top="50%"
      left="50%"
      textAlign="left"
      transform="translate(-34%, -50%)"
      color="white"
      fontSize="16px"
     
     
    >
     
      <Text
          fontStyle={"italic"}
          color="#000000"
          fontSize={{base:'68px',md:'80px',lg:'100px',xl:'120px',xxl:'130px',xxl:'164px'}}
          fontWeight="700"
          lineHeight={{base:'68px',md:'80px',lg:'100px',xl:'120px',xxl:'130px',xxl:'164px'}}
        >
{Text1}
        </Text>
        <Text
          fontStyle={"italic"}
          color="#000000"
          fontSize={{base:'68px',md:'80px',lg:'100px',xl:'120px',xxl:'130px',xxl:'164px'}}
          fontWeight="700"
          lineHeight={{base:'68px',md:'80px',lg:'100px',xl:'120px',xxl:'130px',xxl:'164px'}}
          textAlign="left"
        >
  {Text2}
        </Text>
    </Box>
  </Box>
  <Text
            
            color="#000000"
            fontSize={{base:'20px',md:'24px',xl:'27px'}}
            fontWeight="600"
            lineHeight={{base:'32px',md:'42px',xl:'52px'}}
            maxW='620px'
            w="100%"
            ml="auto"
          >
    {Description}
          </Text>
        </Box>
   
  
  )
}

export default HeroSection