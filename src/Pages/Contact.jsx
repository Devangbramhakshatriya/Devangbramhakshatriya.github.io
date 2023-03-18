
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Image,
    useColorModeValue,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md"
import { AiFillLinkedin } from "react-icons/ai"
import { RxGithubLogo } from "react-icons/rx"
import { IoMdCall } from "react-icons/io"
import { extendTheme } from '@chakra-ui/react'
const breackpoints = {
    base: "420px",
    sm: "550px",
    md: "700px",
    lg: "850px",
    xl: "950px",
    "2xl": "1200px"
}

const theme = extendTheme({ breackpoints })
function Contact() {
    return (
        <Box bg="#111111" className="nav-link contact" color="white" mt="20px">
            <Box  w="100%" pt={["10px", "15px", "20px", "25px", "30px", "30px"]} >
                <Text fontFamily="ubuntu" textDecoration="underline" fontSize={["15px", "25px", "40px", "40px", "50px", "50px"]}>Contact Me</Text>
                <Box
                    // bg={useColorModeValue("white", "gray.900")}
                    color={useColorModeValue("gray.700", "gray.200")}
                    id="contact"
                    width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                    mt={{ base: "20px", sm: "20px", md: "30px", lg: "70px" }}
                //   boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                >
                    <Box
                        mb={{ base: "15px", sm: "20px", md: "20x", lg: "25px" }}
                        textAlign="center"
                        w={{ base: "80%", sm: "70%", md: "60%", lg: "50%" }}
                        m="auto"
                    >
                        <Text
                            fontSize={{ base: "3xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                            fontFamily="ubuntu"
                            color="white"
                        >
                            Get In Touch
                        </Text>
                        <Text fontSize={{ base: "1xl", sm: "1xl", md: "2xl", lg: "2xl" }} fontFamily="ubuntu" color="white">Got a project? Reach out and let's work together on something exciting. Big or small. Mobile or web.</Text>
                    </Box>
                    <Box color="white" w="50%" m="auto" p={["10px", "15px", "20px", "25px", "30px", "30px"]}>
                        <Box display="flex" pb={["10px", "15px", "20px", "25px", "30px", "30px"]} fontSize={["10px", "15px", "20px", "25px", "30px", "30px"]} alignItems="center" gap={["10px", "15px", "20px", "25px", "30px", "30px"]}><MdEmail color="#BECAD8" size="30px" />
                            <Link  id="contact-email" href="mailto:devangbramhakshtriya@gmail.com" target={"_blank"}><Text>devangbramhakshtriya@gmail.com</Text></Link>
                        </Box>

                        <Box display="flex" pb={["10px", "15px", "20px", "25px", "30px", "30px"]} fontSize={["10px", "15px", "20px", "25px", "30px", "30px"]} alignItems="center" gap={["10px", "15px", "20px", "25px", "30px", "30px"]}><RxGithubLogo color="#BECAD8" size="30px" /><Link id="contact-github" href="https://github.com/Devangbramhakshatriya" target={"_blank"}><Text>GitHub</Text></Link></Box>

                        <Box display="flex" pb={["10px", "15px", "20px", "25px", "30px", "30px"]} fontSize={["10px", "15px", "20px", "25px", "30px", "30px"]} alignItems="center" gap={["10px", "15px", "20px", "25px", "30px", "30px"]}><AiFillLinkedin color="#BECAD8" size="30px" /><Link  id="contact-linkedin" href="https://www.linkedin.com/in/devang-bramhakshatriya-b0981820b/" target={"_blank"}><Text>Linkedin</Text></Link></Box>

                        <Box display="flex" pb={["10px", "15px", "20px", "25px", "30px", "30px"]} fontSize={["10px", "15px", "20px", "25px", "30px", "30px"]} alignItems="center" gap={["10px", "15px", "20px", "25px", "30px", "30px"]}><IoMdCall color="#BECAD8" size="30px" /><Link  id="contact-phone" href="callto:+91 9168071225"><Text>+91 9168071225</Text></Link></Box>
                    </Box>

                    <Box backgroundColor="BLACK">
                        <Text fontSize={"md"} textAlign={"center"} color="white" p="5px">
                            © 2022 | All rights reserved
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Contact;