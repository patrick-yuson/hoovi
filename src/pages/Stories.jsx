import {
    Flex,
    Heading
} from "@chakra-ui/react";

function Stories() {
    return (
        <>
            <Flex _dark={{ bg: "var(--hh-paragraph)" }} w="100vw" h="100vh" justifyContent="center" alignItems="center" bg="var(--color-main)">
                <Heading size="2xl" _dark={{ color: "var(--color-main)" }}>Here are the stories!</Heading>
            </Flex>
        </>
    )
}

export default Stories;