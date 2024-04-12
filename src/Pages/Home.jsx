import { Box, Image, Text } from "@chakra-ui/react";
import styles from "./home.module.css"
import { extendTheme } from '@chakra-ui/react'
import Typeing from "../Components/Typeing";
import Typewriter from "typewriter-effect"
import "@fontsource/rye"

const breackpoints={
    base:"420px",
    sm:"550px",
    md:"700px",
    lg:"850px",
    xl:"950px",
    "2xl":"1200px"
}
const theme=extendTheme({breackpoints})
function Home(){
    return(
        <Box className="nav-link home" >
        <Box w="100%" h={["240px","350px","500px","680px","680px","800px"]} className={styles.background_image}  display="flex" color="black" >
            <Box mt={["20%","20%","20%","15%","14%","14%"]} ml="2%" textAlign="start" fontWeight="bold" color="Black">
            <Text fontFamily="unset" id="user-detail-name" fontSize={["15px","20px","35px","40px","50px","50px"]}>Hello, I'm</Text>
            <Text fontFamily="unset" id="user-detail-name" fontSize={["20px","30px","45px","50px","55px","55px"]}> Devang Bramhakshatriya</Text>
            {/* <Text color="red" fontSize={["13px","15px","22px","25px","28px","30px"]}>a</Text> */}
            <Text fontSize={["15px","30px","30px","30px","40px","50px"]} color="#464F7F" fontFamily="Rye">
            <Typewriter fontSize="30px"
            onInit={(type)=>{
                type
                .typeString("A MERN Stack Developer").pauseFor(1000).deleteAll()
                .typeString("A Problem Solver").pauseFor(1000).deleteAll()
                .typeString("A Good Team Player").pauseFor(1000)
                .start()
            }}
            />
            </Text>
            </Box>
       </Box>
       </Box>
    )
}
export default Home;