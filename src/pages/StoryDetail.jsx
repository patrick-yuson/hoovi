import {
    Flex,
    Text,
    VStack
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import storyData from "@/data/storyData.json";

function StoryDetail() {
    const { id } = useParams();
    const story = storyData.find((item) => String(item.id) === String(id));

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
            h="100vh"
            justifyContent="center"
            alignItems="start"
            pt={100}
            pb={100}
        >
            <VStack
                w={{ base: "90vw", sm: "80vw", lg: "60vw" }}
                gap={8}
                alignItems="start"
            >
                <Text
                    _dark={{ color: "var(--color-button)" }} 
                    color="var(--hh-paragraph)" 
                    fontSize={{ base: "20px", sm: "40px", md: "50px" }} 
                    textAlign={{ base: "center" }} 
                    fontWeight="bold"
                    data-state="open"
                    _open={{
                        animation: "slide-in-top 1000ms ease-out"
                    }}
                >
                    {story.title}
                </Text>
            </VStack>
        </Flex>
    )
}

export default StoryDetail;