import { Box, Flex, Image, Text, Link, } from '@chakra-ui/react'
import React from 'react'
import LearnMore from '../../core/LearnMore'

const WhatLusarnContent = ({data}) => {
  return (
    <>
      <Box>
        <Flex alignItems="flex-start">
          <Image src="/arrow-right-circle.svg" alt="icon" mr="17px" mt="5px" />
          <Box>
          <Text
            fontWeight="400"
            fontSize="24px"
            lineHeight="140.8%"
            mb="20px"
            letterSpacing="0.03em"
            color="#FFFFFF"
          >
            {data?.headline}
          </Text>
          <Text
            fontWeight="400"
            fontSize="16px"
            lineHeight="140.8%"
            letterSpacing="0.03em"
            color="#FFFFFF"
            mb="16px"
          >
            {data?.pragraph}
          </Text>

          <LearnMore url="#"/>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default WhatLusarnContent