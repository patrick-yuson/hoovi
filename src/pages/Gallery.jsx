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
                <VStack w={{ base: "90vw", sm: "80vw", lg: "60vw" }}>
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
                        Hoovi Gallery
                    </Text>
                    <Text 
                        textAlign="center" 
                        _dark={{ color: "var(--color-main)" }} 
                        color="var(--color-button)"
                        data-state="open"
                        _open={{
                            animation: "slide-in-top 1000ms ease-out"
                        }}
                        mb={4}
                    >
                        An archive of all Hoovi scattered around Grounds. Created with red clay and a glaze finish. <b>Can you find them all?</b>
                    </Text>
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