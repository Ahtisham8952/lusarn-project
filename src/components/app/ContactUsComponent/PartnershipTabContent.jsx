import { Box, Button, Flex, Grid, Image } from '@chakra-ui/react'
import React from 'react'
import BusinnessNatureDropdown from './BusinnessNatureDropdown'
import CompanySizeDropdown from './CompanySizeDropdown'
import CountryDropdowwn from './CountryDropdowwn'
import CustomCheckbox from './CustomCheckbox'
import CustomInput from './CustomInput'
import CustomTextArea from './CustomTextArea'

const PartnershipTabContent = () => {
  return (
   <Box>
   <Grid  templateColumns={{ base: "repeat(1, 1fr)",sm:"repeat(1, 1fr)", md: "repeat(2, 1fr)",lg:'repeat(2, 1fr)' }}  w="100%" gap="38px">
   <CustomInput placeHolder="Name"/>
   <CustomInput placeHolder="Business Email"/>
   <CustomInput placeHolder="Company Name :"/>
   <BusinnessNatureDropdown/>
   <CompanySizeDropdown/>
   <CountryDropdowwn/>
   </Grid>
   <Box>
   <CustomTextArea/>
   </Box>
   <Box mt="40px">
   <CustomCheckbox/>

   </Box>
   <Box my="33px">
    <Image alt="img" src="/recaptche.svg"></Image>
   </Box>
   <Button bg="transparent" colorScheme={"transparent"} 
     color="#FFFFFF"
     fontSize="18px"
     fontWeight="400"
     lineHeight={"150%"}
     p="22px 32px"
     borderRadius={"16px"}
     border="1px solid white"
     >
    Submit Now
     </Button>
        

    

   </Box>
  )
}

export default PartnershipTabContent