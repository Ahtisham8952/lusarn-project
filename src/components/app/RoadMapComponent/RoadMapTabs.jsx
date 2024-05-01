import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import ProjectTimeLineTabContent from './ProjectTimeLineTabContent'
import FundingTabContent from './FundingTabContent'
const RoadMapTabs = () => {
  return (
    <Box >
<Tabs>
    <Box maxW={"1404px"} mx='auto' px="20px">

  
  <TabList  border="2px solid #850AFF" borderRadius={"50px"} justifyContent="space-between" flexDirection={{base:'column',md:'row'}}>
    <Tab fontFamily="Nasalization" py="32px" px={{base:'10px',md:'12px',lg:'14px',xl:'16px',xxl:'20px',xxxl:'51px'}} _selected={{borderBottom:'none',bg:'#7000FF'}} borderRadius="45px" color="#FFFFFF"fontSize={{base:'18px',md:'21px',xxl:'24px'}}fontWeight="400"lineHeight={"150%"} >Project Timeline Roadmap  </Tab>
    <Tab fontFamily="Nasalization" py="32px" px={{base:'10px',md:'12px',lg:'14px',xl:'16px',xxl:'20px',xxxl:'51px'}} _selected={{borderBottom:'none',bg:'#7000FF'}} borderRadius="45px" color="#FFFFFF"fontSize={{base:'18px',md:'21px',xxl:'24px'}}fontWeight="400"lineHeight={"150%"} >Product Timeline Roadmap  </Tab>
    <Tab fontFamily="Nasalization" py="32px" px={{base:'10px',md:'12px',lg:'14px',xl:'16px',xxl:'20px',xxxl:'51px'}} _selected={{borderBottom:'none',bg:'#7000FF'}} borderRadius="45px" color="#FFFFFF"fontSize={{base:'18px',md:'21px',xxl:'24px'}}fontWeight="400"lineHeight={"150%"} >Funding timeline roadmap    </Tab>
  </TabList>
  </Box>

  <TabPanels pt="73px">
    <TabPanel p="0px">
     <ProjectTimeLineTabContent/>
    </TabPanel>
    <TabPanel p="0px">
     
    </TabPanel>
    <TabPanel p="0px">
    <FundingTabContent/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
  )
}

export default RoadMapTabs