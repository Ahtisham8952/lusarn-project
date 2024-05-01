import { Button } from '@chakra-ui/react'
import React from 'react'

const CustomBtn = ({btnText, customType, borderColorCustom, btnColor, url}) => {
  return (
    <>
      <Button
        as={customType}
        href={url}
        cursor="pointer"
        fontWeight="500"
        fontSize="15px"
        lineHeight="130.8%"
        textAlign="center"
        letterSpacing="0.03em"
        color={btnColor}
        py="10px"
        px="32px"
        border="2px solid"
        borderColor={borderColorCustom}
        borderRadius="24px"
        bg="transparent"
        display="flex"
        alignItems="center"
        justifyContent="center"
        colorScheme="transparent"
      >
        {btnText}
      </Button>
    </>
  )
}

export default CustomBtn