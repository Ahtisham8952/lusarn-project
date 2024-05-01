import { Box, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const CustomTextArea = () => {
  return (
    <Box mt="40px">
         
  <Textarea _focusVisible={{boxShadow:'none'}} resize={"none"} border="2px solid #FFFFFF" borderRadius={"16px"} color="#928EB7"  h="152px" p="22px 26px" bg="transparent" placeholder='Write your message' />

    </Box>
  )
}

export default CustomTextArea