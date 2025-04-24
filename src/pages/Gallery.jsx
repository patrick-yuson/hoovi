import { useEffect } from "react";
import {
    Card,
    Flex,
    Grid,
    Heading,
    Text,
    VStack
} from "@chakra-ui/react";
import GalleryItem from "@/components/GalleryItem";
import galleryData from '@/data/galleryData.json';

function Gallery() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Flex 
                _dark={{ bg: "var(--hh-paragraph)" }} 
                bg="var(--color-main)" 
                justifyContent="center" 
                alignItems="start" 
                pt={100} 
                pb={100}
            >
                <VStack w={{ base: "80vw", lg: "60vw" }}>
                    <Card.Root w="100%" bg="var(--color-button)" variant="elevanted">
                        <Card.Header>
                            <Heading textAlign="center" size="2xl" _dark={{ color: "var(--hh-paragraph)" }} color="var(--color-main)">HOOVI GALLERY</Heading>
                        </Card.Header>
                        <Card.Body>
                            <Text textAlign="center" _dark={{ color: "var(--hh-paragraph)" }} color="var(--color-main)">An archive of all Hoovi scattered around Grounds. Created with red clay and a glaze finish. <b>Can you find them all?</b></Text>
                        </Card.Body>
                    </Card.Root>
                    <Grid templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4} maxW="100%" mt={2}>
                        {galleryData.map((item) => (
                            <GalleryItem key={item.id} data={item} />
                        ))}
                    </Grid>
                </VStack>
            </Flex>
        </>
    );
}

export default Gallery;