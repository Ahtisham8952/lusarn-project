import { Box, Flex,Text,Image, } from '@chakra-ui/react'
import React from 'react'

const RoadMapBanner = () => {
  return (
   <Box> 
    <Flex alignItems={"center"} justifyContent="space-between" gap="30px" flexDirection={{base:'column',lg:'row'}}>
        <Box w={{base:'100%',lg:'60%'}}>
            <Box>
            <Text
            fontFamily="Nasalization"
            maxW={"870px"}
            textAlign={{base:'center',lg:'left'}}
            color="#FFFFFF"
            fontSize={{base:'30px',md:'32px',lg:'34px',xl:'36px',xxl:'38px',xxxl:'42px'}}
            fontWeight="400"
            lineHeight={"150%"}
          >
     The Roadmap is a schedule of events 
and Milestones that communicate planned Solution deliverables over a planning horizon






          </Text>
          <Box mt="40px" maxW={"803px"} w="100%"> 
<Box  bgImage="url('/commentsbg.png')"
      bgSize="cover"
      bgPosition="right"
      bgRepeat="no-repeat"
     
      h={{base:'auto',sm:'175px',md:'237px',lg:'279px'}}
      px={{base:'16px',md:'26px',lg:'36px'}}
      pt={{base:'16px',md:'26px',lg:'30px'}}
      pb="42px"
      objectFit={"contain"}>
        <Text
            
            color="#FFFFFF"
            fontSize={{base:'16px',md:'22px',lg:'24px',xl:'26px',xxl:'28px',xxxl:'30px'}}
            fontWeight="600"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
      Prediction is very difficult, especially if it is about the future.
          </Text>
          <Text
            mt={{base:'9px',lg:'16px'}}
            color="#FFFFFF"
            fontStyle={"italic"}
            fontSize={{base:'16px',md:'18px',lg:'20px',xl:'24px'}}
            fontWeight="600"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
      Niels Bohr, Danish physicist
          </Text>

</Box>
          </Box>
            </Box>
        
        </Box>
        <Box w={{base:'100%',lg:'40%'}}>
<Image alt="img" ml="auto" src="/roedleftimg.png"></Image>
        </Box>

    </Flex>

   </Box>
  )
}

export default RoadMapBanner