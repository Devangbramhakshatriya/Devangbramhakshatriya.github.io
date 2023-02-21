import { Box, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import SkillCart from "../Components/SkillCart";
const breackpoints = {
    base: "420px",
    sm: "550px",
    md: "700px",
    lg: "850px",
    xl: "950px",
    "2xl": "1200px"
}

const theme = extendTheme({ breackpoints })

const skills = [
    { id:"1", image: "https://img.icons8.com/color/2x/html-5--v2.png", title: "HTML" },
    { id:"2", image: "https://img.icons8.com/fluency/2x/css3.png", title: "CSS" },
    { id:"3", image: "https://img.icons8.com/color/2x/javascript.png", title: "JavaScript" },
    { id:"4", image: "https://img.icons8.com/plasticine/2x/react.png", title: "ReactJS" },
    { id:"5", image: "https://img.icons8.com/color/2x/redux.png", title: "Redux" },
    { id:"6", image: "https://img.icons8.com/fluency/2x/node-js.png", title: "NodeJS" },
    { id:"7", image: "https://cdn.iconscout.com/icon/free/png-64/express-8-1175029.png", title: "ExpressJS" },
    { id:"8", image: "https://img.icons8.com/color/2x/mongodb.png", title: "Mongodb" },
    { id:"9", image: "https://img.icons8.com/color/2x/chakra-ui.png", title: "Chakra-UI" },
    { id:"10", image: "https://img.icons8.com/fluency/2x/typescript.png", title: "TypeScript" },
    { id:"11", image: "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png", title: "NextJS" },
    { id:"12", image: "https://img.icons8.com/color/2x/git.png", title: "Git" },
]

function Skills() {
    
    return (
        <Box className="nav-link skills">
        <Box w="100%" pt={["10px","15px","20px","25px","30px","30px"]}>
            <Text fontFamily="ubuntu" textDecoration="underline" fontSize={["15px","25px","40px","40px","50px","50px"]}>Skills</Text>
            <Box p={["1%","6%","6%"]}>
                <SimpleGrid templateColumns={["repeat(3,1fr)", "repeat(3,1fr)", "repeat(4,1fr)", "repeat(5,1fr)", "repeat(6,1fr)", "repeat(7,1fr)"]} gap={["10px","20px","40px"]}>
                    {
                        skills.map((e) => (
                            <Grid key={e.id}>
                                <SkillCart  image={e.image} title={e.title}/>
                            </Grid>
                        ))
                    }
                </SimpleGrid>
            </Box>
        </Box>
        </Box>
    )
}
export default Skills;