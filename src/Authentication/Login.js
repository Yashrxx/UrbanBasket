import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
const Login = (props) => {
    // const{showalert}=props;
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        //ApI call login
        try {
            // console.log("bale balle")
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const json = await response.json();
            console.log(json);

            if (json.success === true) {
                //  UPDATED: Save auth token before navigating
                localStorage.setItem('token', json.authToken);
                navigate('/urbanBasket');

                //  UPDATED: Check if props.showalert exists before calling
                if (props.showalert) {
                    props.showalert("Successfully Logged in", "success");
                }
            } else {
                if (props.showalert) { //  UPDATED: Added check for undefined function
                    props.showalert("Invalid Credentials", "danger");
                }
            }
        } catch (error) { //  UPDATED: Added error handling
            console.error("Login failed:", error);
            if (props.showalert) {
                props.showalert("Something went wrong. Please try again.", "danger");
            }
        }
        // console.log("login credentials added successfully")
        // console.log('Login attempted with:', { email, password });
        // Here you would typically send a request to your server
    };
    return (
        <Fragment>
            <div id="login" >
                <div className="container-x">
                    <section >
                        <Container>
                            <Row style={{ justifyContent: "space-evenly", alignItems: "center", alignContent: "center" }}>
                                <Col xs={12} md={6}>
                                    <h1 className="text-center mb-4">Login to Notebook</h1>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="justify-content-md-center  mb-3" controlId="formBasicEmail">
                                            <Form.Label >Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className=" mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Button onSubmit={handleSubmit} className="logx mb-3 w-100" variant="primary" type="submit" >
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}

export default Login