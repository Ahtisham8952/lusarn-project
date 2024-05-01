import { Box, Flex,Text,Image,Button } from '@chakra-ui/react'
import React from 'react'
import FirstTimeLine from './FirstTimeLine'
import FundingMileStoneTable from './FundingMileStoneTable'
import SecondTimeline from './SecondTimeline'
import ThirdTimeline from './ThirdTimeline'
import YearBar from './YearBar'

const FundingTabContent = () => {
  return (
   <Box>
    <FirstTimeLine/>
    <SecondTimeline/>
    <ThirdTimeline/>
    <Flex justifyContent={"center"} mb="80px">
    <Text
            fontFamily="Nasalization"
            color="#FFC93F"
            fontSize="18px"
            fontWeight="400"
            lineHeight={"150%"}
          >
      Got questions ? Asks us on our channel   
          </Text>
    </Flex>
    <FundingMileStoneTable/>
   </Box>
  )
}

export default FundingTabContent