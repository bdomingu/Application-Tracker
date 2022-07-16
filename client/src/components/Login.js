import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Login() {
  return (
    
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Text className="mb-3">Don't have an account? <a href="url">Sign Up Now</a> </Form.Text>
    <Button className="button" variant="primary" type="submit">
      Login
    </Button>
  </Form>
  )
}
