import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import RoadMapTabs from './RoadMapTabs'
import SubmitIdeaModal from './SubmitIdeaModal'

const OurRoadMapSection = () => {
  return (
    <Box pt="100px" >
        <Flex justifyContent={"center"} alignItems="center" mb="36px">
            <Box>
            <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize={{base:'26px',md:'30px',lg:'40px'}}
            fontWeight="400"
            lineHeight={"150%"}
            mb="16px"
            fontFamily="Nasalization"
          >
      Our Roadmap
          </Text>
          <Text
            mb="16px"
            textAlign={"center"}
            color="#FFFFFF"
            fontSize={{base:'16px',md:'20px'}}
            fontWeight="400"
            lineHeight={"150%"}
          >
      Introducing our Roadmap  -  the road to Lusarn 2.0 
          </Text>
          
          <SubmitIdeaModal/>
            </Box>
       
        </Flex>
<RoadMapTabs/>
    </Box>
  )
}

export default OurRoadMapSection