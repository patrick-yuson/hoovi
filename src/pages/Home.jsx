import { ColorModeButton } from '@/components/ui/color-mode';
import { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Heading,
    VStack
} from "@chakra-ui/react";

function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <VStack justifyContent="center" h="100vh">
                <ColorModeButton />
                <Heading size="6xl">Hi, I'm Hoovi!</Heading>
                <p className="read-the-docs">
                    Work in progress check back soon!
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                    </button>
                </div>
                <div>
                    <Link to="/story-submission">Submit a story!</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </VStack>
        </>
    )
}

export default Home;