import { Box, Grid,Text,Image } from '@chakra-ui/react'
import React from 'react'

const FundFact = () => {
  return (
    <Box  
    bgImage="url('https://cdn.enochdev.com/enki/volumes.png')"
      bgSize="cover"
     
      bgPosition="top-center"
      bgRepeat="no-repeat"
      py="99px"
   >
    <Box maxW={"1040px"} px="20px" mx="auto">
    <Text
            
            color="#FFFFFF"
            fontSize={{base:'28px',md:'30px',lg:'32px',xl:'40px',xxl:'52px',xxl:'64px'}}
            fontWeight="700"
            mb="30px"
            fontStyle={"italic"}
            lineHeight={"72px"}
          >
       Fund Facts.
          </Text>
    
    <Grid gap="32px"  templateColumns={{ base: "repeat(1, 1fr)",sm:"repeat(1, 1fr)", md: "repeat(1, 1fr)",lg:'repeat(2, 1fr)' }}  w="100%" >
        <Box>
            <Image alt="img" w='100%' src='https://cdn.enochdev.com/enki/fundimage1.png'></Image>
        </Box>
        <Box>
        <Text
            
            color="#FFFFFF"
            fontSize="24px"
            fontWeight="500"
            lineHeight={"44px"}
          >
      Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </Text>
          <Box mt="20px" maxW={"160px"} w="1005" position={"relative"} overflow="visible">
          <Image alt="img" ml="auto" src="https://cdn.enochdev.com/enki/roundbar.svg"></Image>
          <Box
           position="absolute"
           top="50%"
           left="50%"
           textAlign="left"
           transform="translate(-49%, -50%)"
           color="white"
           fontSize="16px"
           w="100%">
            VIEW ALL FACTS

          </Box>
          </Box>
         
        </Box>
        <Box>
            <Image alt="img" w='100%' src='https://cdn.enochdev.com/enki/fundimage2.png'></Image>
        </Box>
       
        <Box mt={{base:'0px',md:'-32px'}}>
            <Image alt="img" w='100%' src='https://cdn.enochdev.com/enki/fundimage3.png'></Image>
        </Box>
    </Grid>
    </Box>


   </Box>
  )
}

export default FundFact