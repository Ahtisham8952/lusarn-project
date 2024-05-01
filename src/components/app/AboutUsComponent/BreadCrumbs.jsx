import React from 'react'
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
const BreadCrumbs = ({PageName,PageLink}) => {
  return (
    <>
    <Box my="19px">

    
    <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='#' color="#000000"
            fontSize="12px"
            fontWeight="600"
            lineHeight={"16px"} textDecoration={"underline"}>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href={PageLink} color="#686868"
            fontSize="12px"
            fontWeight="600"
            lineHeight={"16px"}>{PageName}</BreadcrumbLink>
  </BreadcrumbItem>

 
</Breadcrumb>
</Box>
    </>
  )
}

export default BreadCrumbs