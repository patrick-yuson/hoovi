import { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Button,
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
                <Button>
                    <Link to="/story-submission">Submit a story!</Link>
                </Button>
                <Button>
                    <Link to="/login">Login</Link>
                </Button>
            </VStack>
        </>
    )
}

export default Home;