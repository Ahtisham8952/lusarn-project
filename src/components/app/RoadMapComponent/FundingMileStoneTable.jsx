import { Box,Flex,Image,Text,Button } from '@chakra-ui/react'
import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  const Miledata=[
    {
        Name:'HARD CAP',
        preseed:'$30K ',
        seed:'$125K ',
        private:'$4.3M ',
        sale:'$12M ',
        public:'$12M ',
        color:'#FFFFFF'

    },
    {
        Name:'DENOMINATION',
        preseed:'BTC ',
        seed:'ETH/BTC   ',
        private:'ETH/BTC   ',
        sale:'ETH/BTC   ',
        public:'ETH/BTC   ',
        color:'#FFFFFF'

    },
    {
        Name:'PARTICIPANT',
        preseed:'Strategic Partner ',
        seed:'Strategic Partner   ',
        private:'Strategic Partner   ',
        sale:'Strategic Partner   ',
        public:'Supporter   ',
        color:'#FFE400'

    },
    {
        Name:'PERIOD',
        preseed:'June 2020  ',
        seed:'Oct 2020       ',
        private:'Aug/Sep 2021  ',
        sale:'Nov/Dec 2021  ',
        public:'April/May 2022   ',
        color:'#FFFFFF'

    },
  ]
const FundingMileStoneTable = () => {
  return (
   <Box mb="140px">
    <Flex justifyContent={"center"} mb="50px">
    <Text
            fontFamily="Nasalization"
            color="#FFFFFF"
            fontSize="24px"
            fontWeight="400"
            lineHeight={"150%"}
          >
      Funding Milestones
          </Text>
    </Flex>
    <Box bg="rgba(97, 211, 255, 0.1)" px="60px" py="48px" borderRadius={"16px"}>
        
    
    <TableContainer>
  <Table variant='simple' size="lg">
   
    <Thead>
      <Tr>
        <Th borderBottom={"1px solid "} borderColor="rgba(255, 255, 255, 0.4)"></Th>
        <Th borderBottom={"1px solid "} borderColor="rgba(255, 255, 255, 0.4)">
            <Box>
            <Text
             fontFamily="Nasalization"
            color="#FFFFFF"
            fontSize="18px"
            fontWeight="400"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     
     Pre Seed Round   
          </Text>
          <Button mt="19px" bg="transparent" colorScheme={"transparent"} 
     color="#3BFF55"
     fontSize={{base:'12px',xl:'10px',xxxl:'12px'}}
     fontWeight="500"
     lineHeight={"150%"}
    p="10px 32px"
     borderRadius={"25px"}
     border="2px solid #3BFF55"
     >
   Completed
     </Button>
            </Box>
        </Th>
        <Th borderBottom={"1px solid "} borderColor="rgba(255, 255, 255, 0.4)">
            <Box>
            <Text
             fontFamily="Nasalization"
            color="#FFFFFF"
            fontSize="18px"
            fontWeight="400"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     
     Seed Round   
          </Text>
          <Button mt="19px" bg="transparent" colorScheme={"transparent"} 
     color="#3BFF55"
     fontSize={{base:'12px',xl:'10px',xxxl:'12px'}}
     fontWeight="500"
     lineHeight={"150%"}
    p="10px 32px"
     borderRadius={"25px"}
     border="2px solid #3BFF55"
     >
   Completed
     </Button>
            </Box>
        </Th>
        <Th borderBottom={"1px solid "} borderColor="rgba(255, 255, 255, 0.4)">
            <Box>
            <Text
             fontFamily="Nasalization"
            color="#FFFFFF"
            fontSize="18px"
            fontWeight="400"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     
     Private sale Round      
          </Text>
          <Button mt="19px" bg="transparent" colorScheme={"transparent"} 
     color="#9DC7CD"
     fontSize={{base:'12px',xl:'10px',xxxl:'15px'}}
     fontWeight="500"
     lineHeight={"150%"}
    p="10px 32px"
     borderRadius={"25px"}
     border="2px solid #9DC7CD"
     >
 Upcoming
     </Button>
            </Box>
        </Th>
        <Th borderBottom={"1px solid "} borderColor="rgba(255, 255, 255, 0.4)">
            <Box>
            <Text
             fontFamily="Nasalization"
            color="#FFFFFF"
            fontSize="18px"
            fontWeight="400"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     
     Pre sale Round      
          </Text>
          <Button mt="19px" bg="transparent" colorScheme={"transparent"} 
     color="#9DC7CD"
     fontSize={{base:'12px',xl:'10px',xxxl:'15px'}}
     fontWeight="500"
     lineHeight={"150%"}
    p="10px 32px"
     borderRadius={"25px"}
     border="2px solid #9DC7CD"
     >
 Upcoming
     </Button>
            </Box>
        </Th>
        <Th borderBottom={"1px solid "} borderColor="rgba(255, 255, 255, 0.4)">
            <Box>
            <Text
             fontFamily="Nasalization"
            color="#FFFFFF"
            fontSize="18px"
            fontWeight="400"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     
     Public sale Round    
          </Text>
          <Button mt="19px" bg="transparent" colorScheme={"transparent"} 
     color="#9DC7CD"
     fontSize={{base:'12px',xl:'10px',xxxl:'15px'}}
     fontWeight="500"
     lineHeight={"150%"}
    p="10px 32px"
     borderRadius={"25px"}
     border="2px solid #9DC7CD"
     >
 Upcoming
     </Button>
            </Box>
        </Th>
      </Tr>
    </Thead>
    <Tbody>
    {Miledata.map((d ,index) => (
 <Tr key={index}>
 <Td borderBottom={"1px solid "} borderColor="rgba(255, 255, 255, 0.4)">
 <Text
            
            color="#64DCEE"
            fontSize="24px"
            fontWeight="600"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
    {d.Name}
          </Text>
 </Td>
 <Td borderBottom={"1px solid "} borderColor="rgba(255, 255, 255, 0.4)">
 <Text
            
            color={d.color}
            fontSize="16px"
            fontWeight="600"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     {d.preseed}
          </Text>
 </Td>
 <Td borderBottom={"1px solid "} borderColor="rgba(255, 255, 255, 0.4)">
 <Text
            
            color={d.color}
            fontSize="16px"
            fontWeight="600"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
    {d.seed}
          </Text>
 </Td>
 <Td borderBottom={"1px solid "} borderColor="rgba(255, 255, 255, 0.4)">
 <Text
            
            color={d.color}
            fontSize="16px"
            fontWeight="600"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
   {d.private}
          </Text>
 </Td>
 <Td borderBottom={"1px solid "} borderColor="rgba(255, 255, 255, 0.4)">
 <Text
            
            color={d.color}
            fontSize="16px"
            fontWeight="600"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
   {d.sale}
          </Text>
 </Td>
 <Td borderBottom={"1px solid "} borderColor="rgba(255, 255, 255, 0.4)">
 <Text
            
            color={d.color}
            fontSize="16px"
            fontWeight="600"
            lineHeight={"150%"}
            letterSpacing="0.03em"
          >
     {d.public}
          </Text>
 </Td>

</Tr>
 ))} 
     
   
    </Tbody>
    
  </Table>
</TableContainer>
</Box>


   </Box>
  )
}

export default FundingMileStoneTable