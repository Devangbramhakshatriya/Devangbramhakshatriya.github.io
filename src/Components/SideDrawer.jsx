import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Box,
    Text,
  } from '@chakra-ui/react'
  import React from 'react'
  import { Link as ScrollLink } from "react-scroll"
  import {GiHamburgerMenu} from "react-icons/gi"
  function SideDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} bg="#BECAD8" boxShadow="lg" onClick={onOpen}>
          <GiHamburgerMenu/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
  
            <DrawerBody>
                  <Text onClick={onClose} _hover={{backgroundColor:"#BECAD8"}} fontWeight="bold"><ScrollLink onClick={onClose} to={"home"}  smooth={true} offset={-200} duration={700}>Home</ScrollLink></Text>
                  <Text onClick={onClose} _hover={{backgroundColor:"#BECAD8"}} fontWeight="bold"><ScrollLink onClick={onClose} to={"about"} smooth={true} offset={-60} duration={400}>About</ScrollLink></Text>
                  <Text onClick={onClose} _hover={{backgroundColor:"#BECAD8"}} fontWeight="bold"><ScrollLink onClick={onClose} to={"skills"} smooth={true} offset={-60} duration={400}>Skills</ScrollLink></Text>
                  <Text onClick={onClose} _hover={{backgroundColor:"#BECAD8"}} fontWeight="bold"><ScrollLink onClick={onClose} to={"projects"} smooth={true} offset={-60} duration={400}>Projects</ScrollLink></Text>
                  <Text onClick={onClose} _hover={{backgroundColor:"#BECAD8"}} fontWeight="bold"><ScrollLink onClick={onClose} to={"contact"} smooth={true} offset={-60} duration={400}>Contact</ScrollLink></Text>
            </DrawerBody>
  
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default SideDrawer;