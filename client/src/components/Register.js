import React, { useState } from 'react'
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
  const [nameReg, setNameReg] = useState('')
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const register = (e) => {
    e.preventDefault();
    console.log("Button works")
    Axios.post('http://localhost:3001/register', {
      name: nameReg,
      email: emailReg,
      password: passwordReg,
  }).then((response) => {
    console.log(response);
  });
  
}
  return (
    
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control 
      type="name" 
      onChange={(e) => {
        setNameReg(e.target.value);
      }}
      placeholder="Enter name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control 
      type="email" 
      onChange={(e) => {
        setEmailReg(e.target.value);
      }}
      placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control 
      type="password" 
      onChange={(e) => {
        setPasswordReg(e.target.value);
      }}
      placeholder="Enter Password" />
    </Form.Group>
    <Form.Text className="mb-3">Already have an account? <a href="url">Sign In</a> </Form.Text>
    <Button onClick = {register} className="button" variant="primary" type="submit">
      Register
    </Button>
  </Form>
  )
}
