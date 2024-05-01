import { Box, Container, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Page2 = () => {
  return (
    <Box
    zIndex="999"
    bgImage="url('/BgCroped.webp')"
    
    backgroundPosition="top-center"
    bgRepeat="no-repeat"
    w="100%"
    objectFit={"contain"}>

   
    <Box pt={{base:'150px',md:'224px'}} pb="103px">
    <Container maxW={{ xxxl: "1560px", xxl: "1440px", xl: "1280px", lg: "991px", md: "768px", sm: "575px", base: "100%" }} w="100%" mx="auto" px="20px">

<Box py={{base:'100px',md:'222px'}}>
    <Box mb={{base:'32px',lg:'68px'}}>
    <Image mx="auto" src="/colardao.webp"></Image>
    </Box>
    <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize={{base:'18px',md:'22px',lg:'26px',xl:'36px'}}
            fontFamily={"Nasalization"}
            fontWeight="600"
            lineHeight={"150%"}
          >
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Text>
          
                <Flex alignItems={"center"} gap="8px" justifyContent={"center"} mt="13px">
                <Text
            as={Link}
            href="/"
            color="#FFC93F"
            fontSize="18px"
            fontWeight="400"
            lineHeight={"21px"}
            fontFamily="Nasalization"
          >
      Home
          </Text>
          <Image src="/righttwoyellow.svg"></Image>
                </Flex>
               
            

</Box>

    </Container>
    </Box>
    </Box>
  )
}

export default Page2