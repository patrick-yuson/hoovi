'use client'

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  CloseButton,
  Drawer,
  Flex,
  IconButton,
  Image,
  Portal,
  Stack,
  StackSeparator,
} from '@chakra-ui/react'
import { FiMenu, FiX } from 'react-icons/fi';
import { ColorModeButton } from '@/components/ui/color-mode';
import hooviTextLogo from '../assets/hoovi_text_logo.svg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { label: "Submit a Story", to: "/story-submission" },
        { label: "Story Archive", to: "/stories" },
        { label: "Hoovi Gallery", to: "/gallery" },
      ];

    return (
        <Box>
            <Flex
                as="nav"
                position="fixed"
                top="0"
                left="0"
                right="0"
                zIndex="999"
                style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.44)", 
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
                }}
                minH="60px"
                py={2}
                px={4}
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
                            zIndex={2}
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
                                    <Flex
                                        justifyContent="center"
                                        alignItems="center"
                                        w="100%"
                                    >
                                        <Image
                                            cursor="pointer"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setTimeout(() => {
                                                    window.location.href = "/"; 
                                                }, 50); 
                                            }}
                                            w={150}
                                            src={hooviTextLogo}
                                        />
                                    </Flex>
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
                                <Flex
                                    justifyContent="start"
                                    alignItems="center"
                                    w="100%"
                                    pl={7}
                                >
                                    <CloseButton size="sm" onClick={() => setIsOpen(false)}/>
                                </Flex>
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
                    <Link to="/">
                        <Image
                            w={100}
                            p={2}
                            src={hooviTextLogo}
                        />
                    </Link>
                    <Stack direction="row" spacing={4}>
                        {navLinks.map((link) => (
                            <Link to={link.to} key={link.to}>
                                <Button 
                                    variant="ghost"
                                    _hover={{
                                        bg: "var(--color-button)",
                                        color: "var(--color-main)"
                                    }}
                                >
                                    {link.label}
                                </Button>
                            </Link>
                        ))}
                    </Stack>

                </Flex>

                {/* Mobile Header */}
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    position="absolute"
                    left="50%"
                    transform="translateX(-50%)"
                >
                    <Link to="/">
                        <Image
                            w={100}
                            p={2}
                            pointerEvents="auto"
                            cursor="pointer"
                            src={hooviTextLogo}
                            display={{ sm: "block", md: "none" }}
                            zIndex={0}
                        />
                    </Link>
                </Flex>

                {/* Desktop Buttons */}
                <Stack
                    direction={'row'}
                    spacing={6}
                    display={{ base: 'none', md: 'flex' }}
                    align="center"
                >
                    <ColorModeButton />
                </Stack>
            </Flex>
        </Box>
    )
}

export default Navbar
