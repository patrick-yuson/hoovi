import {
    Flex,
    Grid,
    HStack,
    Text,
    VStack
} from "@chakra-ui/react";
import StoryCard from "@/components/StoryCard";
import storyData from '@/data/storyData.json';

function Stories() {
    return (
        <>
            <Flex 
                _dark={{ bg: "var(--hh-paragraph)" }} 
                w="100vw"  
                bg="var(--color-main)"
                pt={100}
                pb={100}
                justifyContent="center"
            >
                <VStack
                    w={{ base: "80vw", lg: "60vw" }}
                    gap={8}
                    alignItems="center"
                >
                    <Text 
                        _dark={{ color: "var(--color-button)" }} 
                        color="var(--hh-paragraph)" 
                        fontSize={{ base: "30px", sm: "40px", md: "75px", lg: "100px" }} 
                        textAlign={{ base: "center" }} 
                        fontWeight="bold"
                        data-state="open"
                        _open={{
                            animation: "slide-in-top 1000ms ease-out"
                        }}

                    >
                        Story Archive
                    </Text>
                    <Grid 
                        templateColumns="repeat(1, 1fr)" 
                        gap={4} 
                        w="100%"
                    >
                        {storyData.map((item) => (
                            <StoryCard key={item.id} data={item} />
                        ))}
                    </Grid>
                </VStack>
            </Flex>
        </>
    )
}

export default Stories;