'use client'

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  CloseButton,
  Drawer,
  Flex,
  Text,
  IconButton,
  Popover,
  Portal,
  Stack,
  StackSeparator,
} from '@chakra-ui/react'
import { FiMenu, FiX } from 'react-icons/fi';
import { ColorModeButton } from '@/components/ui/color-mode';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.js";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navLinks = [
        { label: "Submit a Story", to: "/story-submission" },
        { label: "All Stories", to: "/stories" },
        { label: "Hoovi Gallery", to: "/gallery" },
      ];
      

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
                <Drawer.Root placement="left" size="xs">
                    <Drawer.Trigger asChild>
                        <IconButton
                            display={{ base: 'inline-flex', md: 'none' }}
                            onClick={() => setIsOpen(!isOpen)}
                            variant="ghost"
                            aria-label={'Toggle Navigation'}
                            zIndex={1}
                        >
                            {isOpen ? <FiX color="black" size={20} /> : <FiMenu color="black" size={24} />}
                        </IconButton>
                    </Drawer.Trigger>
                    <Portal>
                        <Drawer.Backdrop />
                        <Drawer.Positioner>
                            <Drawer.Content>
                            <Drawer.Header>
                                <Drawer.Title>
                                    <Text
                                        cursor="pointer"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setTimeout(() => {
                                                window.location.href = "/"; 
                                            }, 50); 
                                        }}
                                    >
                                        Hoovi
                                    </Text>
                                </Drawer.Title>
                            </Drawer.Header>
                            <Drawer.Body>
                                <Stack direction="column" spacing={4} separator={<StackSeparator />}>
                                    {navLinks.map((link) => (
                                        <Button 
                                            key={link.to} 
                                            variant="ghost"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setTimeout(() => {
                                                    window.location.href = link.to; 
                                                }, 50); 
                                            }}
                                        >
                                            {link.label}
                                        </Button>
                                    ))}
                                </Stack>
                            </Drawer.Body>
                            <Drawer.CloseTrigger asChild>
                                <CloseButton size="sm" onClick={() => setIsOpen(false)}/>
                            </Drawer.CloseTrigger>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>

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
                        {navLinks.map((link) => (
                            <Button key={link.to} variant="ghost">
                            <Link to={link.to}>{link.label}</Link>
                            </Button>
                        ))}
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
                        <Popover.Root>
                            <Popover.Trigger asChild>
                                <Button variant="ghost">{user.email}</Button>
                            </Popover.Trigger>
                            <Portal>
                                <Popover.Positioner>
                                    <Popover.Content>
                                        <Popover.Header fontWeight="bold">Account</Popover.Header>
                                        <Popover.Body>
                                            <Button
                                                color="red"
                                                variant="surface"
                                                onClick={() => {
                                                    signOut(auth);
                                                }}
                                            >
                                                Sign Out
                                            </Button>
                                        </Popover.Body>
                                    </Popover.Content>
                                </Popover.Positioner>
                            </Portal>
                        </Popover.Root>
                    }
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
