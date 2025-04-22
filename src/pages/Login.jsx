import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {
    Box,
    Button,
    Flex,
    Field,
    Input,
    VStack,
    Heading,
    Spacer,
    Text,
} from '@chakra-ui/react';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [formError, setFormError] = useState("");
    const auth = getAuth();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setFormError("Invalid email");
        } else if (isCreatingAccount && confirmPassword !== password) {
            setFormError("Passwords do not match");
        } else if (password === "" || confirmPassword === "") {
            setFormError("Password fields cannot be empty");
        } else {

            console.log("Created User: ", email);

            if (isCreatingAccount) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log("User added: ", userCredential.user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.error(errorCode, ": ", errorMessage);
                        setFormError(errorMessage);
                    })
            } else {
                console.log("Signing in User: ", email);
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log("Signed in as: ", userCredential.user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.error(errorCode, ": ", errorMessage);
                        setFormError(errorMessage);
                    })
            }
        }
    }

    useEffect(() => {
        setPasswordsMatch(confirmPassword !== "" && password === confirmPassword);
    }, [password, confirmPassword]);

    return (
        <>
            <Flex 
                align="center" 
                justify="center" 
                p={12}
                h="100vh"
            >
                <Box 
                    w={{ base: "100%", sm: "sm", md: "md"}}
                    mx="auto" 
                    p={6} 
                    minH={500}
                    boxShadow="md" 
                    borderRadius="lg"
                    css={{ "--color": "var(--color-container-bg)"}}
                    style={{ backgroundColor: "var(--color)" }}
                    alignContent="center"
                >
                    <Heading size="2xl" mb={6} textAlign="center">
                        {isCreatingAccount ? 'Create Account' : 'Login to Hoovi'}
                    </Heading>
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={4}>
                        <Field.Root>
                            <Field.Label>
                                Email
                                <Field.RequiredIndicator />
                            </Field.Label>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>
                                Password
                                <Field.RequiredIndicator />
                            </Field.Label>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                borderColor={isCreatingAccount && confirmPassword ? (passwordsMatch ? "green" : "red") : undefined}
                            />
                        </Field.Root>
                        {isCreatingAccount && (
                            <Field.Root>
                                <Field.Label>
                                    Confirm Password <Field.RequiredIndicator />
                                </Field.Label>
                                <Input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    borderColor={isCreatingAccount && confirmPassword ? (passwordsMatch ? "green" : "red") : undefined}
                                />
                            </Field.Root>
                        )}
                        <Spacer />
                        <Button css={{"--color": "var(--color-button)"}} style={{ backgroundColor: "var(--color)"}} type="submit" width="full">
                            {isCreatingAccount ? 'Create Account' : 'Login'}
                        </Button>
                        <Text
                            color="blue.500"
                            cursor="pointer"
                            fontSize="sm"
                            onClick={() => setIsCreatingAccount(!isCreatingAccount)}
                        >
                            {isCreatingAccount
                            ? 'Already have an account? Login'
                            : "Don't have an account? Create one"}
                        </Text>
                        <Text
                            color="red"
                            fontSize="sm"
                            textAlign="center"
                        >
                            {formError !== "" ? formError : null}
                        </Text>
                        </VStack>
                    </form>
                </Box>
            </Flex>
        </>
    )
}

export default Login;