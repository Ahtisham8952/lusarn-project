import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SectionTitle from '../../core/SectionTitle'
import CustomBtn from '../../core/CustomBtn'
import WhatLusarnContent from './WhatLusarnContent'

const lusarnData = [
    {
        headline: "A Safer Financial Services Ecosystem Through Decentralization",
        pragraph: "Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum. Built on an adapted implementation of ZK Rollups and a decentralized network of Proof-of-Stake (PoS) validators,",
    },
    {
        headline: "Innovative Fraud, Credit, and Identity Products Built on the Lusarn STAR protocol ",
        pragraph: "Being browser-first. It allows for easy user and developer interaction and makes complicated Blockchain universally accessible. Think library vs. Wikipedia.",
    },
]

const WhatIsLusarn = () => {
    return (
        <>
            <Box>
                <Container maxW={{ xxxl: "1560px", xxl: "1440px", xl: "1280px", lg: "991px", md: "768px", sm: "575px", base: "100%" }} w="100%" mx="auto" px="20px">
                    <Flex>
                        <Box w="50%">
                            <SectionTitle titleText="What is Lusarn" titleAlign="left" />
                            <Text
                                fontWeight="400"
                                fontSize="16px"
                                lineHeight="140.8%"
                                letterSpacing="0.03em"
                                color="#FFFFFF"
                                mt="18px"
                                mb="60px"
                                maxW="736px"
                                w="100%"
                            >
                                Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum. Built on an adapted implementation of ZK Rollups and a decentralized network of Proof-of-Stake (PoS) validators,Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum. Built on an adapted implementation of ZK Rollups and a decentralized network of Proof-of-Stake (PoS) validators,Lusarn Network is a Layer-2 scaling enterprise solution that provides instant, low cost, and secure transactions on Ethereum. Built on an adapted implementation of ZK Rollups and a
                            </Text>
                            <Flex flexWrap="wrap" pb="25px">
                                <Box mr="15px" mb="15px"><CustomBtn btnText="Read Whitepaper" customType="a" url="#" borderColorCustom="#00E0FF" btnColor="#00E0FF" /></Box>
                                <Box mr="15px" mb="15px"><CustomBtn btnText="Tokenomics" customType="a" url="#" borderColorCustom="#3FF65C" btnColor="#3FF65C" /></Box>
                            </Flex>
                        </Box>

                        <Box w="50%">
                            {lusarnData.map((info,index) => {
                                return <Box key={index} mb="42px">
                                    <WhatLusarnContent data={info}/>
                                </Box>
                            })}
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

export default WhatIsLusarn