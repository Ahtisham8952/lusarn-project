import { Box, Button, CircularProgress, CircularProgressLabel, Flex, Grid, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import RoadMapScheduleModal from './RoadMapScheduleModal';

const TimelineCard = ({TimeLine}) => {
  const {
    isOpen: isScheduleOpen,
    onOpen: onScheduleOpen,
    onClose: onScheduleClose,
  } = useDisclosure();
  return (
    <Box mb="100px">
        <Grid mb="40px"  templateColumns={{ base: "repeat(1, 1fr)",sm:"repeat(1, 1fr)", md: "repeat(2, 1fr)",lg:'repeat(3, 1fr)' }}  w="100%" gap="25px">

        {TimeLine.map((li) => (
        <Box 
        bgImage="/timelinebg.png"
          bgSize="100% 100%"
        onClick={onScheduleOpen}
       
            py="30px "
            px={{base:'20px',xxl:'20px',xxxl:'40px'}}>
                <Flex gap="8px" mb="38px" >
                <Button bg="transparent" colorScheme={"transparent"} 
     color="#00E0FF"
     fontSize={{base:'12px',xxl:'15px'}}
     fontWeight="500"
     lineHeight={"150%"}
     letterSpacing="0.03em"
     py="10px"
     px={{base:'10px',xl:'16px',xxl:'18px',xxxl:'32px'}}
     maxW={"159px"}
     borderRadius={"50px"}
     border="2px solid #00E0FF"
     >
      Latest News 
     </Button>
     <Button bg="transparent" colorScheme={"transparent"} 
     color="#3FF65C"
     fontSize={{base:'12px',xxl:'15px'}}
     fontWeight="500"
     lineHeight={"150%"}
     letterSpacing="0.03em"
     py="10px"
     px={{base:'10px',xl:'16px',xxl:'18px',xxxl:'32px'}}
     maxW={"118px"}
     borderRadius={"50px"}
     border=" 2px solid #3FF65C"
     >
     GitHub
     </Button>
     <Button
     display={li.thirdbtn}
      bg="transparent" colorScheme={"transparent"} 
     color="#FFE400"
     fontSize={{base:'12px',xxl:'15px'}}
     fontWeight="500"
     lineHeight={"150%"}
     letterSpacing="0.03em"
     py="10px"
     px={{base:'10px',xl:'16px',xxl:'18px',xxxl:'32px'}}
     maxW={"118px"}
     borderRadius={"50px"}
     border=" 2px solid #FFE400"
     >
     GitHub
     </Button>

                </Flex>
                <Flex justifyContent={"center"} mb="20px">
                <CircularProgress size={"140px"} value={li.Value} thickness='3px'  trackColor="rgba(204, 210, 239, 0.4)" color='#FC46C7'>
  <CircularProgressLabel
  color="#FFFFFF"
  fontSize="32px"
  fontWeight="400"
  lineHeight={"150%"}
  fontFamily="Nasalization"
  >{li.percentage}</CircularProgressLabel>
</CircularProgress>
                </Flex>
                <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="400"
            lineHeight={"150%"}
            maxW="354px"
            mx="auto"
          >
     {li.description}
          </Text>
          <Flex mt="50px">
            <Flex justifyContent={"space-between"} w="100%" gap="10px" flexWrap={{base:'wrap',xxxl:'nowrap'}} alignItems="center">
                <Flex gap="16px">
                    <Flex gap="2px" alignItems={"center"}>
                        <Image src="/userimg.svg"></Image>
                        <Text
            
            color="#FFFFFF"
            fontSize="20px"
            fontWeight="400"
            lineHeight={"150%"}
            fontFamily="Nasalization"
          >
     {li.users}
          </Text>
                    </Flex>
                    <Flex alignItems={"center"} gap="6px">
                    <Image src="/stargive.svg"></Image>
                    <Image src="/stargive.svg"></Image>
                    <Image src="/stargive.svg"></Image>  
                    </Flex>
                </Flex>
                <Text
            
            color="#FFE400"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
            fontFamily="Nasalization"
          >
      {li.timline}
          </Text>

            </Flex>

          </Flex>

        </Box>
        ))}
        </Grid>
        <Flex alignItems={"center"} gap="11px" justifyContent={"center"} cursor="pointer">
            <Image src="/lushcirclesubmit.svg"></Image>
            <Text
            
            color="#FFC93F"
            fontSize="18px"
            fontWeight="400"
            lineHeight={"21px"}
            fontFamily="Nasalization"
          >
       Show more
          </Text>

          </Flex>
          <RoadMapScheduleModal {...{ isScheduleOpen, onScheduleClose }} />

    </Box>
  )
}

export default TimelineCard