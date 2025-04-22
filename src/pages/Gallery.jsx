import {
    Flex,
    Heading
} from "@chakra-ui/react";

function Gallery() {
    return (
        <>
            <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
                <Heading size="2xl">Welcome to the Gallery!</Heading>
            </Flex>
        </>
    );
}

export default Gallery;