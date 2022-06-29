import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if(passwordRef.current.value !== passwordConfirmRef.current.value){
        //     return setError('Passwords Do Not Match');
        // }

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/")
        } catch {
            setError('Failed To Login')
        }
    }

    return (
        <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
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
                    <Button disabled={loading} className="w-100 mt-5" type="submit" >
                    Log In
                    </Button>
                </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need An Account? <Link to="/signup">Sign Up Here!</Link>
            </div>
        </div>
    )
}

export default Login;