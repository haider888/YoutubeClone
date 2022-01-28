import React, { useState,useEffect } from 'react';
import { Button ,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Login=()=> {
    const [email, setEmail]=useState('')
    const [pass, setPass]=useState('');
    const navigate=useNavigate();



 const handleSubmit =(e)=>{
     e.preventDefault()
     if(email && pass){
       localStorage.setItem("Email",email);
       localStorage.setItem("Password",pass);
       navigate ('/');
     }

    
 }

  return (
    <Form onSubmit={handleSubmit} className='container'>
    <Form.Group className="mb-3" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>{
          setEmail(e.target.value)
      }}/>
      
    </Form.Group>
  
    <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" value={pass} placeholder="Password" onChange={(e)=>{
          setPass(e.target.value)
      }} />
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>

  );
}

export default Login;
