import { Heading, Box, Flex, Text, Container, Image, Button, Input } from '@chakra-ui/react'
import React from 'react'
import CustomBtn from '../../core/CustomBtn'

const HomeBanner = () => {
    return (
        <>
            <Box pt="224px" pb="103px">
                <Container maxW={{ xxxl: "1560px", xxl: "1440px", xl: "1280px", lg: "991px", md: "768px", sm: "575px", base: "100%" }} w="100%" mx="auto" px="20px">
                    <Heading as="h2"
                        fontWeight="400"
                        fontSize="72px"
                        lineHeight="160%"
                        letterSpacing="0.04em"
                        color="#FFFFFF"
                        mb="30px"
                    >
                        Ethereum Layer 2 Scaling Enterprise Solutions For scalable Decentralised Financial <Text color="#FFBC00" as="span">Market Future</Text>
                    </Heading>
                    <Flex flexWrap="wrap" pb="25px">
                        <Box mr="15px" mb="15px"><CustomBtn btnText="Latest News" customType="a" url="#" borderColorCustom="#00E0FF" btnColor="#00E0FF" /></Box>
                        <Box mr="15px" mb="15px"><CustomBtn btnText="GitHub" customType="a" url="#" borderColorCustom="#3FF65C" btnColor="#3FF65C" /></Box>
                        <Box mr="15px" mb="15px"><CustomBtn btnText="Staking" customType="a" url="#" borderColorCustom="#FD47E0" btnColor="#FD47E0" /></Box>
                    </Flex>

                    <Box
                        fontWeight="400"
                        fontSize="24px"
                        lineHeight="130.8%"
                        letterSpacing="0.03em"
                        color="#FFFFFF"
                        maxW="1363px"
                        w="100%"
                    >
                        <Flex alignItems="flex-start" justifyContent="flex-start" mb="25px"><Image src="/banner-list-cion.svg" alt="icon" mt="5px" mr="16px" /><Text>Ethereum Cross-Asset Scaling with High throughput & user privacy, each transaction is encoded as a zkSNARK <Text as="span" color="#FFB803">(2,000 transactions per second).</Text></Text></Flex>
                        <Flex alignItems="flex-start" justifyContent="flex-start" mb="25px"><Image src="/banner-list-cion.svg" alt="icon" mt="5px" mr="16px" /><Text>User accounts can be created with or without a linked Ethereum address.</Text></Flex>
                        <Flex alignItems="flex-start" justifyContent="flex-start" mb="25px"><Image src="/banner-list-cion.svg" alt="icon" mt="5px" mr="16px" /><Text>Lusarn slashes Ethereum gas costs by 200x</Text></Flex>
                    </Box>

                    <Box>
                        <Flex flexWrap="wrap" alignItems="center">
                            <Image src="/banner-icon.svg" alt="icon" mb="14px" />
                            <Input 
                                type="email"
                                px="24px"
                                py="5px" 
                                mx="16px" 
                                placeholder="Enter your mail id"
                                h="48px"
                                fontWeight="400"
                                fontSize="15px"
                                lineHeight="130.8%"
                                letterSpacing="0.03em"
                                color="#CAC1E8"
                                mb="14px"
                                w="276px"
                                borderRadius="16px"
                                border="2px solid #882BD0"
                            />
                            <Button
                                fontWeight="400"
                                fontSize="16px"
                                lineHeight="130.8%"
                                textAlign="center"
                                letterSpacing="0.03em"
                                color="#882BD0"
                                borderRadius="16px 22px 12px 18px"
                                h="47px"
                                w="154px"
                                mb="14px"
                            >
                                Subscribe
                            </Button>
                        </Flex>

                        <Text
                            fontWeight="400"
                            fontSize="15px"
                            lineHeight="140.8%"                            
                            letterSpacing="0.03em"
                            color="#FFFFFF"
                        >Airdrop of <Text as="span" color="#FFE400">18,000,000 EMLD</Text> tokens available to the first 1000 claims"</Text>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default HomeBanner