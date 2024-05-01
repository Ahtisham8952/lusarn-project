import { Box, Container, Image } from '@chakra-ui/react'
import React from 'react'

const Page1 = () => {
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
    <Image alt='img' mx="auto" src="/FounderBay.webp"></Image>

</Box>

    </Container>
    </Box>
    </Box>
  )
}

export default Page1