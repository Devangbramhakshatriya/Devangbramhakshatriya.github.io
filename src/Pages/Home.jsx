import { Box, Image, Text } from "@chakra-ui/react";
import styles from "./home.module.css"
import { extendTheme } from '@chakra-ui/react'
import Typeing from "../Components/Typeing";
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
        <Box className="nav-link home">
        <Box w="100%" h={["241px","320px","570px","630px","630px","630px"]} className={styles.background_image}  display="flex" color="black">
            <Box mt={["30%","25%","15%","15%","18%","18%"]} ml="2%" textAlign="start" fontWeight="bold">
            <Text fontFamily="ubuntu" id="user-detail-name" fontSize={["20px","40px","45px","50px","60px","60px"]}>Devang Bramhakshatriya</Text>
            {/* <Text color="red" fontSize={["13px","15px","22px","25px","28px","30px"]}>a</Text> */}
            <Text id="user-detail-intro" fontSize={["15px","30px","30px","30px","40px","50px"]}>MERN Stack Developer</Text>
            
            </Box>
       </Box>
       </Box>
    )
}
export default Home;