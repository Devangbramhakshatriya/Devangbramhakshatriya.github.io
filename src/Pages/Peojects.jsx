import { Box, Button, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";

import { extendTheme } from '@chakra-ui/react'
import { useState } from "react";
const breackpoints = {
    base: "420px",
    sm: "550px",
    md: "700px",
    lg: "850px",
    xl: "950px",
    "2xl": "1200px"
}
const theme = extendTheme({ breackpoints })

function Projects() {
    const [isHovering, setHovering] = useState('')
    function handleMouseEnter() {
        setHovering(true)
    }
    function handleMouseLeave() {
        setHovering(false)
    }
    return (
        <Box className="nav-link projects">
            <Box w="100%" bg="#111111" pt={["10px", "15px", "20px", "25px", "30px", "30px"]}>
                <Text fontFamily="ubuntu" color="white" textDecoration="underline" fontSize={["15px", "25px", "40px", "40px", "50px", "50px"]}>My Projects</Text>
                <Box p={["1%", "6%", "6%"]} color="white">
                    <SimpleGrid templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(3,1fr)", "repeat(3,1fr)", "repeat(3,1fr)", "repeat(3,1fr)"]} gap={["15px", "25px", "40px", "40px", "50px", "50px"]}>
                        <Box
                            // style={{
                            //     position: 'relative',
                            //     top: isHovering ? '-15px' : '0px',


                            //     transition: 'top ease 0.5s',
                            // }}
                            className="project-card"
                            backgroundColor="#222222"
                            _hover={{ color: "black", msTransitionDelay: "top ease 0.5s", top: "-15px", backgroundColor: "#92BCB5", position: 'relative' }}
                            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"space-between"}
                            gap={{ base: "5px", sm: "5px", md: "10px", lg: "15px" }}
                            pb={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src="asos_project_ss.PNG"
                                w={"90%"}
                                margin="auto"
                                p={5}
                            />
                            <Box>
                                <Text className="project-title" as={'b'}>Asos Clone</Text>
                            </Box>
                            <Box px={"5px"} p={5}>
                                <Text className="project-description" textAlign="start">
                                    ASOS is a JS application designed to provide customers with a personalized easy-to-utilize user experience for purchasing modern trending clothes.
                                </Text>
                            </Box>
                            <Box p={2}>
                                <Text className="project-tech-stack">tech stack used</Text>
                                <HStack justifyContent={"center"}>
                                    <Image
                                        src="https://img.icons8.com/color/2x/html-5--v2.png"
                                        w="40px"
                                    />
                                    <Image
                                        src="https://img.icons8.com/fluency/2x/css3.png"
                                        w="40px"
                                    />
                                    <Image
                                        src="https://img.icons8.com/color/2x/javascript.png"
                                        w="40px"
                                    />
                                    <Image
                                        src="https://cdn.iconscout.com/icon/free/png-64/github-159-721954.png"
                                        w="40px"
                                    />
                                </HStack>
                            </Box>
                            <Box w={"100%"} p={2}>
                                <HStack justifyContent={"center"} gap="20px">
                                    <a className="project-github-link"
                                        href="https://github.com/Mehul-Kanjariya/windy-picture-8509"
                                        target={"_blank"}
                                    >
                                        <Button
                                            flex={1}
                                            fontSize={"sm"}
                                            bg={"blue.400"}
                                            color={"white"}
                                            boxShadow={
                                                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                                            }
                                            _hover={{
                                                bg: "blue.500",
                                            }}
                                            _focus={{
                                                bg: "blue.500",
                                            }}
                                        >
                                            Github
                                        </Button>
                                    </a>
                                    <a className="project-deployed-link"
                                        href="https://meek-alfajores-0c8db8.netlify.app/index.html"
                                        target={"_blank"}
                                    >
                                        <Button
                                            bg={"green.400"}
                                            color={"white"}
                                            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                                            _hover={{
                                                bg: "green.500",
                                            }}
                                            _focus={{
                                                bg: "green.500",
                                            }}
                                        >
                                            Live
                                        </Button>
                                    </a>
                                </HStack>
                            </Box>
                        </Box>


                        <Box
                            // style={{
                            //     position: 'relative',
                            //     top: isHovering ? '-15px' : '0px',
                            //     backgroundColor:isHovering ? "#92BCB5":"#222222",
                            //     color:isHovering ? "black":"white",
                            //     transition: 'top ease 0.5s',
                            // }}
                            className="project-card"
                            backgroundColor="#222222"
                            _hover={{ color: "black", msTransitionDelay: "top ease 0.5s", top: "-15px", backgroundColor: "#92BCB5", position: 'relative' }}
                            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"space-between"}
                            gap={{ base: "5px", sm: "5px", md: "10px", lg: "15px" }}
                            pb={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src="yoox_project_ss.PNG"
                                w={"90%"}
                                margin="auto"
                                p={5}
                            />
                            <Box>
                                <Text className="project-title" as={'b'}>YOOX Clone</Text>
                            </Box>
                            <Box px={"5px"} p={5}>
                                <Text className="project-description" textAlign="start">
                                    Yoox is a JS application designed to provide customers with a personalized easy-to-utilize user experience for purchasing modern trending clothes.
                                </Text>
                            </Box>
                            <Box p={2}>
                            <Text className="project-tech-stack">tech stack used</Text>
                                <HStack justifyContent={"center"} className="project-tech-stack">
                                    <Image
                                        src="https://img.icons8.com/plasticine/2x/react.png"
                                        w="40px"
                                    />
                                    <Image
                                        src="https://img.icons8.com/color/2x/chakra-ui.png"
                                        w="40px"
                                    />
                                    <Image
                                        src="https://img.icons8.com/color/2x/javascript.png"
                                        w="40px"
                                    />
                                    <Image
                                        src="https://cdn.iconscout.com/icon/free/png-64/github-159-721954.png"
                                        w="40px"
                                    />
                                </HStack>
                            </Box>
                            <Box w={"100%"} p={2}>
                                <HStack justifyContent={"center"} gap="20px">
                                    <a className="project-github-link"
                                        href="https://github.com/Devangbramhakshatriya/perpetual-voyage-9656"
                                        target={"_blank"}
                                    >
                                        <Button
                                            flex={1}
                                            fontSize={"sm"}
                                            bg={"blue.400"}
                                            color={"white"}
                                            boxShadow={
                                                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                                            }
                                            _hover={{
                                                bg: "blue.500",
                                            }}
                                            _focus={{
                                                bg: "blue.500",
                                            }}
                                        >
                                            Github
                                        </Button>
                                    </a>
                                    <a className="project-deployed-link"
                                        href="https://dainty-churros-e43db2.netlify.app//"
                                        target={"_blank"}
                                    >
                                        <Button
                                            bg={"green.400"}
                                            color={"white"}
                                            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                                            _hover={{
                                                bg: "green.500",
                                            }}
                                            _focus={{
                                                bg: "green.500",
                                            }}
                                        >
                                            Live
                                        </Button>
                                    </a>
                                </HStack>
                            </Box>
                        </Box>





                        <Box
                            // style={{
                            //     position: 'relative',
                            //     top: isHovering ? '-15px' : '0px',
                            //     backgroundColor:isHovering ? "#92BCB5":"#222222",
                            //     color:isHovering ? "black":"white",
                            //     transition: 'top ease 0.5s',
                            // }}
                            className="project-card"
                            backgroundColor="#222222"
                            _hover={{ color: "black", msTransitionDelay: "top ease 0.5s", top: "-15px", backgroundColor: "#92BCB5", position: 'relative' }}
                            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"space-between"}
                            gap={{ base: "5px", sm: "5px", md: "10px", lg: "15px" }}
                            pb={{ base: "5px", sm: "5px", md: "10px", lg: "10px" }}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src="boat_project_ss.PNG"
                                w={"90%"}
                                margin="auto"
                                p={5}
                            />
                            <Box>
                                <Text className="project-title" as={'b'}>Boat LifeSyle Clone</Text>
                            </Box>
                            <Box px={"5px"} p={5}>
                                <Text className="project-description" textAlign="start">
                                    Boat LifeSyle is a JS application designed to provide customers with a personalized easy-to-utilize user experience for purchasing original boat products.
                                </Text>
                            </Box>
                            <Box p={2}>
                            <Text className="project-tech-stack">tech stack used</Text>
                                <HStack justifyContent={"center"} className="project-tech-stack">
                                    <Image
                                        src="https://img.icons8.com/color/2x/html-5--v2.png"
                                        w="40px"
                                    />
                                    <Image
                                        src="https://img.icons8.com/fluency/2x/css3.png"
                                        w="40px"
                                    />
                                    <Image
                                        src="https://img.icons8.com/color/2x/javascript.png"
                                        w="40px"
                                    />
                                    <Image
                                        src="https://cdn.iconscout.com/icon/free/png-64/github-159-721954.png"
                                        w="40px"
                                    />
                                </HStack>
                            </Box>
                            <Box w={"100%"} p={2}>
                                <HStack justifyContent={"center"} gap="20px">
                                    <a className="project-github-link"
                                        href="https://github.com/Devangbramhakshatriya/arrogant-straw-2352"
                                        target={"_blank"}
                                    >
                                        <Button
                                            flex={1}
                                            fontSize={"sm"}
                                            bg={"blue.400"}
                                            color={"white"}
                                            boxShadow={
                                                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                                            }
                                            _hover={{
                                                bg: "blue.500",
                                            }}
                                            _focus={{
                                                bg: "blue.500",
                                            }}
                                        >
                                            Github
                                        </Button>
                                    </a>
                                    <a className="project-deployed-link"
                                        href="https://clever-horse-a7ce81.netlify.app/"
                                        target={"_blank"}
                                    >
                                        <Button
                                            bg={"green.400"}
                                            color={"white"}
                                            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                                            _hover={{
                                                bg: "green.500",
                                            }}
                                            _focus={{
                                                bg: "green.500",
                                            }}
                                        >
                                            Live
                                        </Button>
                                    </a>
                                </HStack>
                            </Box>
                        </Box>

                    </SimpleGrid>
                </Box>
            </Box>
        </Box>

    )
}
export default Projects;