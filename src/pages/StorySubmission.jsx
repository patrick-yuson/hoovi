import { useState, useEffect } from "react";
// import { collection, addDoc } from "firebase/firestore";
import { auth } from "../../firebase.js"; // Add db
import { onAuthStateChanged } from "firebase/auth";

function StorySubmission() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser);
        })

        return () => unsubscribe();
    }, []);

    // RULES CURRENTLY DON'T ALLOW THIS
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Story title", title);
        console.log("Story text", text);

        // try {
        //     const docRef = await addDoc(collection(db, "stories"), {
        //         title: title,
        //         story: text,
        //     })
        //     console.log("Added document with ID: ", docRef.id);
        // }
        // catch (e) {
        //     console.error("Error adding new story: ", e);
        // }
    }

    return (
        <>
            <h2>This is where you can submit a story!</h2>

            {!user && (
                <p>
                    Please sign in to submit a story.
                </p>
            )}

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
                    disabled={!user}
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default StorySubmission;