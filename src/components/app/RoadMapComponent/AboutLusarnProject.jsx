import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import AboutCards from './AboutCards'


const AboutLusarnProject = () => {
  return (
   <Box position={"relative"} bg="rgba(82, 0, 255, 0.1)" py="64px" px={{base:'20px',md:'30px',xl:'40px',xxxl:'78px'}}
   bgImage="/abotborder.png"
          bgSize="100% 100%"
          borderRadius={"80px"}
  backdropFilter=" blur(-4px)"
  >
    <Image alt='img' src="/keera.png" position={"absolute"} right={{base:'0px',xxl:'0px',xxxl:'-39px'}}></Image>
    <Flex alignItems={"center"} gap="50px" flexDirection={{base:"column",lg:'row'}}> 
        <Box w={{base:'100%',lg:'50%'}}>
<AboutCards/>
        </Box>
        <Box w={{base:'100%',lg:'50%'}}>
        <Text
            fontFamily="Nasalization"
            color="#FFE400"
            fontSize="18px"
            fontWeight="400"
            lineHeight={"150%"}
          >
      You may know them 
          </Text>
          <Text
            maxW={"498px"}
            color="#FFFFFF"
            fontSize={{base:'26px',md:'28px',lg:'30px',xl:'40px'}}
            fontWeight="400"
            lineHeight={"150%"}
            fontFamily="Nasalization"
          
          >
      What other say about 
Lusarn Project 
          </Text>
          <Text
            
            color="#FFFFFF"
            fontSize={{base:'16px',md:'20px'}}
            fontWeight="400"
            lineHeight={"150%"}
            letterSpacing="0.03em"
            my="24px"
          >
      Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum. Built on an adapted implementation of ZK Rollups and a decentralized network of Proof-of-Stake (PoS) validators, its goal is to solve the scalability and usability issues for developers \
          </Text>
          <Button bg="#FFFFFF" colorScheme={"#FFFFFF"} 
     color="#882BD0"
     fontSize="16px"
     fontWeight="400"
     lineHeight={"150%"}
     p="14px 32px"
     borderRadius={"50px"}
     fontFamily="Nasalization"
    
     >
        Read more
     </Button>
        </Box>

    </Flex>


   </Box>
  )
}

export default AboutLusarnProject