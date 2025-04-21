import { useState } from "react";

function StorySubmission() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Story title", title);
        console.log("Story text", text);
    }

    return (
        <>
            <h2>This is where you can submit a story!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Story Text:</label>
                    <br></br>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows={8}
                        required
                    />
                </div>
                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default StorySubmission;