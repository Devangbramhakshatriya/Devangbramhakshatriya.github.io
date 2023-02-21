import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

function SkillCart({image,title}){
    const [isHovering, setHovering] = useState('')
            function handleMouseEnter() {
                setHovering(true)
            }
            function handleMouseLeave() {
                setHovering(false)
            }
    return(
        <GridItem className="skills-card" style={{
            position: 'relative',
            top: isHovering ? '-15px' : '0px',
            boxShadow:isHovering ? "lg":"none",
            transition: 'top ease 0.5s',
        }}>
            <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          textAlign={"center"}
          p={"5px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"15px"}
          
        >
          <Image className="skills-card-img" 
            src={image}
            w="100%"
          />
          <Text className="skills-card-name" as={"b"}>{title}</Text>
        </Box>
        </GridItem>
    )
}
export default SkillCart;