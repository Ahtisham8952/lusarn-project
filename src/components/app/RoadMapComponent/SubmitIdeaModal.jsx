import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    Image,
    Text,
    useDisclosure,
    Box,
    Textarea,
    Input,
    Link,
  } from '@chakra-ui/react'
const SubmitIdeaModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
   <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Flex onClick={onOpen} alignItems={"center"} gap="11px" justifyContent={"center"} cursor="pointer">
            <Image src="/lushcirclesubmit.svg"></Image>
            <Text
            
            color="#FFC93F"
            fontSize="18px"
            fontWeight="400"
            lineHeight={"21px"}
          >
       Submit Idea
          </Text>

          </Flex>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent maxW={"800px"} w="100%" borderRadius={"8px"} bg="#F0F3F6" >
    <ModalHeader p="0px" borderRadius={"8px"}>
      <Box
       zIndex="999"
       bgImage="url('/CorierTop.png')"
       h="108px"
       backgroundPosition="right"
       bgRepeat="no-repeat"
       w="100%"
       objectFit={"cover"}
       p="40px"
       >
         <Text
            
            color="#FFFFFF"
            fontSize="28px"
            fontWeight="700"
            lineHeight={"150%"}
            textTransform="uppercase"
            fontFamily="Nasalization"
          >
      Submit new idea
          </Text>

      </Box>

    </ModalHeader>
   
    <ModalBody p={{base:'20px',md:'40px'}} >
      <Box>
        <Textarea border="none" _focusVisible={{border:'none'}} py="25px" h="158px" bg="white" resize={"none"} placeholder="What would you like to be able to do? How would that help you?"></Textarea>
      </Box>
      {/* WHY IMp */}
      <Box my="24px">
        <Flex justifyContent={"space-between"} alignItems="center" flexDirection={{base:'column',md:'row'}}>
          <Box>
          <Text
            
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
      {/* INPUT CHANNEL */}
      <Box>
        <Flex gap="20px" alignItems={"center"} flexDirection={{base:'column',sm:'row'}}>
          <Box bg="white" borderRadius={"8px"} pt="4px" px="32px" w="100%" h="48px">
            <Flex>
            <Image src="/mailboxed.svg"></Image>
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
    
    </ModalBody>

 
  </ModalContent>
</Modal>
   </>
  )
}

export default SubmitIdeaModal