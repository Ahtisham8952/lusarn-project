import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import AboutLusarnProject from './AboutLusarnProject'
import OurRoadMapSection from './OurRoadMapSection'
import RoadMapBanner from './RoadMapBanner'
import UpcominMilestoneSection from './UpcominMilestoneSection'
import CommunitySection from "../ContactUsComponent/CommunitySection"
const RoadMapMain = () => {
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
<RoadMapBanner/>
<OurRoadMapSection/>
<AboutLusarnProject/>
<Box py="100px">
<UpcominMilestoneSection/>
</Box>
<Box>
    <CommunitySection/>
</Box>


    </Container>
    </Box>
    </Box>
  )
}

export default RoadMapMain