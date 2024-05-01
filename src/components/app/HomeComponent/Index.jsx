import { Box } from '@chakra-ui/react'
import React from 'react'
import HomeBanner from './HomeBanner'
import WhatIsLusarn from './WhatIsLusarn'
import Improved from './Improved'
import PowerfulPlatform from './PowerfulPlatform'

const HomeComponent = () => {
  return (
    <>
      <Box bgImage="/home-bg.webp" bgSize="cover" bgPosition="top center" bgRepeat="no-repeat">
        <HomeBanner/>
        <WhatIsLusarn/>
        <Improved/>
        <PowerfulPlatform/>
      </Box>
    </>
  )
}

export default HomeComponent