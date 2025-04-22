// import { useState } from "react";
import {
    Flex,
    Heading
} from "@chakra-ui/react";

function StorySubmission() {

    return (
        <>
            <Flex _dark={{ bg: "var(--hh-paragraph)" }} w="100vw" h="100vh" justifyContent="center" alignItems="center" bg="var(--color-main)">
                <Heading size="2xl" _dark={{ color: "var(--color-main)" }} color="var(--hh-paragraph)">Submit a Story Here!</Heading>
            </Flex>
        </>
    )
}

export default StorySubmission;