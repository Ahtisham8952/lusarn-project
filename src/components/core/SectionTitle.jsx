import { Heading } from '@chakra-ui/react'
import React from 'react'

const SectionTitle = ({titleAlign, titleText}) => {
  return (
    <>
      <Heading as="h3"
        fontWeight="400"
        fontSize="50px"
        lineHeight="140.8%"
        letterSpacing="0.03em"
        color="#FFFFFF"
        textAlign={titleAlign}
      >
        {titleText}
      </Heading>
    </>
  )
}

export default SectionTitle