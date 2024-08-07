import React, { useState } from 'react';
import { Container, Form, Button,Row, Col,Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../logo512.png";
import userService from '../services/userService';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await userService.login(formData);
        //console.log('Login  successful:', response);
        const token = response.tokenname;
        // Store the token in local storage
        localStorage.setItem('authToken', token);
        setTimeout(() => {
          navigate('/dashboard'); // Replace '/login' with your desired path
        }, 1000); // Redirect after 2 seconds
      } catch (error) {
        console.error('Login error:', error);
        setErrorMessage('An error occurred. Please try again later.');
      }
    //console.log(formData); // For now, log the form data
  };

  return (
    <Container className="mt-5 main">
      <Row className="justify-content-center">
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Col md={6} className="card">
          <div className="text-center mb-4">
            <img src={logo} alt="Smart IoT Logo" width="150" />
            <h2>Login with Smart IoT</h2>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3"> {/* Add mb-3 for spacing */}
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            </Form.Group>

            <Button variant="default" type="submit" className="w-100">
              Submit
            </Button>
          </Form>

          <div className="text-center mt-3">
            <p>Don't have an account? <Link to="/signup">Create one</Link></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
