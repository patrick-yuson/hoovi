import {
    Flex,
    HStack,
    Text,
    VStack
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import storyData from "@/data/storyData.json";
import { formatDate } from "@/data/formatDate";

function StoryDetail() {
    const { id } = useParams();
    const story = storyData.find((item) => String(item.id) === String(id));
    var formattedDate;
    if (story) {
        formattedDate = formatDate(story.timestamp);
    } else {
        formattedDate = "";
    }

    if (!story) {
        return (
            <> 
                <Flex
                    w="100vw"
                    h="100vh"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text fontSize={30}><b>404:</b> Story not found</Text>
                </Flex>
            </>
        );
    }

    return (
        <Flex
            w="100vw"
            h="100%"
            justifyContent="center"
            alignItems="start"
            pt={100}
            pb={100}
            _dark={{
                bg: "var(--hh-paragraph)"
            }}
        >
            <VStack
                w={{ base: "90vw", sm: "80vw", lg: "60vw" }}
                gap={2}
                alignItems="start"
            >
                <Text
                    _dark={{ color: "var(--color-main)" }} 
                    color="var(--hh-paragraph)" 
                    fontSize={{ base: "25px", sm: "40px", md: "50px" }} 
                    textAlign={{ base: "center" }} 
                    fontWeight="bold"
                >
                    {story.title}
                </Text>
                <HStack alignItems="center" w="100%">
                    <Text
                        fontStyle="italic"
                        _dark={{
                            color: "var(--color-main)"
                        }}
                    >
                        {formattedDate}
                    </Text>
                </HStack>
                <Text
                    whiteSpace="pre-line"
                    fontSize={{ base: 12, sm: 16 }}
                    _dark={{ color: "var(--color-main)" }}
                >
                    {story.text}
                </Text>
            </VStack>
        </Flex>
    )
}

export default StoryDetail;