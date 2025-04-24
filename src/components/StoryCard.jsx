import {
    Box,
    Card,
    Text,
    VStack,
} from "@chakra-ui/react";

function StoryCard({ data }) {
    return (
        <>
            <Box
                transition="transform 0.3s ease"
                _hover={{
                    transform: "scale(1.03)",
                }}
                cursor="pointer"
                position="relative"
            >
                <Card.Root 
                    w="100%" 
                    overflow="hidden" 
                    variant="elevated"
                    p={6}
                >
                    <VStack alignItems="start">
                        <Text
                            fontWeight="bold"
                            fontSize={24}
                        >
                            {data.title}
                        </Text>
                        <Text
                            whiteSpace="pre-line"
                            lineClamp={5}
                        >
                            {data.text}
                        </Text>
                    </VStack>
                </Card.Root>
            </Box>
        </>
    );
}

export default StoryCard;