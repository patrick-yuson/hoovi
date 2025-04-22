import { useState } from 'react';
import {
    Heading,
    VStack
} from "@chakra-ui/react";

function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <VStack justifyContent="center" h="100vh">
                <Heading size="6xl">Hi, I'm Hoovi!</Heading>
                <p className="read-the-docs">
                    Work in progress check back soon!
                </p>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                    </button>
                </div>
            </VStack>
        </>
    )
}

export default Home;