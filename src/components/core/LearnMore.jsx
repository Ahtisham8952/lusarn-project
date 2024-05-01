import { Link, Image } from '@chakra-ui/react'
import React from 'react'

const LearnMore = ({url}) => {
  return (
    <>
      <Link
            href={url}
            fontWeight="400"
            fontSize="18px"
            lineHeight="21px"
            color="#FFC93F"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            Learn more
            <Image src="/banner-list-cion.svg" alt="icon" ml="8px" />
          </Link>
    </>
  )
}

export default LearnMore