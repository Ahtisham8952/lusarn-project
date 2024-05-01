import { FormControl, Input } from '@chakra-ui/react'
import React from 'react'

const CustomInput = ({placeHolder}) => {
  return (
   <>
   <FormControl>
    <Input h={{base:'60px',lg:'88px'}} py="25px" px="32px" color="#D5C3DC"
            fontSize="20px"
            fontWeight="500"
            lineHeight={"150%"} _focusVisible={{boxShadow:'none'}} border="2px solid #FFFFFF" borderRadius={"16px"}  placeholder={placeHolder}/>
   </FormControl>
   </>
  )
}

export default CustomInput