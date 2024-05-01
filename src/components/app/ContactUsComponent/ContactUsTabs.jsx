import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import InvestorsTabContent from './InvestorsTabContent'
import PartnershipTabContent from './PartnershipTabContent'
import DevelopersTabContent from './DevelopersTabContent'
import MarketerTabContent from './MarketerTabContent'
const ContactUsTabs = () => {
  return (
    <Box  position={"relative"} zIndex="999">
        <Tabs>
  <TabList borderBottom={"none"} gap={{base:'14px',md:'0px',xxl:'20px'}} mb="40px" flexWrap={{base:'wrap',md:'nowrap'}}>
    <Tab _selected={{borderBottom:'4px solid #FFB802'}} color="#FFFFFF"fontSize="24px"fontWeight="400"lineHeight={"29px"}>Investors</Tab>
    <Tab _selected={{borderBottom:'4px solid #FFB802'}} color="#FFFFFF"fontSize="24px"fontWeight="400"lineHeight={"29px"}>Partnership </Tab>
    <Tab _selected={{borderBottom:'4px solid #FFB802'}} color="#FFFFFF"fontSize="24px"fontWeight="400"lineHeight={"29px"}>Developers</Tab>
    <Tab _selected={{borderBottom:'4px solid #FFB802'}} color="#FFFFFF"fontSize="24px"fontWeight="400"lineHeight={"29px"}>Marketers</Tab>
  </TabList>

  <TabPanels p="0px">
    <TabPanel p="0px">
     <InvestorsTabContent/>
    </TabPanel>
    <TabPanel p="0px">
    <PartnershipTabContent/>
    </TabPanel>
    <TabPanel p="0px">
      <DevelopersTabContent/>
     
    </TabPanel>
    <TabPanel p="0px">
      <MarketerTabContent/>
     
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
  )
}

export default ContactUsTabs