import {
    Flex,
    Heading
} from "@chakra-ui/react";

function Gallery() {
    return (
        <>
            <Flex _dark={{ bg: "var(--hh-paragraph)" }} w="100vw" h="100vh" justifyContent="center" alignItems="center" bg="var(--color-main)">
                <Heading size="2xl" _dark={{ color: "var(--color-main)" }}>Welcome to the Gallery!</Heading>
            </Flex>
        </>
    );
}

export default Gallery;