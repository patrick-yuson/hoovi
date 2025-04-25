import {
    Box,
    Card,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { formatDate } from "@/data/formatDate";

function StoryCard({ data }) {
    const formattedDate = formatDate(data.timestamp);

    return (
        <>
            <Box
                transition="transform 0.3s ease"
                _hover={{
                    transform: "scale(1.01)",
                }}
                cursor="pointer"
                position="relative"
            >
                <Link to={`/stories/${data.id}`}>
                    <Card.Root 
                        w={{ base:"100%", sm: "100%" }}
                        overflow="hidden" 
                        variant="elevated"
                        p={{ base: 3, sm: 4, md: 6 }}
                        _dark={{
                            bg: "var(--color-main)"
                        }}
                    >
                        <VStack alignItems="start">
                            <HStack
                                justifyContent="space-between"
                                w="100%"
                            >
                                <Text
                                    fontWeight="bold"
                                    fontSize={{ base: 18, sm: 24 }}
                                    color="var(--color-button)"
                                    _dark={{
                                        color: "var(--hh-headline)"
                                    }}
                                >
                                    {data.title}
                                </Text>
                                <Text display={{ base: "none", md: "block" }} _dark={{ color: "var(--hh-paragraph)" }}>
                                    {formattedDate}
                                </Text>
                            </HStack>
                            <Text 
                                display={{base: "block", md: "none" }}
                                fontSize={{ base: 14, sm: 16 }}
                                _dark={{ color: "var(--hh-paragraph)" }}
                            >
                                {formattedDate}
                            </Text>
                            <Text
                                whiteSpace="pre-line"
                                // whiteSpace="normal"
                                lineClamp={{ base: 3, sm: 5 }}
                                fontSize={{ base: 12, sm: 16 }}
                                _dark={{ color: "var(--hh-paragraph)" }}
                            >
                                {data.text}
                            </Text>
                        </VStack>
                    </Card.Root>
                </Link>
            </Box>
        </>
    );
}

export default StoryCard;