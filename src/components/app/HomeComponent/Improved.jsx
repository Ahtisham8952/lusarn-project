import { Box, Container, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import SectionTitle from '../../core/SectionTitle'
import ImprovedContent from './ImprovedContent'

const ImprovedData = [
    {
        name: "Pay online",
        paragraph: "Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.",
    },
    {
        name: "Pay online",
        paragraph: "Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.",
    },
    {
        name: "Pay online",
        paragraph: "Lusarn is the easiest way to pay with decentralized money. Integrate it via API or shop plugins.",
    },
]

const Improved = () => {
    return (
        <>
            <Box pt="80px" pb="140px">
                <Container maxW={{ xxxl: "1560px", xxl: "1440px", xl: "1280px", lg: "991px", md: "768px", sm: "575px", base: "100%" }} w="100%" mx="auto" px="20px">
                    <Box
                        bg="rgba(170, 255, 229, 0.1)"
                        backdropFilter="blur(2px)"
                        borderRadius="80px"
                        p="54px"
                    >
                        <SectionTitle titleText="What gets improved" titleAlign="center" />

                        <Text
                            fontWeight="400"
                            fontSize="16px"
                            lineHeight="140.8%"
                            textAlign="center"
                            letterSpacing="0.03em"
                            color="#FFFFFF"
                            maxW="748px"
                            w="100%"
                            mx="auto"
                            mt="16px"
                            mb="70px"
                        >
                            Being browser-first. It allows for easy user and developer interaction and makes complicated Blockchain universally accessible. Think library vs. Wikipedia.
                        </Text>

                        <Flex mx="-15px">
                            {ImprovedData.map((info,index) => {
                                return <Box key={index} w="33.33%" px="15px">
                                    <ImprovedContent data={info} />
                                </Box>
                            })}
                        </Flex>

                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Improved