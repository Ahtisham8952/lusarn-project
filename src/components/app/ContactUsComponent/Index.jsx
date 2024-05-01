import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import CommunitySection from './CommunitySection'
import ContactUsTabs from './ContactUsTabs'
import LocationSection from './LocationSection'
import NewsAndEventsSection from './NewsAndEventsSection'

const ContactUs = () => {
  return (
    <>
      <Box>
      <Box bgImage="url('/starbg.png')"
      bgSize="cover"
      bgPosition="top center"
      bgRepeat="no-repeat"
      w="100%"
      minH="100vh"
      position="relative"
      pt={{base:'140px',md:'120px',lg:'140px',xl:'180px',xxl:'220px',xxxl:'258px'}}
    >
      <Image src="/inkdrops.png" pos="absolute" left="0px" top="0px" zIndex="1" />
      <Box position="relative"  maxW={{ xxxl: "1560px", xxl: "1440px", xl: "1280px", lg: "991px", md: "768px", sm: "575px", base: "100%" }} w="100%" mx="auto" px="20px">
        <Flex justifyContent={"space-between"} alignItems="center" gap="20px" flexDirection={{base:'column-reverse',lg:'row'}}>
          <Box w={{base:'100%',lg:'40%'}}>
            <Image position={"relative"} zIndex="0" src="/astrocropped.png"></Image>
            <Box mt="30px"  position={"relative"} zIndex="999">
              <Box mb="28px">
              <Text
            mb="16px"
            color="#FFF066"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"150%"}
          >
      Backed by the best
          </Text>
          <Image src="/Consyniclogo.svg"></Image>
              </Box>
              <Box mb="28px">
              <Text
            mb="16px"
            color="#FFF066"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"150%"}
          >
      Support for major blockchains
          </Text>
          <Flex gap="26px" flexWrap={"wrap"}>
          <Image src="/socialwalleticon-1.svg"></Image>
          <Image src="/socialwalleticon-2.svg"></Image>
          <Image src="/socialwalleticon-3.svg"></Image>

          </Flex>
          
              </Box>
              <Box mb="28px">
              <Text
            mb="16px"
            color="#FFF066"
            fontSize="16px"
            fontWeight="500"
            lineHeight={"150%"}
          >
     Fungible and non-fungible token support: Ethereum and Binance
          </Text>
          <Flex gap="19px">
          <Image src="/gorupthet-1.svg"></Image>
          <Image src="/gorupthet-2.svg"></Image>
          

          </Flex>
          
              </Box>

            </Box>
          </Box>
          <Box  w={{base:'100%',lg:'60%'}}>
            <Box >
              <Text
                mb="20px"
                color="#FFFFFF"
                fontSize={{base:'20px',md:'30px',lg:'40px',xl:'50px'}}
                fontWeight="600"
                lineHeight={"140.8%"}
              >
                Contact Us
              </Text>
              <Text
                mb="40px"
                maxW={"723px"}
                color="#FFFFFF"
                fontSize={{base:'14px',md:'20px'}}
                fontWeight="400"
                lineHeight={"150%"}
              >
                Complete the form below and we will contact you to discuss your project. Your information will be kept confidential.
              </Text>

              <ContactUsTabs />
            </Box>

          </Box>
        </Flex>
      </Box>

    </Box>
    <Box position={"relative"} pt={{base:'40px',md:'60px',lg:'80px',xl:'100px',xxl:'120px',xxxl:'140px'}}>
      <Image h={{base:'240px',md:'496px'}} src="/missleRight.svg" position={"absolute"} right="0px" top="61px"></Image>

    <LocationSection />
  </Box>
  <Box py={{base:'40px',md:'60px',lg:'80px',xl:'100px',xxl:'120px',xxxl:'140px'}} >
    <NewsAndEventsSection />

  </Box>
  <Box py={{base:'40px',md:'60px',lg:'80px',xl:'100px',xxl:'120px',xxxl:'140px'}}>
    <CommunitySection />
  </Box>
      </Box>
    </>
  )
}

export default ContactUs