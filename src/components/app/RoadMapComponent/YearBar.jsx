import { Box } from '@chakra-ui/react'
import React from 'react'

const YearBar = ({Year}) => {
    
  return (
    <Box
    mb="80px"
    _before={{
      content: `""`,

      h: "1px",
      w: "100%",
      bg: "rgba(255, 228, 0, 0.3)",
     
    }}
    _after={{
      content: `""`,

      h: "1px",
      w: "100%",
      bg: "rgba(255, 228, 0, 0.3)",
      
    }}
    w="100%"
    color="#7993B4"
    display={"flex"}
    alignItems="center"
    fontSize={"16px"}
    fontWeight="700px"
    mt="22px"
    
  >
   <Box     css={{
              background: 'linear-gradient(#2b026d, #2b026d) padding-box, linear-gradient(40deg, #FFBA07, #FB24FF) border-box',
      border: '2px solid transparent',
      borderRadius: '50px',
      display: '',
            }}
            color="#FFFFFF"
            fontSize={{base:'14px',md:'18px',lg:'20px',xl:'22px',xxl:'24px',xxxl:'26px'}}
            fontWeight="400"
            lineHeight={"150%"}
    borderRadius={"40px"}
    py="8px"
    px={{base:'20px',md:'26px',lg:'29px',xl:'33px'}}
    fontFamily="Nasalization"
    >
   {Year}
   </Box>
  </Box>
  )
}

export default YearBar