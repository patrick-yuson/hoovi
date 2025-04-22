'use client'

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
} from '@chakra-ui/react'
import { FiMenu, FiX } from 'react-icons/fi';
import { ColorModeButton } from '@/components/ui/color-mode';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.js";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser);
        })

        return () => unsubscribe();
    }, []);

    return (
        <Box>
            <Flex
                as="nav"
                css={{ "--color": "var(--color-button)"}}
                style={{ backgroundColor: "var(--color)" }}
                minH={'60px'}
                py={2}
                px={4}
                borderBottom={1}
                borderStyle="solid"
                align="center"
                justify="space-between"
            >
                <IconButton
                    display={{ base: 'inline-flex', md: 'none' }}
                    onClick={() => setIsOpen(!isOpen)}
                    variant="ghost"
                    aria-label={'Toggle Navigation'}
                    zIndex={1}
                >
                    {isOpen ? <FiX color="black" size={20} /> : <FiMenu color="black" size={24} />}
                </IconButton>

                <Flex
                    align="center"
                    gap={6}
                    display={{ base: 'none', md: 'flex' }}
                >
                    <Text
                        fontFamily={'heading'}
                        fontWeight="bold"
                        fontSize="lg"
                        textAlign={{ sm: "center", md: "start" }}
                        w="full"
                        pointerEvents="auto"
                        cursor="pointer"
                    >
                        <Link to="/">Hoovi</Link>
                    </Text>
                    <Stack direction="row" spacing={4}>
                        <Button variant="ghost">
                            <Link to="/">Home</Link>
                        </Button>
                        <Button variant="ghost">
                            <Link to="/story-submission">Submit a Story</Link>
                        </Button>
                        <Button variant="ghost">
                            <Link to="/gallery">Hoovi Gallery</Link>
                        </Button>
                    </Stack>
                </Flex>

                {/* Mobile Header */}
                <Text
                    fontFamily={'heading'}
                    fontWeight="bold"
                    fontSize="lg"
                    textAlign="center"
                    display={{ sm: "block", md: "none" }}
                    w="full"
                    pointerEvents="auto"
                    cursor="pointer"
                    position="absolute"
                    left="50%"
                    transform="translateX(-50%)"
                >
                    <Link to="/">Hoovi</Link>
                </Text>

                {/* Desktop Buttons */}
                <Stack
                    direction={'row'}
                    spacing={6}
                    display={{ base: 'none', md: 'flex' }}
                    align="center"
                >
                    <ColorModeButton />
                    {!user ? 
                        <Button>
                            <Link to="/login">Sign In</Link>
                        </Button> 
                        : 
                        <Text>
                            {user.email}
                        </Text>}
                </Stack>
            </Flex>

            {/* Mobile Buttons */}
            {isOpen && (
                <Stack p={4} display={{ md: 'none' }}>
                <Button variant="ghost" w="full">Sign In</Button>
                </Stack>
            )}
        </Box>
    )
}

export default Navbar
