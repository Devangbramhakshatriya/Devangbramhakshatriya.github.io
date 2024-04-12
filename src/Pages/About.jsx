import {Box, Button, Image, Link, Text} from "@chakra-ui/react"
import styles from "./about.module.css"
import {BsDownload} from "react-icons/bs"
import Redirect from "../Components/redirect";
function About(){
    return(
        <Box className="nav-link about" >
       <Box w="100%"  className={styles.background_color} p={["4%","3%","2%"]}>
        <Text fontFamily="ubuntu" textDecoration="underline" fontSize={["15px","25px","40px","40px","50px","50px"]}>About Me</Text>
        <Box display={["flex","flex","flex","flex","flex","flex"]} p={["2%","6%","6%"]} gap={["8px","10px","15px","20px","20px","20px"]} >
            <Box w={["50%","50%","50%","50%","50%","50%"]} m="auto"> 
                <Image className="home-img" borderRadius={["15px","50%","50%","50%","50px","50%"]} src="devang pic.png" alt="" m="auto" boxSize={["100px","250px","330px","400px","400px","400px"]}/>
            </Box>
            <Box w={["100%","50%","50%","50%","50%","50%"]} >
                <Text textAlign="start" fontSize={["15px","30px","30px","35px","40px","45px"]}>I'm Devang Bramhakshatriya</Text>
                <Text id="user-detail-intro" mt={["8px","10px","15px","20px","20px","20px"]} textAlign="start" fontSize={["11px","15px","18px","22px","22px","24px"]}>A Full Stack Web Developer with a problem-solving mindset, proficient in various web technologies including HTML, CSS, JS, and ReactJS. I have a passion for creating useful projects and systems that can contribute to everyone's well-being, and I go to full extent in their execution. </Text>
                <Box pt={["5%","6%","6%"]} className="nav-link resume">
                <a  id="resume-link-2" onClick={Redirect}>
                    <Button  id="resume-button-2" bg="#B5C1CF" _hover={{bg:"#AFB9C6"}} gap="10px">Resume <BsDownload /></Button>
                    </a>
                </Box>
            </Box>
        </Box>
       </Box>
       </Box>
    )
}
export default About;