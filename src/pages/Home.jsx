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
                <Flex direction={{ base: "column", lg: "row" }} h={{ base: "70vh", sm: "100vh" }}>
                    <Box 
                        _dark={{
                            bg: "var(--color-button)" 
                        }}
                        bg="var(--color-main)"
                        w={{ md: "100vw", lg: "65vw" }} 
                        h={{ base: "70%", sm: "50%", md: "100%" }} 
                        pt="50px" 
                        pr="50px" 
                        pl="50px" 
                        pb="16px"
                    >
                        <VStack justifyContent="center" alignItems={{ md: "center", lg: "start" }} h="100%">
                            <Text 
                                _dark={{ color: "var(--color-main)" }} 
                                color="var(--color-button)" 
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
                                _dark={{ color: "var(--color-main)" }} 
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
                                <Link to="/story-submission">
                                    <Button 
                                        _dark={{ 
                                            bg: "var(--color-main)", 
                                            color: "var(--color-button)",
                                            _hover: { 
                                                bg:"gray.300", 
                                            } 
                                        }} 
                                        size={{ base: "lg", md: "xl" }} 
                                        mt={6} 
                                        bg="var(--color-button)" 
                                        color="var(--color-main)" 
                                        _hover={{ 
                                            bg: "var(--c-primary-hover)" 
                                        }}
                                        data-state="open"
                                        _open={{
                                            lg: { animation: "slide-in-left 800ms ease-out" },
                                        }}
                                    >
                                        Submit a Story
                                    </Button>
                                </Link>
                                <Link to="/stories">
                                    <Button 
                                        _dark={{ 
                                            bg: "var(--color-main)", 
                                            color: "var(--color-button)",
                                            _hover: { 
                                                bg:"gray.300", 
                                            } 
                                        }} 
                                        size={{ base: "lg", md: "xl" }} 
                                        mt={6} 
                                        bg="var(--color-button)" 
                                        color="var(--color-main)" 
                                        _hover={{ 
                                            bg: "var(--c-primary-hover)" 
                                        }}
                                        data-state="open"
                                        _open={{
                                            lg: { animation: "slide-in-left 800ms ease-out" },
                                        }}
                                    >
                                        See Archive
                                    </Button>
                                </Link>
                            </Group> 
                        </VStack>
                    </Box>
                    <Box 
                        w={{ base: "100vw", lg: "35vw" }} 
                        h={{ base: "30%", sm: "50%", lg: "100%" }} 
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
                        _dark={{ bg: "var(--color-main)" }} 
                        bg="var(--color-button)" 
                        w={{ md: "100vw", lg: "65vw" }} 
                        h="100%"
                        p="50px"
                    >
                        <VStack justifyContent="center" alignItems={{ base: "center", lg: "start" }} h="100%">
                            <Text 
                                _dark={{ color: "var(--color-button)" }}
                                fontSize={{ base: "40px", sm: "50px" }} 
                                textAlign={{ base: "center" }} 
                                fontWeight="bold" 
                                color="var(--color-main)"
                                data-state="open"
                                _open={{
                                    lg: { animation: "slide-in-right 800ms ease-out" },
                                    base: { animation: "slide-in-top 800ms ease-out" }
                                }}
                            >
                                About Us
                            </Text>
                            <Text 
                                _dark={{ color: "var(--hh-paragraph)" }} 
                                color="var(--color-main)" 
                                textStyle={{ base: "md", md: "xl"}} 
                                textAlign={{ base: "center", lg: "start" }}
                                data-state="open"
                                _open={{
                                    lg: { animation: "slide-in-right 800ms ease-out" },
                                    base: { animation: "slide-in-top 800ms ease-out" }
                                }}
                            >
                                We were born out of a three-week final project revolving around <b>Monuments</b> and the <b>power of Public Space.</b> We're scattered around Grounds, witnessing student life in its most natural state. Can you find all of us?
                            </Text>
                            <Text 
                                _dark={{ color: "var(--hh-paragraph)" }} 
                                color="var(--color-main)" 
                                textStyle={{ base: "md", md: "xl"}} 
                                textAlign={{ base: "center", lg: "start" }} 
                                mt={4}
                                data-state="open"
                                _open={{
                                    lg: { animation: "slide-in-right 800ms ease-out" },
                                    base: { animation: "slide-in-top 800ms ease-out" }
                                }}
                            >
                                We want to be a vehicle for the creation of a <b> monument in digital space</b> - a monument of UVA to which anyone can contribute. To this end, we hope that you all <b>submit an anonymous story</b>, anecdote, or testimony about your time at UVA and how the university has impacted you.
                            </Text>
                            <Text
                                _dark={{ color: "var(--hh-paragraph)" }} 
                                color="var(--color-main)" 
                                textStyle={{ base: "md", md: "xl"}} 
                                textAlign={{ base: "center", lg: "start" }} 
                                mt={4}
                                data-state="open"
                                _open={{
                                    lg: { animation: "slide-in-right 800ms ease-out" },
                                    base: { animation: "slide-in-top 800ms ease-out" }
                                }}
                            >
                                Together we can create an archive of <b>human stories and memories.</b>
                            </Text>
                            <Link to="/gallery">
                                <Button 
                                    _dark={{ 
                                        bg: "var(--color-button)", 
                                        color: "var(--color-main)",
                                        _hover: { 
                                            bg:"var(--c-primary-hover)", 
                                        } 
                                    }} 
                                    size={{ base: "lg", md: "xl" }} 
                                    mt={6} 
                                    bg="var(--color-main)" 
                                    color="var(--color-button)" 
                                    _hover={{ 
                                        bg: "gray.300" 
                                    }}
                                    data-state="open"
                                    _open={{
                                        lg: { animation: "slide-in-right 800ms ease-out" },
                                    }}
                                >
                                    See All Hoovi
                                </Button>
                            </Link>
                        </VStack>
                    </Box>
                </Flex>
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
        </>
    )
}

export default Home;