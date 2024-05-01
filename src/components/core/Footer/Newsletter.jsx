import { Box, Flex, Image, Text, Input, Button, } from '@chakra-ui/react'
import React from 'react'

const Newsletter = () => {
    return (
        <>
            <Flex mb="42px" bg="rgba(47, 255, 230, 0.1)" borderRadius="16px" backdropFilter="blur(2px)" px={{xl: "22px", base: "2px"}} py={{xl: "34px", base: "20px"}} alignItems="center" flexWrap="wrap" mx="auto">
                <Flex px="18px" alignItems="center" w={{xl: "60%", lg: "50%", base: "100%"}}>
                    <Image alt='img' src="/newsletter-img.svg" mr="24px" maxW={{md: "auto", base: "60px"}} />
                    <Text
                        fontWeight="400"
                        fontSize={{xxl: "18px", md: "16px", base: "14px" }}
                        lineHeight="134.8%"
                        letterSpacing="0.05em"
                        color="#FFFFFF"
                    >Get email updates about our platform. Our newsletter will keep you updated on new features, improvements and integrations.</Text>
                </Flex>

                <Flex px="18px" alignItems={{sm: "center"}} w={{xl: "40%", lg: "50%", base: "100%"}} mt={{lg: "0px", base: "30px"}} flexDirection={{sm: "row", base: "column"}}>
                    <Input placeholder="enter mail id"
                        h="54px"
                        w={{sm: "341px", base: "100%"}}
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="21px"
                        color="#FFFFFF"
                        _placeholder={{ color: "#FFFFFF" }}
                        bg="transparent"
                        border=" 2px solid #FFFFFF"
                        borderRadius="16px"
                        mr={{sm: "24px"}}
                    />
                    <Button
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="21px"
                        color="#FFFFFF"
                        border=" 2px solid #FFFFFF"
                        borderRadius="16px"
                        bg="transparent"
                        colorScheme="transparent"
                        h="54px"
                        w={{md: "208px", sm: "180px", base: "100%"}}
                        mt={{base: "16px", sm: "0px"}}
                    >
                        Subscribe now
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}

export default Newsletter