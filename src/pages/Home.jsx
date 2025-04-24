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
                    <Box 
                        bg="var(--color-button)" 
                        w={{ md: "100vw", lg: "65vw" }} 
                        h={{ base: "50%", md: "100%" }} 
                        pt="50px" 
                        pr="50px" 
                        pl="50px" 
                        pb="16px"
                    >
                        <VStack justifyContent="center" alignItems={{ md: "center", lg: "start" }} h="100%">
                            <Text 
                                _dark={{ color: "var(--hh-paragraph)" }} 
                                color="var(--color-main)" 
                                fontSize={{ base: "40px", sm: "50px", md: "100px" }} 
                                textAlign={{ base: "center" }} 
                                fontWeight="bold"
                                data-state="open"
                                _open={{
                                    lg: { animation: "slide-in-left 800ms ease-out" },
                                    base: { animation: "slide-in-top 800ms ease-out" }
                                }}
                            >
                                Hi, I'm Hoovi!
                            </Text>
                            <Text 
                                _dark={{ color: "var(--hh-paragraph)" }} 
                                color="var(--color-main)" 
                                textAlign={{ base: "center", lg: "start" }} 
                                textStyle={{ base: "md", md: "xl"}} 
                                w={{ base: "100%", lg: "40vw" }}
                                data-state="open"
                                _open={{
                                    lg: { animation: "slide-in-left 800ms ease-out" },
                                    base: { animation: "slide-in-top 800ms ease-out" }
                                }}
                            >
                                I want to learn about your experiences as a student at UVA! Feel free to submit an <b>anonymous story</b> or look at those written by other people on Grounds
                            </Text>
                            <Group justifyContent="center">
                                <Button 
                                    _dark={{ bg: "var(--hh-paragraph)", 
                                    color: "var(--color-main)",
                                    _hover: { bg:"gray.600", 
                                    color: "white" } }} 
                                    size={{ base: "lg", md: "xl" }} 
                                    mt={6} bg="var(--color-main)" 
                                    color="var(--hh-paragraph)" 
                                    _hover={{ bg: "gray.300" }}
                                    data-state="open"
                                    _open={{
                                        lg: { animation: "slide-in-left 800ms ease-out" },
                                    }}
                                >
                                    <Link to="/story-submission">Submit a Story</Link>
                                </Button>
                                <Button 
                                    _dark={{ bg: "var(--hh-paragraph)", 
                                    color: "var(--color-main)",
                                    _hover: { bg:"gray.600", 
                                    color: "white" } }} 
                                    size={{ base: "lg", md: "xl" }} 
                                    mt={6} bg="var(--color-main)" 
                                    color="var(--hh-paragraph)" 
                                    _hover={{ bg: "gray.300" }}
                                    data-state="open"
                                    _open={{
                                        lg: { animation: "slide-in-left 800ms ease-out" },
                                    }}
                                >
                                    <Link to="/stories">See Archive</Link>
                                </Button>
                            </Group> 
                        </VStack>
                    </Box>
                    <Box 
                        w={{ base: "100vw", lg: "35vw" }} 
                        h={{ base: "50%", lg: "100%" }} 
                        position="relative" 
                    >
                        <Image 
                            objectFit="cover" 
                            w="full"
                            h="full"
                            position="absolute"
                            top="0"
                            left="0"
                            src="https://patrick-yuson.github.io/hoovi-images/images/cropped_group.webp"
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
                            src="https://patrick-yuson.github.io/hoovi-images/images/12.webp"
                        />
                    </Box>
                    <Box 
                        _dark={{ bg: "var(--hh-paragraph)" }} 
                        bg="var(--color-main)" 
                        w={{ md: "100vw", lg: "65vw" }} 
                        h="100%"
                        p="50px"
                    >
                        <VStack justifyContent="center" alignItems={{ md: "center", lg: "start" }} h="100%">
                            <Text 
                                fontSize={{ base: "40px", sm: "50px" }} 
                                textAlign={{ base: "center" }} 
                                fontWeight="bold" 
                                style={{ color: "var(--color-button)" }} 
                                data-state="open"
                                _open={{
                                    lg: { animation: "slide-in-right 800ms ease-out" },
                                    base: { animation: "slide-in-top 800ms ease-out" }
                                }}
                            >
                                About Me
                            </Text>
                            <Text 
                                _dark={{ color: "var(--color-main)" }} 
                                color="var(--hh-paragraph)" 
                                textStyle={{ base: "md", md: "xl"}} 
                                textAlign={{ base: "center", lg: "start" }}
                                data-state="open"
                                _open={{
                                    lg: { animation: "slide-in-right 800ms ease-out" },
                                    base: { animation: "slide-in-top 800ms ease-out" }
                                }}
                            >
                                I was born out of a project meant to tackle the idea of <b>Monuments</b> and the <b>power of Public Space.</b> Having been placed all around Grounds, I get to witness student life in its most natural state. But what I really want is for you all to submit stories about your time at UVA thus far, whether you just arrived last year or about to walk the Lawn within a month.
                            </Text>
                            <Text 
                                _dark={{ color: "var(--color-main)" }} 
                                color="var(--hh-paragraph)" 
                                textStyle={{ base: "md", md: "xl"}} 
                                textAlign={{ base: "center", lg: "start" }} 
                                mt={4}
                                data-state="open"
                                _open={{
                                    lg: { animation: "slide-in-right 800ms ease-out" },
                                    base: { animation: "slide-in-top 800ms ease-out" }
                                }}
                            >
                                Together, <b>we'll make our own monument in digital space</b> - a monument to UVA where all voices should be heard and no person left behind.
                            </Text>
                        </VStack>
                    </Box>
                    <Box
                        w={{ base: "100vw" }} 
                        h={{ base: "75vh" }} 
                        position="relative" 
                        display={{ base: "block", lg: "none" }}
                    >
                        <Image 
                            objectFit="cover" 
                            w="full"
                            h="full"
                            position="absolute"
                            top="0"
                            left="0"
                            src="https://patrick-yuson.github.io/hoovi-images/images/12.webp"
                        />
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default Home;