import { Box, Button, color, Link, Text, useMediaQuery } from "@chakra-ui/react"
import { Link as ScrollLink } from "react-scroll"

import MediaQuery from "react-responsive"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Skills from "../Pages/Skills"
import Projects from "../Pages/Peojects"
import Contact from "../Pages/Contact"
import { extendTheme } from '@chakra-ui/react'
import SideDrawer, { Sidebar } from "./SideDrawer"
import Calendar from "../Pages/Calendar"
import Stats from "../Pages/Stats"
const breackpoints={
    base:"420px",
    sm:"550px",
    md:"700px",
    lg:"850px",
    xl:"950px",
    "2xl":"1200px"
}

const theme=extendTheme({breackpoints})
function Navbar() {
    const [isnavlessthan500]=useMediaQuery('(max-width: 550px)')
    return (
        <Box >
            <Box p="5px" id="nav-menu" bg="#BECAD8" position="fixed" top="0" display="flex" w="100%" justifyContent="space-around">
                <Box fontSize={["10px","20px","30px","35px","40px","45px"]} className="nav-link resume">
                    <Link  id="resume-link-1" href="https://drive.google.com/file/d/1qpVsjmoE0wzYBLxoXSD1aBJtNVR1e7kU/view?usp=sharing" target={"_blank"}>
                    <Button  id="resume-button-1" bg="blue.100">Resume</Button>
                    </Link>
                </Box>
                {
                    isnavlessthan500? 
                    <Box><SideDrawer/></Box>
                    
                    :
                    <Box fontFamily="ubuntu" alignItems="center" display="flex" gap={["5px","8px","20px","22px","22px","22px","22px"]} fontSize={["20px","22px","23px","25px","28px","30px","32px"]} fontWeight="bold" textDecoration="underline">
                    <ScrollLink to={"home"}  smooth={true} offset={-200} duration={700}>Home</ScrollLink>
                    <ScrollLink to={"about"} smooth={true} offset={-60} duration={400}>About</ScrollLink>
                    <ScrollLink to={"skills"} smooth={true} offset={-60} duration={400}>Skills</ScrollLink>
                    <ScrollLink to={"projects"} smooth={true} offset={-60} duration={400}>Projects</ScrollLink>
                    <ScrollLink to={"contact"} smooth={true} offset={-60} duration={400}>Contact</ScrollLink>
                </Box>
                }
                
                
            </Box>
            <Box>
                <Box id={"home"}><Home /></Box>
                <Box id={"about"} className="about section"><About /></Box>
                <Box id={"skills"}><Skills /></Box>
                <Box id={"projects"}><Projects /></Box>
                <Box><Calendar/></Box>
                <Box><Stats/></Box>
                <Box id={"contact"}><Contact /></Box>
                
            </Box>
        </Box>
    )
}
export default Navbar