import { Heading, Box, UnorderedList, ListItem, Link } from '@chakra-ui/react'
import React from 'react'

const FooterMenu = ({ data }) => {
    return (
        <>
            <Box>
                <Heading
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="140.8%"
                    letterSpacing="0.03em"
                    color="#FFFFFF"
                    mb="24px"
                >
                    {data?.footerMenuTitle}
                </Heading>

                <UnorderedList listStyleType="none" p="0px" ml="0px"
                    fontWeight="400"
                    fontSize={{xxl: "14px", xl: "13px"}}
                    lineHeight="150%"
                    letterSpacing="0.03em"
                    color="#FFFFFF"
                >
                    {data?.listItem?.map((ListItems) =>
                        <ListItem mb="12px"><Link href="#" transition="0.3s" _hover={{ opacity: "0.7",  }}>{ListItems?.footerLink}</Link></ListItem>
                    )}
                    
                </UnorderedList>
            </Box>
        </>
    )
}

export default FooterMenu