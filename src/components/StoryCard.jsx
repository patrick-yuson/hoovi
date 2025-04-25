import {
    Box,
    Card,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react";

function StoryCard({ data }) {
    const date = new Date(data.timestamp);
    const timeOnly = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      });
      const dateOnly = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    const formattedDate = `${dateOnly} ${timeOnly}`;

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
                        <HStack
                            justifyContent="space-between"
                            w="100%"
                        >
                            <Text
                                fontWeight="bold"
                                fontSize={24}
                            >
                                {data.title}
                            </Text>
                            <Text>
                                {formattedDate}
                            </Text>
                        </HStack>
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