// import { useState } from "react";
import {
    Button,
    Flex,
    Text,
    VStack
} from "@chakra-ui/react";

function StorySubmission() {
    const handleSubmit = () => {
        window.open("https://forms.gle/wD8nrvTaH7ZQRMWx5", "_blank");
    }

    return (
        <>
            <Flex 
                _dark={{ 
                    bgGradient: "to-b",
                    gradientFrom: "var(--color-button)",
                    gradientTo: "#a29bfe",
                }} 
                h="100vh" 
                justifyContent="center" 
                alignItems="center" 
                bgGradient="to-r"
                gradientFrom="#00c2b2"
                gradientTo="#fbdd74"
                direction="column"
                pt={100}
                pb={100}
                pl={5}
                pr={5}
            >
                <VStack w={{ base: "80vw", lg: "60vw" }}>
                    <Text 
                        _dark={{ color: "var(--color-main)" }} 
                        color="var(--color-button)" 
                        fontSize={{ base: "30px", sm: "40px", md: "75px", lg: "100px" }} 
                        textAlign={{ base: "center" }} 
                        fontWeight="bold"
                        data-state="open"
                        _open={{
                            animation: "slide-in-top 1000ms ease-out"
                        }}

                    >
                        Submit Your Story
                    </Text>
                    <Text 
                        textAlign="center"
                        data-state="open"
                        _open={{
                            animation: "slide-in-top 1000ms ease-out"
                        }}
                        color="var(--hh-paragraph)"
                        _dark={{
                            color: "var(--color-main)"
                        }}
                    >
                        Submit stories through the <b>Google Form</b> linked below to be added to the story archive of this website!</Text>
                    <Text
                        textAlign="center"
                        data-state="open"
                        _open={{
                            animation: "slide-in-top 1000ms ease-out"
                        }}
                        color="var(--hh-paragraph)"
                        _dark={{
                            color: "var(--color-main)"
                        }}
                    >
                        Our hope is for people on Grounds to have a place to <b>anonymously share their experiences</b> at UVA and ultimately create an <b>archive of human testimonies</b> of life at UVA! It can be as long or as short as you'd like, but know that discrimination or hate speech of any kind will not be tolerated.
                    </Text>
                    <Button 
                        _dark={{
                            bg: "var(--color-main)",
                            color: "var(--color-button)",
                            _hover: {
                                bg: "gray.300"
                            }
                        }}
                        mt={{ base: 5, md: 10}} 
                        w="25vw"
                        data-state="open"
                        _open={{
                            animation: "slide-in-bottom 1000ms ease-out"
                        }}
                        bg="var(--color-button)"
                        _hover={{
                            bg: "var(--c-primary-hover)"
                        }}
                        onClick={handleSubmit}
                    >Submit</Button>
                </VStack>
            </Flex>
        </>
    )
}

export default StorySubmission;