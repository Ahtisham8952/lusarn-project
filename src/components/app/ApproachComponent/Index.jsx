import { Box,Flex,Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'
import BreadCrumbs from '../AboutUsComponent/BreadCrumbs'
import FundFact from '../AboutUsComponent/FundFact'
import HeroSection from '../AboutUsComponent/HeroSection'

const ApproachMain = () => {
  return (
    <>
    
   <Box bg="white" maxW={"1835px"} w="100%" mx="auto" px="20px" >
   <BreadCrumbs PageLink="/approach" PageName=" Approach"/>
 <HeroSection
 bgColor="#FFDA15"
 Text1="Approach"

 Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
 />
<Box maxW={"1417px"} w='100%' ml="auto">
    <Flex alignItems={"center"} gap='32px' mb={{base:'30px',md:'40px',lg:'50px',xl:'99px'}} flexDirection={{base:'column-reverse',md:'row'}}>
    <Box w={{base:'100%',md:'50%'}}>
        <Heading
           
            color="#000000"
            fontSize={{base:'28px',md:'30px',xl:'40px'}}
            fontWeight="700"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
            mb="10px"
            textAlign={{base:'center',md:'left'}}
           
         
          >
  An ecosystem of support
          </Heading>
          <Text
       
             textAlign={{base:'center',md:'left'}}
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="500"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
          >
     Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. U
          </Text>
        </Box>
    <Box w={{base:'100%',md:'50%'}}>
            <Image objectFit={"cover"} h="100%" src="https://cdn.enochdev.com/enki/approachimage1.png"></Image>
        </Box>
      
        
    </Flex>
    

 </Box>
 <Box maxW={"1417px"} w='100%' mr="auto">
    <Flex alignItems={"center"} gap='32px' mb='99px' flexDirection={{base:'column',md:'row'}}>
    <Box w={{base:'100%',md:'50%'}}>
            <Image objectFit={"cover"} h="100%" src="https://cdn.enochdev.com/enki/approachimage2.png"></Image>
        </Box>
        <Box w={{base:'100%',md:'50%'}}>
        <Heading
           
            color="#000000"
            fontSize={{base:'28px',md:'30px',xl:'40px'}}
            fontWeight="700"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
            mb="10px"
            textAlign={{base:'center',md:'left'}}
           
         
          >
  An ecosystem of support
          </Heading>
          <Text
       
             textAlign={{base:'center',md:'left'}}
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="500"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
          >
     Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. U
          </Text>
        </Box>
        
    </Flex>
    

 </Box>
   </Box>
   <Box pb="100px">
   <FundFact/>
   </Box>
 
   </>
  )
}

export default ApproachMain