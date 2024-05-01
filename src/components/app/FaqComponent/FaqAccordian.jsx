import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Image,
    Flex,
    Text,
  } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
const FaqAccordian = ({Question,Answer}) => {
  return (
    <Accordion allowMultiple>
   
  
    <AccordionItem border="none !important" mb="16px" >
      {({ isExpanded }) => (
        <>
       
            <AccordionButton bg="#FAFBFF" borderRadius={"4px"}  py='20px' px="18px"  _hover={{bg:"#FAFBFF"}} >
              <Box as="span" flex='1' textAlign='left'>
               <Flex gap="16px">
                <Image src="https://cdn.enochdev.com/enki/greendots.svg"></Image>
                <Text
            
            color="#000000"
            fontSize={{base:'14px',lg:'16px',xl:'20px'}}
            fontWeight="600"
            lineHeight={"22px"}
          >
     {Question}
          </Text>
               </Flex>
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize='12px' />
              ) : (
               <Image h="20px" w="20px" src="https://cdn.enochdev.com/enki/plusicon.svg"></Image>
              )}
            </AccordionButton>
          
          <AccordionPanel pb={4}>
          {Answer}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  </Accordion>
  )
}

export default FaqAccordian