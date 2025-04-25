import {
    Box,
    Card,
    CloseButton,
    Dialog,
    Flex,
    Image,
    Portal,
    Text,
} from "@chakra-ui/react";

function GalleryItem({ data }) {
    return (
        <>
            <Dialog.Root placement="center" size={"xs"}>
                <Dialog.Trigger>
                    <Box
                        transition="transform 0.3s ease"
                        _hover={{
                            transform: "scale(1.03)",
                        }}
                        cursor="pointer"
                        position="relative"
                    >
                            <Card.Root 
                                maxW="sm" 
                                h={{ base: "sm", md: "lg", lg: "md" }} 
                                overflow="hidden" 
                                variant="elevated"
                            >
                                <Image
                                    src={data.src}
                                    alt={data.alt}
                                    h="100%"
                                    objectFit="cover"
                                />
                            </Card.Root>
                            <Text
                                position="absolute"
                                top={2}
                                left={2}
                                color="var(--color-button)"
                                _dark={{ color: "var(--hh-paragraph)" }}
                                px={2}
                                py={1}
                                borderRadius="md"
                                fontWeight="bold"
                                fontSize={60}
                                zIndex={1}
                            >
                                {data.name}
                            </Text>
                    </Box>
                </Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title w="100%" textAlign="center">
                                    <Text
                                        fontSize={25}
                                        fontWeight="bold"
                                        _dark={{
                                            color: "var(--color-main)"
                                        }}
                                    >
                                        {data.name}
                                    </Text>
                                </Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>
                                <Flex
                                    w="100%"
                                    justifyContent="center"
                                    alignContent="center"
                                >
                                    <Image
                                        src={data.src}
                                        alt={data.alt}
                                        h="100%"
                                        objectFit="cover"
                                    />
                                </Flex>
                            </Dialog.Body>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </>
    );

}

export default GalleryItem;