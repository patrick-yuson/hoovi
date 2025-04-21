import { useState } from 'react'
import { Link } from "react-router-dom";

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Hi, I'm Hoovi!</h1>
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
        </>
    )
}

export default Home;