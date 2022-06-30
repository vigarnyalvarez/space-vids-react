import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert,Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const  { signup }  = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords Do Not Match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/main")
        } catch {
            setError('Failed to create account');
            setLoading(false);
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center bb bt" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {error &&  <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                            <span className="f3">Email</span>
                            <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                            <span className="f3">Password</span>
                            <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group id="password-confirm">
                            <span className="f3" >Password Confirmation</span>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100 mt-5" type="submit" >
                            Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/">Log In</Link>
                </div>
            </div>
        </Container>
    )
}

export default SignUp;