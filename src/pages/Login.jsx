import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();

    const handleCreateUser = async (e) => {
        e.preventDefault();
        console.log("Created User: ", email);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User added: ", userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, ": ", errorMessage);
            })
    }

    // const handleSignIn = async (e) => {
    //     e.preventDefault();

    //     console.log("Signing in User: ", email);
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             console.log("Signed in as: ", userCredential.user);
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.error(errorCode, ": ", errorMessage);
    //         })
    // }

    return (
        <>
            <h2>Login!</h2>
            <form onSubmit={handleCreateUser}>
                <div>
                    <label>Email</label>
                    <br></br>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <br></br>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                >
                    Create User
                </button>
            </form>
        </>
    )
}

export default Login;