import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import LearnMore from '../../core/LearnMore'

const ImprovedContent = ({data}) => {
  return (
    <>
      <Box textAlign="center" maxW="351px" mx="auto">
        <Box borderRadius="50%" mb="16px" h="195px" w="195px" border="3px solid #FD7676" mx="auto">

        </Box>
        <Text
            fontSeight="400"
            fontSize="24px"
            lineHeight="140.8%"
            textAlign="center"
            letterSpacing="0.03em"
            color="#FFFFFF"
            mb="16px"
        >
            {data?.name}
        </Text>
        <Text
            fontWeight="400"
            fontSize="16px"
            lineHeight="140.8%"
            textAlign="center"
            letterSpacing="0.03em"
            color="#FFFFFF"
            mb="16px"
        >
            {data?.paragraph}
        </Text>
        <Flex justifyContent="center">
            <LearnMore/>
        </Flex>
      </Box>
    </>
  )
}

export default ImprovedContent