import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Img,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";



export default function RoadMapScheduleModal(props) {
  

  
  return (
    <>
      <Modal isOpen={props.isScheduleOpen} onClose={props.onScheduleClose} isCentered >
        <ModalOverlay bg="rgba(9, 19, 32, 0.7)" />
        <ModalContent maxW={"800px"} w="100%" borderRadius={"8px"} bg="#F0F3F6" >
    <ModalHeader p="0px" borderRadius={"8px"}>
      <Box
       zIndex="999"
       bgImage="url('/rendomschedulebg.png')"
       h="236px"
       backgroundPosition="right"
       bgRepeat="no-repeat"
       w="100%"
       objectFit={"cover"}
       px="40px"
       pt="77px"
       pb="38px"
       >
         <Text
            
            color="#FFFFFF"
            fontSize={{base:'18px',md:'22px',lg:'28px'}}
            fontWeight="700"
            lineHeight={"150%"}
            textTransform="uppercase"
            maxW={{base:'100%',md:'211px'}}
          >
     Roadmap 
is a schedule
          </Text>
          <Text
            maxW={"444px"}
            color="#FFFFFF"
            fontSize="15px"
            fontWeight="500"
            lineHeight={"150%"}
          >
     Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.
          </Text>

      </Box>

    </ModalHeader>
   
    <ModalBody p="0px" >
        <Box bg="white" p={{base:'20px',md:'40px'}} >
            <Flex justifyContent={"space-between"} mb="19px" alignItems={"center"}>
            <Text
            
            color="#000000"
            fontSize={{base:'14px',md:'16px',lg:'18px',xl:'20px'}}
            fontWeight="700"
            lineHeight={"150%"}
            
          >
      Marketplace Widgets for iOS14
          </Text>
          <Flex alignItems={"center"} gap="16px">
            <Image alt="img" src="/downups.svg"></Image>
            <Flex gap="2px" alignItems={"center"}>
                        <Image alt="img" src="/blkuser.svg"></Image>
                        <Text
            
            color="#4F6182"
            fontSize="20px"
            fontWeight="400"
            lineHeight={"150%"}
          >
    7
          </Text>
                    </Flex>
          </Flex>
            </Flex>
            <Flex gap="12px" alignItems={"center"}>
                <Box>
                <Image alt="img" src="/gorilamons.svg"></Image>
                </Box>
                <Box>
                    <Flex alignItems={"center"} gap="10px">
                    <Text
            
            color="#000000"
            fontSize="16px"
            fontWeight="600"
            lineHeight={"150%"}
          >
      Name here   
          </Text>
          <Text
            
            color="#B0B7C5"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"150%"}
          >
     Posted on 20/01/2021
          </Text>
                    </Flex>
                    <Text
            
            color="#555555"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
      Customize and monitor asset statuses on your iPhone home screen.
          </Text>
                </Box>
            </Flex>

        </Box>
        <Box p={{base:'20px',md:'40px'}}>
        <Box mb="24px">
        <Flex justifyContent={"space-between"} alignItems="center" flexDirection={{base:'column',md:'row'}}>
          <Box>
          <Text
            mb={{base:'10px',md:'0px'}}
            color="#000000"
            fontSize="15px"
            fontWeight="600"
            lineHeight={"150%"}
          >
       How important is this to you ?
          </Text>
          </Box>
          <Flex gap="8px" >
          <Button bg="transparent" colorScheme={"transparent"} 
     color="#5234DD"
     fontSize="15px"
     fontWeight="500"
     lineHeight={"150%"}
     py="10px"
     px={{base:'10px',md:'32px'}}
     borderRadius={"25px"}
     border=" 2px solid #5234DD"
     >
     Nice to have
     </Button>
     <Button bg="transparent" colorScheme={"transparent"} 
     color="#CED6DD"
     fontSize="15px"
     fontWeight="500"
     lineHeight={"150%"}
     py="10px"
     px={{base:'10px',md:'32px'}}
     borderRadius={"25px"}
     border=" 2px solid #CED6DD"
     >
     Critical
     </Button>
     <Button bg="transparent" colorScheme={"transparent"} 
     color="#CED6DD"
     fontSize="15px"
     fontWeight="500"
     lineHeight={"150%"}
     py="10px"
     px={{base:'10px',md:'32px'}}
     borderRadius={"25px"}
     border=" 2px solid #CED6DD"
     >
    Important
     </Button>

          </Flex>
        </Flex>

      </Box>
        
      <Box mb="24px">
        <Textarea border="none" _focusVisible={{border:'none'}} py="25px" h="158px" bg="white" resize={"none"} placeholder="Why do you need this? (Any context you provide will help us make this product better for you."></Textarea>
      </Box>
      {/* WHY IMp */}
      
      {/* INPUT CHANNEL */}
      <Box>
        <Flex gap="20px" alignItems={"center"} flexDirection={{base:'column',sm:'row'}}>
          <Box bg="white" borderRadius={"8px"} pt="4px" px="32px" w="100%" h="48px">
            <Flex>
            <Image alt="img" src="/mailboxed.svg"></Image>
            <Input border="none" _focusVisible={{border:'none'}} placeholder="Email address"></Input>
            </Flex>
            

          </Box>
          <Button bg="#5234DD" colorScheme={"#5234DD"} 
     color="#FFFFFF"
     fontSize="13px"
     fontWeight="700"
     h="48px"
     lineHeight={"150%"}
     p="8px 56px"
     borderRadius={"8px"}
     
     >
      Submit
     </Button>
        </Flex>
      </Box>
      <Box mt="19px">
      <Text
            
            color="#A49CC8"
            fontSize="13px"
            fontWeight="400"
            lineHeight={"150%"}
          >
      By submitting you agree to the <Link textDecoration={"underline"}>Terms of Use</Link>  and  <Link textDecoration={"underline"}>Privacy Policy</Link>
          </Text>
      </Box>
      </Box>
    
    </ModalBody>

 
  </ModalContent>
      </Modal>
    </>
  );
}
