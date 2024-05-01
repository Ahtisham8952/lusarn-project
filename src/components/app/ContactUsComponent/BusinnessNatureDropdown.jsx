
import React, { useState, useRef, useEffect } from 'react';
import { Box, Text, Flex, Button, Image } from '@chakra-ui/react';

const BusinnessNatureDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <Box ref={dropdownRef} position="relative">
      
      <Button border="2px solid #FFFFFF" borderRadius={"16px"} h="88px" fontSize="20px" onClick={() => setIsOpen(!isOpen)}
    display={"flex"}
    justifyContent="space-between"
  fontWeight="400"
  lineHeight={"30px"} color="#928EB7" bg="transparent" colorScheme={"transparent"}  w="100%" p="22px 26px" textAlign={"left"}  >
    <Flex alignItems={"center"} justifyContent="space-between" w="100%">
    <Text
            
          
          >
  Business Nature
          </Text>
    <Image src="/droptipe.svg">

    </Image>

    </Flex>
 
    </Button>
      {isOpen && (
        <Box
          position="absolute"
         borderRadius={"4px"}
          left="0"
          width="100%"
          zIndex="1"
          backgroundColor="#FFFFFF"
          
        
          
        >
          <Box cursor={"pointer"} px="22px" py="15px" onClick={handleItemClick}>
          <Text
            
            color="#000000"
            fontSize="15px"
            fontWeight="500"
            lineHeight={"22px"}
          >
       Hedge fund
          </Text>
            
          </Box>
          <Box cursor={"pointer"} px="22px" pt="15px" onClick={handleItemClick}>
          <Text
            
            color="#000000"
            fontSize="15px"
            fontWeight="500"
            lineHeight={"22px"}
          >
       Venture captail fund 
          </Text>
            
          </Box>
          <Box cursor={"pointer"} px="22px" pt="15px" onClick={handleItemClick}>
          <Text
            
            color="#000000"
            fontSize="15px"
            fontWeight="500"
            lineHeight={"22px"}
          >
       Limited partner
          </Text>
            
          </Box>
          <Box cursor={"pointer"} px="22px" pt="15px" onClick={handleItemClick}>
          <Text
            
            color="#000000"
            fontSize="15px"
            fontWeight="500"
            lineHeight={"22px"}
          >
      Family office
          </Text>
            
          </Box>
          <Box cursor={"pointer"} px="22px" pt="15px" onClick={handleItemClick}>
          <Text
            
            color="#000000"
            fontSize="15px"
            fontWeight="500"
            lineHeight={"22px"}
          >
     Protocol or project
          </Text>
            
          </Box>
          <Box cursor={"pointer"} px="22px" pt="15px" onClick={handleItemClick}>
          <Text
            
            color="#000000"
            fontSize="15px"
            fontWeight="500"
            lineHeight={"22px"}
          >
    Crypto service vendor 
          </Text>
            
          </Box>
          <Box cursor={"pointer"} px="22px" py="15px" onClick={handleItemClick}>
          <Text
            
            color="#000000"
            fontSize="15px"
            fontWeight="500"
            lineHeight={"22px"}
          >
   Other
          </Text>
            
          </Box>
          
        </Box>
      )}
    </Box>
  );
};

export default BusinnessNatureDropdown;
