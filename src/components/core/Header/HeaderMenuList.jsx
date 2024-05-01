import { Box, Link, Button, Flex, Badge} from '@chakra-ui/react'
import React from 'react'

const HeaderMenuList = () => {
  return (
    <>
      <Box>
        <Flex
          fontWeight="400"
          fontSize={{xl: "18px", base: "16px"}}
          lineHeight="21px"
          textTransform="uppercase"
          color="#FFFFFF"
          alignItems={{lg: "center"}}
          justifyContent="space-between"
          w="100%"
          flexDirection={{lg: "row", base: "column"}}
        >
          
          <Link href="/roadmap" mb={{lg: "0", base: "20px"}} textAlign={{lg: "center", base: "left"}}>Roadmap</Link>
          <Link href="/contact-us" mb={{lg: "0", base: "20px"}} textAlign={{lg: "center", base: "left"}}>Contact Us</Link>
          <Link href="/about-us" mb={{lg: "0", base: "20px"}} textAlign={{lg: "center", base: "left"}}>About</Link>
         
          
          <Link href="#"
            bg="rgba(255, 255, 255, 0.1)"
            w="128px"
            h="51px"
            pt="2px"
            pr="3px"
            pl="4px"
            pb="6px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            ml={{xl: "64px", lg: "30px"}}
            borderRadius="20px 10px 20px 10px"
            transform="rotate(-2deg)"
          >
            <Badge as="span"
              bg="linear-gradient(263.5deg, #FFA800 7.24%, #F80000 123.42%)"
              w="100%"
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight="400"
              fontSize="18px"
              lineHeight="21px"
              color="#FFFFFF"
              borderRadius="20px 10px 20px 10px"
              transform="rotate(2deg)"
            >
              Login
            </Badge>
          </Link>
        </Flex>
      </Box>
    </>
  )
}

export default HeaderMenuList