import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
  return (
    
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Enter name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter Password" />
    </Form.Group>
    <Form.Text className="mb-3">Already have an account? <a href="url">Sign In</a> </Form.Text>
    <Button className="button" variant="primary" type="submit">
      Sign Up
    </Button>
  </Form>
  )
}
