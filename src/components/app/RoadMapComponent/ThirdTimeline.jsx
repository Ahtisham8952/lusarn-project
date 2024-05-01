import React from 'react'
import { Box, Flex,Text,Image,Button } from '@chakra-ui/react'
import YearBar from './YearBar'
const ThirdTimeline = () => {
  return (
    <Box mb="100px">
    <Box>   
        <YearBar Year="2020"/>
        
        </Box>
        <Box overflowX={{base:'scroll',xl:'scroll',xxxl:'hidden'}}>

      
       <Box w={{base:'1240px',xl:'100%',xxxl:'100%'}} >
       <Box>
    <Flex  alignItems="end">
        <Box w="20%" display={"flex"} justifyContent="center" mb="16px" flexDirection={"column"} alignItems="center">
            <Image mb="5px" src="/chotamissle.svg"></Image>
         <Box borderRadius={"70px"} border="1px solid rgba(255, 255, 255, 0.2)" p="7px 11px"
          color="#FFFFFF"
          fontSize="13px"
          fontWeight="400"
          fontFamily="Nasalization"
          lineHeight={"150%"}>
 March,2022
         </Box>
        </Box>
       <Box w="20%" display={"flex"} justifyContent="center" mb="16px" flexDirection={"column"} alignItems="center">
      
           
         <Box borderRadius={"70px"} border="1px solid rgba(255, 255, 255, 0.2)" p="7px 11px"
          color="#FFFFFF"
          fontSize="13px"
          fontWeight="400"
          fontFamily="Nasalization"
          lineHeight={"150%"}>
 Jun,2022
         </Box>
        </Box>
        <Box w="20%" display={"flex"} justifyContent="center" mb="16px" flexDirection={"column"} alignItems="center">
        <Image mb="5px" src="/chotamissle.svg"></Image>
         <Box borderRadius={"70px"} border="1px solid rgba(255, 255, 255, 0.2)" p="7px 11px"
          color="#FFFFFF"
          fontSize="13px"
          fontWeight="400"
          fontFamily="Nasalization"
          lineHeight={"150%"}>
 Aug,2022
         </Box>
        </Box>
        <Box w="20%" display={"flex"} justifyContent="center" mb="16px" flexDirection={"column"} alignItems="center">
           
         <Box borderRadius={"70px"} border="1px solid rgba(255, 255, 255, 0.2)" p="7px 11px"
          color="#FFFFFF"
          fontSize="13px"
          fontWeight="400"
          fontFamily="Nasalization"
          lineHeight={"150%"}>
 OCt,2022
         </Box>
        </Box>
        <Box w="20%" display={"flex"} justifyContent="center" mb="16px" flexDirection={"column"} alignItems="center">
        <Image mb="5px" src="/chotamissle.svg"></Image>
         <Box borderRadius={"70px"} border="1px solid rgba(255, 255, 255, 0.2)" p="7px 11px"
          color="#FFFFFF"
          fontSize="13px"
          fontFamily="Nasalization"
          fontWeight="400"
          lineHeight={"150%"}>
 Dec,2022
         </Box>
        </Box>
        
    </Flex>
</Box>
      
        <Box  
      bgImage="url('/linebars.png')"
      bgSize="cover"
      bgPosition="right"
      bgRepeat="no-repeat"
      w="100%"
      h="32px"
      >
        <Flex  alignItems="center">

        
         <Flex>
           
            

        </Flex>
        <Flex   w="100%" alignItems={"center"}>
            <Flex w="20%" gap="88px" alignItems={"center"}>
            <Box p="6px 11px" bg="#2A60EB" borderRadius={"40px"} color="#FFFFFF"
            fontSize="13px"
            fontWeight="400"
            lineHeight={"150%"}>
2020
            </Box>
            <Box   bg="#FFE400" h="18px" w="18px" borderRadius={"50%"}></Box>
            </Flex>
            <Flex w="20%" justifyContent={"center"} >
            <Box   bg="#B829EA" h="18px" w="18px" borderRadius={"50%"}
            position="relative"
             _after={{
              content: `""`,
          position:'absolute',
          top:"0px",
           left:'9px',
              h: "285px",
              w: "1px",
              bg: "#B829EA",
              
            }}
            >

            </Box>
            </Flex>
       
            <Flex w="20%" justifyContent={"center"} >
            <Box   bg="#FFE400" h="18px" w="18px" borderRadius={"50%"}></Box>
            </Flex>
            <Flex w="20%" justifyContent={"center"} >
            <Box bg="#5234DD" h="18px" w="18px" borderRadius={"50%"}
            position="relative"
            _after={{
              content: `""`,
          position:'absolute',
          top:"0px",
           left:'9px',
              h: "285px",
              w: "1px",
              bg: "#5234DD",
              
            }}>

            </Box>
            </Flex>
            <Flex w="20%" justifyContent={"center"} >
            <Box bg="#17CC4A" h="18px" w="18px" borderRadius={"50%"}
            position="relative"
          >

            </Box>
            </Flex>
            
            

        </Flex>
        </Flex>
       

        </Box>
        <Flex mt="24px" >
        <Box w="20%" display={"flex"} justifyContent="center">
          <Box>
          <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     Layer-2


          </Text>
          <Text
             textAlign={"center"}
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     
     R&D Begins 
          </Text>
          <Button mt="9px" bg="transparent" colorScheme={"transparent"} 
     color="#00E0FF"
     fontSize="12px"
     fontWeight="500"
     lineHeight={"150%"}
    
     borderRadius={"25px"}
     border="2px solid #00E0FF"
     >
     See Product Milestones   
     </Button>
          </Box>
       
        </Box>
        
        {/* RED BOX */}
        <Box position={"relative"} zIndex="99"  w="20%" display={"flex"} justifyContent="center" mt="182px">
          <Box  bg="#B829EA" borderRadius={"8px"} py="13px" px={{base:'5px',xl:'5px',xxl:'5px',xxxl:'20px'}} >
          <Text
          textAlign={"center"}
            textTransform="uppercase"
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"150%"}
            maxW="74px"
            letterSpacing="0.03em"
          >
    Pre Seed 
round   
          </Text>
          </Box>

        </Box>
        <Box w="20%" display={"flex"} justifyContent="center">
          <Box>
          <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
    Continuous 


          </Text>
          <Text
             textAlign={"center"}
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     
     Layer-2, R&D
          </Text>
          <Button mt="9px" bg="transparent" colorScheme={"transparent"} 
     color="#00E0FF"
     fontSize="12px"
     fontWeight="500"
     lineHeight={"150%"}
    
     borderRadius={"25px"}
     border="2px solid #00E0FF"
     >
     See Product Milestones   
     </Button>
          </Box>
       
        </Box>
        <Box position={"relative"} zIndex="99"  w="20%" display={"flex"} justifyContent="center" mt="182px">
          <Box  bg="#5234DD" borderRadius={"8px"} py="13px" px={{base:'5px',xl:'5px',xxl:'5px',xxxl:'25px'}} h="68px" >
          <Text
          textAlign={"center"}
            
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"150%"}
            maxW="57px"
            letterSpacing="0.03em"
            textTransform={"uppercase"}
          >
   SEED ROUND
          </Text>
          </Box>

        </Box>
        <Box w="20%" display={"flex"} justifyContent="center">
          <Box>
          <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
    Continuous 


          </Text>
          <Text
             textAlign={"center"}
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     
     Layer-2, R&D
          </Text>
          <Button mt="9px" bg="transparent" colorScheme={"transparent"} 
     color="#00E0FF"
     fontSize="12px"
     fontWeight="500"
     lineHeight={"150%"}
    
     borderRadius={"25px"}
     border="2px solid #00E0FF"
     >
     See Product Milestones   
     </Button>
          </Box>
       
        </Box>
        
      
        </Flex>
        </Box>
        </Box>

   </Box>
  )
}

export default ThirdTimeline