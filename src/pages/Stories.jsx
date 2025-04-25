import { useState } from "react";
import {
    Flex,
    Grid,
    HStack,
    IconButton,
    Input,
    InputGroup,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FaSearch, FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";
import StoryCard from "@/components/StoryCard";
import storyData from '@/data/storyData.json';
import { useColorModeValue } from "@/components/ui/color-mode";

function Stories() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");
    const iconColor = useColorModeValue("var(--color-button)", "white");

    const filteredStories = storyData
        .filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.text.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            const dateA = new Date(a.timestamp);
            const dateB = new Date(b.timestamp);
            return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
        });

    const handleSortToggle = () => {
        const newOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newOrder);
    }

    return (
        <>
            <Flex 
                _dark={{ bg: "var(--hh-paragraph)" }} 
                w="100vw"  
                minH="100vh"
                bg="var(--color-main)"
                pt={100}
                pb={100}
                justifyContent="center"
            >
                <VStack
                    w={{ base: "90vw", sm: "80vw", lg: "60vw" }}
                    gap={4}
                    alignItems="center"
                >
                    <Text 
                        _dark={{ color: "var(--color-main)" }} 
                        color="var(--color-button)" 
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
                    <HStack w="100%" spacing={4} justifyContent="space-between">
                        <InputGroup startElement={<FaSearch />}>
                            <Input
                                placeholder="Search stories..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                bg="white"
                                borderRadius="md"
                                h={50}
                            />
                        </InputGroup>
                        <IconButton
                            aria-label="Toggle sort order"
                            onClick={handleSortToggle}
                            variant="ghost"
                        >
                            {sortOrder === "asc" ? <FaSortAmountUp color={iconColor}/> : <FaSortAmountDown color={iconColor}/>}
                        </IconButton>
                    </HStack>
                    <Grid 
                        templateColumns="repeat(1, 1fr)" 
                        gap={4} 
                        w="100%"
                    >
                        {filteredStories.map((item) => (
                            <StoryCard key={item.id} data={item} />
                        ))}
                    </Grid>
                </VStack>
            </Flex>
        </>
    )
}

export default Stories;