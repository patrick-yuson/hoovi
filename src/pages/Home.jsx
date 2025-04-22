// import { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Box,
    Group,
    Button,
    Flex,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";

function Home() {

    return (
        <> 
            <Flex direction="column">
                <Flex direction={{ base: "column", lg: "row" }} h="100vh">
                    <Box bg="var(--color-button)" w={{ md: "100vw", lg: "65vw" }} h={{ base: "50%", md: "100%" }} pt="50px" pr="50px" pl="50px" pb="16px">
                        <VStack justifyContent="center" alignItems={{ md: "center", lg: "start" }} h="100%">
                            <Text _dark={{ color: "var(--hh-paragraph)" }} color="var(--color-main)" fontSize={{ base: "40px", sm: "50px", md: "100px" }} textAlign={{ base: "center" }} fontWeight="bold">Hi, I'm Hoovi!</Text>
                            <Text _dark={{ color: "var(--hh-paragraph)" }} color="var(--color-main)" textAlign={{ base: "center", lg: "start" }} textStyle={{ base: "md", md: "xl"}} w={{ base: "100%", lg: "40vw" }}>
                                I want to learn about your experiences as a student at UVA! Feel free to submit an <b>anonymous story</b> or look at those written by other people on Grounds
                            </Text>
                            <Button _dark={{ bg: "var(--hh-paragraph)", color: "var(--color-main)", _hover: { bg:"gray.600", color: "white" } }} size={{ base: "lg", md: "xl" }} mt={6} bg="var(--color-main)" color="var(--hh-paragraph)" _hover={{ bg: "gray.300" }}>
                                <Link to="/story-submission">Submit a Story</Link>
                            </Button>
                        </VStack>
                    </Box>
                    <Box w={{ base: "100vw", lg: "35vw" }} h={{ base: "50%", lg: "100%" }} position="relative">
                        <Image 
                            objectFit="cover" 
                            w="full"
                            h="full"
                            position="absolute"
                            top="0"
                            left="0"
                            src="https://store.solesavy.com/cdn/shop/files/smiski-dressing-5_1024x1024_1e858ce6-84e5-43a6-b4b2-cb7c28fcf950.webp?v=1726943711"
                        />
                    </Box>
                </Flex>
                <Flex direction={{ base: "column", lg: "row" }} h="100vh">
                    <Box w={{ base: "0", lg: "35vw" }} h={{ base: "0", lg: "100%" }} position="relative">
                        <Image 
                            objectFit="cover" 
                            w="full"
                            h="full"
                            position="absolute"
                            top="0"
                            left="0"
                            src="https://store.solesavy.com/cdn/shop/files/smiski-dressing-5_1024x1024_1e858ce6-84e5-43a6-b4b2-cb7c28fcf950.webp?v=1726943711"
                        />
                    </Box>
                    <Box _dark={{ bg: "var(--hh-paragraph)" }} bg="var(--color-main)" w={{ md: "100vw", lg: "65vw" }} p={20}>
                        <VStack justifyContent="center" alignItems={{ md: "center", lg: "start" }} h="100%">
                            <Text fontSize={{ base: "40px", sm: "50px" }} textAlign={{ base: "center" }} fontWeight="bold" style={{ color: "var(--color-button)" }}>About Me</Text>
                            <Text _dark={{ color: "var(--color-main)" }} color="var(--hh-paragraph)" textAlign={{ base: "center", lg: "start" }} textStyle="xl">
                                I was born out of a project meant to tackle the idea of Monuments and the power of Public Space. Having been placed all around Grounds, I get to witness student life in its most natural state. But what I really want is for you all to submit stories about your time at UVA thus far, whether you just arrived last year or about to walk the Lawn within a month.
                            </Text>
                            <Text _dark={{ color: "var(--color-main)" }} color="var(--hh-paragraph)" textAlign={{ base: "center", lg: "start" }} textStyle="xl" mt={4}>
                                Together, we'll make our own monument in digital space - a monument to UVA where all voices should be heard and no person left behind.
                            </Text>
                        </VStack>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default Home;