import { Box, Flex, Image, Container, Text, Button } from '@chakra-ui/react'
import React from 'react'
import SectionTitle from '../../core/SectionTitle'

const PowerfulPlatform = () => {
  return (
    <>
      <Box pb="109px">
        <Container maxW={{ xxxl: "1560px", xxl: "1440px", xl: "1280px", lg: "991px", md: "768px", sm: "575px", base: "100%" }} w="100%" mx="auto" px="20px">
            <Flex>
                <Box w="50%" pr="15px">
                    <Box maxW="740px" w="100%">
                        <SectionTitle titleText="On the most powerful platform to  BUILD ON" titleAlign="left" />
                        <Text
                            fontWeight="400"
                            fontSize="24px"
                            lineHeight="160%"
                            letterSpacing="0.03em"
                            color="#FFFFFF"
                            mb="26px"
                        >
                            Lusarn supports smart contracts, enabled by ZK Rollup technology. Developers are able to:
                        </Text>
                    </Box>
                    <Box
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="130.8%"
                        letterSpacing="0.03em"
                        color="#FFFFFF"
                        maxW="1363px"
                        w="100%"
                    >
                        <Flex alignItems="flex-start" justifyContent="flex-start" mb="25px"><Image src="/arrow-right-circle.svg" alt="icon" mt="5px" mr="16px" /><Text>Build smart contracts in Rust, Go, or AssemblyScript</Text></Flex>
                        <Flex alignItems="flex-start" justifyContent="flex-start" mb="25px"><Image src="/arrow-right-circle.svg" alt="icon" mt="5px" mr="16px" /><Text>Run on ethereum chain , connected by the Lusarn STAR</Text></Flex>
                        <Flex alignItems="flex-start" justifyContent="flex-start" mb="25px"><Image src="/arrow-right-circle.svg" alt="icon" mt="5px" mr="16px" /><Text>Use ERC 20, ERC 721 token , onchain swaps, layer 2 oracles as primitives</Text></Flex>
                        <Flex alignItems="flex-start" justifyContent="flex-start" mb="25px"><Image src="/arrow-right-circle.svg" alt="icon" mt="5px" mr="16px" /><Text>Expose dApp userbases to Lusarn STAR  services in a permissionless fashion</Text></Flex>
                    </Box>
                    <Button borderRadius="16px" border="2px solid #FFFFFF" h="64px" maxW="376px" w="100%" px="32px" display="flex" justifyContent="flex-start" bg="transparent" colorScheme="transparent"> 
                        Build now
                    </Button>
                </Box>
                <Box w="50%" pl="15px">
                    <Flex flexWrap="wrap" mx="-5px" maxW="624px" ml="auto">
                        <Box w="33.33%" mb="33px" px="5px"><Image src="/cloud1.svg" alt="icon" w="100%" /></Box>
                        <Box w="33.33%" mb="33px" px="5px"><Image src="/cloud1.svg" alt="icon" w="100%" /></Box>
                        <Box w="33.33%" mb="33px" px="5px"><Image src="/cloud1.svg" alt="icon" w="100%" /></Box>
                        <Box w="33.33%" mb="33px" px="5px"><Image src="/cloud1.svg" alt="icon" w="100%" /></Box>
                        <Box w="33.33%" mb="33px" px="5px"><Image src="/cloud1.svg" alt="icon" w="100%" /></Box>
                        <Box w="33.33%" mb="33px" px="5px"><Image src="/cloud1.svg" alt="icon" w="100%" /></Box>
                    </Flex>
                </Box>
            </Flex>
        </Container>
      </Box>
    </>
  )
}

export default PowerfulPlatform