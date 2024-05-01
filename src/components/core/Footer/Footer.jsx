import {
  Box,
  Container,
  Flex,
  Link,
  Image,
  Text,
  Heading,
  Badge,
  FormControl,
  Input,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import Newsletter from "./Newsletter";
import FooterMenu from "./FooterMenu";

const footerLinks = [
  {
    footerMenuTitle: "Innovation",
    listItem: [
          {footerLink: "White paper",},
          {footerLink: "Light paper",},
          {footerLink: "Technology explained",},
          {footerLink: "Roadmap",},
          {footerLink: "Use cases",},
          {footerLink: "Staking",},
          {footerLink: "FAQ",},
      ]
  },
  {
    footerMenuTitle: "Products",
    listItem: [
          {footerLink: "ETH explorer",},
          {footerLink: "Krypton wallet",},
          {footerLink: "NO2 DEX",},
      ]
  },
  {
    footerMenuTitle: "Participate",
    listItem: [
          {footerLink: "Apps",},
          {footerLink: "Individuals",},
          {footerLink: "Businesses",},
          {footerLink: "Validators",},
          {footerLink: "Delegators",},
          {footerLink: "Runining a full node",},
      ]
  },
  {
    footerMenuTitle: "Token",
    listItem: [
          {footerLink: "Emerlad",},
          {footerLink: "Buy emerlad",},
          {footerLink: "Tokenomics",},
      ]
  },
  {
    footerMenuTitle: "Developers",
    listItem: [
          {footerLink: "GitHub",},
          {footerLink: "Developer docs",},
          {footerLink: "Tutorials",},
          {footerLink: "Forum",},
          {footerLink: "Development",},
      ]
  },
  {
    footerMenuTitle: "Company",
    listItem: [
          {footerLink: "About",},
          {footerLink: "Investors",},
          {footerLink: "Partners & advisors",},
          {footerLink: "Team",},
          {footerLink: "Jobs",},
          {footerLink: "Blog",},
          {footerLink: "Contact",},
      ]
  },
  {
    footerMenuTitle: "Media",
    listItem: [
          {footerLink: "Newsroom",},
          {footerLink: "Press contact",},
      ]
  },
]


const Footer = () => {
  return (
    <>
      <Box>
        <Box bgImage="/footer-bg.webp" bgPosition="center bottom" bgSize="cover" bgRepeat="no-repeat" py="36px" minH="847px">
          <Container maxW={{xxxl: "1560px", xxl: "1440px", xl: "1280px", lg: "991px", md: "768px", sm: "575px", base: "100%"}} w="100%" mx="auto" px="20px">
            <Box mb="82px">
              <Newsletter/>
            </Box>
            <Box>
              <Flex alignItem="flexStart" justifyContent="flex-start" mx="-15px" flexWrap="wrap" 
              // gridTemplateRows="masonry"
              >
                {footerLinks.map((info,index) => {
                  return <Box key={index} w={{xl: "14.285%", md: "25%", sm: "33.33%", base: "50%"}} px="15px" mt={{xl: "0px", base: "20px"}}>
                    <FooterMenu data={info}/>
                  </Box>
                })}
                
              </Flex>
            </Box>
          </Container>
        </Box>
        <Box bg="#0E0254" minH="104px" pt="22px">
          <Container maxW={{xxxl: "1560px", xxl: "1440px", xl: "1280px", lg: "991px", md: "768px", sm: "575px", base: "100%"}} w="100%" mx="auto" px="20px">
            <Flex alignItems="center" justifyContent="space-between" flexDirection={{md: "row", base: "column-reverse"}}>
              <Box w={{md: "45%", base: "100%"}} pb="22px" textAlign={{md: "left", base: "center"}}>
                <Text
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="140.8%"
                  display="flex"
                  alignItems="center"
                  justifyContent={{md: "flex-start", base: "center"}}
                  letterSpacing="0.03em"
                  color="#FFFFFF"
                >
                  Created by: <Link color="#FFE400" cursor="pointer" href="#" ml="8px">Element Zero Labs</Link>
                </Text>
                <Text
                  fontWeight="400"
                  fontSize="12px"
                  lineHeight="125%"
                  color="#FFFFFF"
                  mb="6px"
                >
                  Built by leaders from leading Blockchain R&D labs.
                </Text>
                <Text
                  fontWeight="400"
                  fontSize="11px"
                  lineHeight="140.8%"
                  display="flex"
                  alignItems="center"
                  letterSpacing="0.03em"
                  color="#DCDCDC"
                  justifyContent={{md: "flex-start", base: "center"}}
                >
                  © 20201-21 Lusarn. All rights reserved.
                </Text>
              </Box>
              <Box w={{md: "55%", base: "100%"}} pb="12px">
                <Flex maxW="284px" w="100%" alignItems="center" justifyContent="space-between" ml={"auto"} mr={{md: "0px", base: "auto"}} mb="14px">
                  <Link href="#" cursor="pointer"><Image src="/discord-s.svg" alt="icon" /></Link>
                  <Link href="#" cursor="pointer"><Image src="/radit-s.svg" alt="icon" /></Link>
                  <Link href="#" cursor="pointer"><Image src="/twitter-s.svg" alt="icon" /></Link>
                  <Link href="#" cursor="pointer"><Image src="/sms-s.svg" alt="icon" /></Link>
                  <Link href="#" cursor="pointer"><Image src="/telegram-s.svg" alt="icon" /></Link>
                  <Link href="#" cursor="pointer"><Image src="/m-s.svg" alt="icon" /></Link>
                </Flex>
                <Text
                  fontWeight="400"
                  fontSize="12px"
                  lineHeight="140.8%"
                  display="flex"
                  alignItems="center"
                  letterSpacing="0.03em"
                  color="#FFFFFF80"
                  justifyContent={{xsm: "space-between", base: "center"}}
                  maxW="449px"
                  ml="auto"
                  mr={{md: "0px", base: "auto"}}
                  flexWrap="wrap"
                >
                  <Link href="#" mb="10px" transition="0.3s" color="#FFFFFF80" cursor="pointer" _hover={{ color: "#FFFFFF" }} px={{xsm: "0px", base: "10px"}}>Legal Disclaimer</Link>
                  <Link href="#" mb="10px" transition="0.3s" color="#FFFFFF80" cursor="pointer" _hover={{ color: "#FFFFFF" }} px={{xsm: "0px", base: "10px"}}>Cookies & Privacy Policy</Link>
                  <Link href="#" mb="10px" transition="0.3s" color="#FFFFFF80" cursor="pointer" _hover={{ color: "#FFFFFF" }} px={{xsm: "0px", base: "10px"}}>Copyright Policy</Link>
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
