import { Box, Button, CircularProgress, CircularProgressLabel, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
const Person=[
    {
bg:"#4513B5",
bordercol:'rgba(255, 255, 255, 0.2)',
Heading:'Name Here',
description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu p',

    },
    {
        bg:"#9E13B5",
        bordercol:'rgba(255, 255, 255, 0.2)',
        Heading:'Name Here',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu p',
        
            },
            {
                bg:"#0F9399",
                bordercol:'rgba(255, 255, 255, 0.2)',
                Heading:'Name Here',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu p',
             
                    },
                    {
                        bg:"#CF7F08",
                        bordercol:'rgba(255, 255, 255, 0.2)',
                        Heading:'Name Here',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu p',
                       
                            },
]
const AboutCards = () => {
  return (
    <Box >
        <Grid gap={{base:'32px',sm:'0px'}} mt="40px"  templateColumns={{ base: "repeat(1, 1fr)",sm:"repeat(2, 1fr)", md: "repeat(2, 1fr)",lg:'repeat(2, 1fr)' }}  w="100%" >

        {Person.map((li) => (
       <Box _first={{mt:{base:'0px',sm:'-40px'}}} _last={{mt:{base:'0px',sm:'40px'}}} bg={li.bg} borderRadius={"30px"} px={{base:'15px',xxl:'15px',xxxl:'30px'}} pt={{base:'30px',md:'52px'}} pb={{base:'30px',md:'84px'}} h={{base:'auto',md:'402px'}} mx="16px" >
        <Box maxW={"260px"} mx="auto">

       
        <Box maxW={"138px"} mx="auto" mb="24px" border="5px solid " borderColor={li.bordercol} borderRadius={"30px"}>
            <Image src="/nameimge.svg"></Image>
        </Box>
        <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize="24px"
            fontWeight="400"
            lineHeight={"150%"}
            fontFamily="Nasalization"
          >
{li.Heading}
          </Text>
          <Text
            textAlign={"center"}
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
           
            
          >
{li.description}
          </Text>
          </Box>

       </Box>
       
        ))}
        </Grid>
      

    </Box>
  )
}

export default AboutCards