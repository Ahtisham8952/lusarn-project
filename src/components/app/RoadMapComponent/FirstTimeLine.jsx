import React from 'react'
import { Box, Flex,Text,Image,Button } from '@chakra-ui/react'
import YearBar from './YearBar'
const FirstTimeLine = () => {
  return (
    <Box mb="100px">
    <Box>   
        <YearBar Year="2022"/>
        
        </Box>
        <Box overflowX={{base:'scroll',xl:'scroll',xxxl:'hidden'}}>

      
       <Box w={{base:'1240px',xl:'100%',xxxl:'100%'}} >
       <Box>
    <Flex  alignItems="end">
        <Box w="28%" display={"flex"} justifyContent="center" mb="16px" flexDirection={"column"} alignItems="center">
            

            
            <Image mb="5px" src="/chotamissle.svg"></Image>
         <Box borderRadius={"70px"} border="1px solid rgba(255, 255, 255, 0.2)" p="7px 11px"
         position={"relative"}
          color="#FFFFFF"
          fontFamily="Nasalization"
          fontSize="13px"
          fontWeight="400"
          lineHeight={"150%"}
          _before={{
            content: `""`,
      position:'absolute',
            h: "1px",
            bottom:'14px',
            top:"19px",
            left:{base:'-45px',xxl:'-65px',xxxl:'-63px'},
            w: {base:'38px',xxl:'51px',xxxl:'58px'},
            bg: "#FFE400",
           
          }}
         _after={{
          content: `""`,
      position:'absolute',
      top:"19px",
       right:{base:'-44px',xxl:'-55px',xxxl:'-63px'},
          h: "1px",
          w: {base:'38px',xxl:'40px',xxxl:'58px'},
          bg: "#D72D00",
          
         }}
        >
 March,2022
         </Box>
         
        </Box>
      
        <Box w="14%" display={"flex"} justifyContent="center" mb="16px" flexDirection={"column"} alignItems="center">
           
         <Box borderRadius={"70px"} border="1px solid rgba(255, 255, 255, 0.2)" p="7px 11px"
          color="#FFFFFF"
          fontSize="13px"
          fontFamily="Nasalization"
          fontWeight="400"
          lineHeight={"150%"}>
 May,2022
         </Box>
        </Box>
        <Box w="14%" display={"flex"} justifyContent="center" mb="16px" flexDirection={"column"} alignItems="center">
            <Image mb="5px" src="/chotamissle.svg"></Image>
         <Box borderRadius={"70px"} border="1px solid rgba(255, 255, 255, 0.2)" p="7px 11px"
          color="#FFFFFF"
          fontSize="13px"
          fontWeight="400"
          fontFamily="Nasalization"
          lineHeight={"150%"}>
 Jul,2022
         </Box>
        </Box>
        <Box w="14%" display={"flex"} justifyContent="center" mb="16px" flexDirection={"column"} alignItems="center">
            <Image mb="5px" src="/chotamissle.svg"></Image>
         <Box borderRadius={"70px"} border="1px solid rgba(255, 255, 255, 0.2)" p="7px 11px"
          color="#FFFFFF"
          fontSize="13px"
          fontFamily="Nasalization"
          fontWeight="400"
          lineHeight={"150%"}>
 Aug,2022
         </Box>
        </Box>
        <Box w="14%" display={"flex"} justifyContent="center" mb="16px" flexDirection={"column"} alignItems="center">
           
         <Box borderRadius={"70px"} border="1px solid rgba(255, 255, 255, 0.2)" p="7px 11px"
          color="#FFFFFF"
          fontSize="13px"
          fontFamily="Nasalization"
          fontWeight="400"
          lineHeight={"150%"}>
 Sep,2022
         </Box>
        </Box>
        <Box w="14%" display={"flex"} justifyContent="center" mb="16px" flexDirection={"column"} alignItems="center">
           
           <Box borderRadius={"70px"} border="1px solid rgba(255, 255, 255, 0.2)" p="7px 11px"
            color="#FFFFFF"
            fontSize="13px"
            fontWeight="400"
            fontFamily="Nasalization"
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

        
        
        <Flex  alignItems={"center"} w="100%">
        <Flex w="14%" gap={{base:'30px',xl:'30px',xxxl:'49px'}} alignItems={"center"} justifyContent="flex-start">
        <Box p="6px 11px" bg="#2A60EB" borderRadius={"40px"} color="#FFFFFF"
            fontSize="13px"
            fontWeight="400"
            lineHeight={"150%"}>
2021
            </Box>
        <Box   bg="#FFE400" h="18px" w="18px" borderRadius={"50%"}
        position="relative"
        _before={{
            content: `""`,
      position:'absolute',
            h: "35px",
            bottom:'20px',
            left:'8px',
            w: "1px",
            bg: "#FFE400",
           
          }}
        ></Box>
        </Flex>
        <Flex w="14%" justifyContent={"center"} >
       

            <Box   bg="#D72D00" h="18px" w="18px" borderRadius={"50%"}
            position="relative"
            _before={{
                content: `""`,
          position:'absolute',
                h: "35px",
                bottom:'20px',
                left:'8px',
                w: "1px",
                bg: "#D72D00",
               
              }}
             _after={{
              content: `""`,
          position:'absolute',
          top:"0px",
           left:'9px',
              h: "285px",
              w: "1px",
              bg: "#D72D00",
              
            }}
            >

            </Box>
            </Flex>
            <Flex w="14%" justifyContent={"center"} >
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
            <Flex w="14%" justifyContent={"center"} >
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
            <Flex w="14%" justifyContent={"center"} >
            <Box bg="#FFE400" h="18px" w="18px" borderRadius={"50%"}></Box>
            </Flex>
            <Flex w="14%" justifyContent={"center"} >
            <Box bg="#FFE400" h="18px" w="18px" borderRadius={"50%"}></Box>
            </Flex>
            <Flex w="14%" justifyContent={"center"} >
            <Box bg="#17CC4A" h="18px" w="18px" borderRadius={"50%"}
            position="relative"
            _after={{
              content: `""`,
          position:'absolute',
          top:"0px",
           left:'9px',
              h: "285px",
              w: "1px",
              bg: "#17CC4A",
              
            }}>

            </Box>
            </Flex>

        </Flex>
        </Flex>
       

        </Box>
        <Flex mt="24px" >
        <Box w="14%" display={"flex"} justifyContent="center">
          <Box>
          <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
      1.4 Release

          </Text>
          <Text
             textAlign={"center"}
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="700"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     
Layer-2 Mainnet
          </Text>
          <Button mt="9px" bg="transparent" colorScheme={"transparent"} 
     color="#00E0FF"
     fontSize={{base:'12px',xl:'10px',xxxl:'12px'}}
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
        <Box position={"relative"} zIndex="99"  w="14%" display={"flex"} justifyContent="center" mt="182px">
          <Box  bg="red" borderRadius={"8px"} py="13px" px={{base:'5px',xl:'5px',xxl:'5px',xxxl:'25px'}} >
          <Text
          textAlign={"center"}
            textTransform="uppercase"
            color="#FFFFFF"
            fontSize={{base:'12px',xl:'12px',xxl:'12px',xxxl:'15px'}}
            fontWeight="700"
            lineHeight={"150%"}
            maxW="124px"
            letterSpacing="0.03em"
          >
      Support  
On-boarding
dApp, DeFi, Dex
Operators
          </Text>
          </Box>

        </Box>
        <Box position={"relative"} zIndex="99"  w="14%" display={"flex"} justifyContent="center" mt="182px">
          <Box  bg="#5234DD" borderRadius={"8px"} py="13px" px={{base:'5px',xl:'5px',xxl:'5px',xxxl:'25px'}} h="68px" >
          <Text
          textAlign={"center"}
            
            color="#FFFFFF"
            fontSize={{base:'12px',xl:'12px',xxl:'12px',xxxl:'15px'}}
            fontWeight="700"
            lineHeight={"150%"}
            maxW={{base:'94px',xl:'94px',xxxl:'124px'}}
            letterSpacing="0.03em"
            textTransform={"uppercase"}
          >
     Public Sale 
Strats 
          </Text>
          </Box>

        </Box>
        <Box position={"relative"} zIndex="99"  w="14%" display={"flex"} justifyContent="center" mt="182px">
          <Box  bg="#5234DD" borderRadius={"8px"} py="13px" px={{base:'5px',xl:'5px',xxl:'5px',xxxl:'25px'}} h="68px" >
          <Text
          textAlign={"center"}
            
            color="#FFFFFF"
            fontSize={{base:'12px',xl:'12px',xxl:'12px',xxxl:'15px'}}
            fontWeight="700"
            lineHeight={"150%"}
            maxW={{base:'94px',xl:'94px',xxxl:'124px'}}
            letterSpacing="0.03em"
            textTransform={"uppercase"}
          >
   Public Sale 
ends 
          </Text>
          </Box>
          

        </Box>
        <Box w="14%" display={"flex"} justifyContent="center">
          <Box>
          <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize={{base:'12px',xl:'12px',xxl:'12px',xxxl:'15px'}}
            fontWeight="700"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
      1.5 Release

          </Text>
          <Text
             textAlign={"center"}
            color="#FFFFFF"
            fontSize={{base:'12px',xl:'12px',xxl:'12px',xxxl:'15px'}}
            fontWeight="700"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     
Layer-2 Mainnet
          </Text>
          <Button mt="9px" bg="transparent" colorScheme={"transparent"} 
     color="#00E0FF"
     fontSize={{base:'10px',xl:'10px',xxl:'10px',xxxl:'12px'}}
     fontWeight="500"
     lineHeight={"150%"}
     
     borderRadius={"25px"}
     border="2px solid #00E0FF"
     >
     See Product Milestones   
     </Button>
          </Box>
       
        </Box>
        <Box w="14%" display={"flex"} justifyContent="center">
          <Box>
          <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize={{base:'12px',xl:'12px',xxl:'12px',xxxl:'15px'}}
            fontWeight="700"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
      1.5 Release

          </Text>
          <Text
             textAlign={"center"}
            color="#FFFFFF"
            fontSize={{base:'12px',xl:'12px',xxl:'12px',xxxl:'15px'}}
            fontWeight="700"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     
Layer-2 Mainnet
          </Text>
          <Button mt="9px" bg="transparent" colorScheme={"transparent"} 
     color="#00E0FF"
     fontSize={{base:'10px',xl:'10px',xxl:'10px',xxxl:'12px'}}
     fontWeight="500"
     lineHeight={"150%"}
     
     borderRadius={"25px"}
     border="2px solid #00E0FF"
     >
     See Product Milestones   
     </Button>
          </Box>
       
        </Box>
        <Box position={"relative"} zIndex="99"  w="14%" gap="17px" display={"flex"} justifyContent="center" alignItems={"center"} mt="182px" flexDirection={"column"} >
          <Box  bg="#17CC4A" borderRadius={"8px"} py="13px" px={{base:'5px',xl:'5px',xxl:'5px',xxxl:'25px'}} h="90px"  >
          <Text
          textAlign={"center"}
            
            color="#FFFFFF"
            fontSize={{base:'12px',xl:'12px',xxl:'12px',xxxl:'15px'}}
            fontWeight="700"
            lineHeight={"150%"}
            maxW="125px"
            letterSpacing="0.03em"
            textTransform={"uppercase"}
          >
 Continuous 
﻿Layer-2
Improvements  
          </Text>
          </Box>
          <Image src="/infinesor.svg"></Image>
          

        </Box>
      
        </Flex>
        </Box>
        </Box>

   </Box>
  )
}

export default FirstTimeLine