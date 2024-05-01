import { Box,Flex,Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'
import BreadCrumbs from '../AboutUsComponent/BreadCrumbs'
import FundFact from '../AboutUsComponent/FundFact'
import HeroSection from '../AboutUsComponent/HeroSection'
import FaqAccordian from './FaqAccordian'
const faqs=[
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
    {
        askquestion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        tellanswer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac',
    },
]
const FaqMain = () => {
  return (
    <>
    
   <Box bg="white" maxW={"1835px"} w="100%" mx="auto" px="20px" >
   <BreadCrumbs PageLink="/faq" PageName=" FAQ"/>
 <HeroSection
 bgColor="#DFB6FF"
 Text1="FAQs"

 Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
 />
<Box maxW={"1080px"} w="100%" mx="auto">
<Text
            mb="32px"
            color="#18191F"
            fontSize={{base:'20px',md:'22px',lg:'30px',xl:'40px'}}
            fontWeight="700"
            lineHeight={"64px"}
          >
    Frequently Asked Questions
          </Text>
          {
            faqs.map((li,index)=>{
                return(
                    <FaqAccordian key={index} Question={li.askquestion} Answer={li.tellanswer}/>
                )
            })
          }
         
</Box>
   </Box>
   <Box pb="100px">
   <FundFact/>
   </Box>
 
   </>
  )
}

export default FaqMain