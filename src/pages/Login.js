import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { useAuth } from "../firebase/contexts/AuthContext";

const Login =()=> {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  console.log('login :', login);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()   
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      .then(res=>{      
        localStorage.setItem('userinfo',JSON.stringify(res.user));
        localStorage.setItem('user',JSON.stringify(res.user.email));
        localStorage.setItem('token',JSON.stringify(res.user.accessToken));
        history("/home")
      }).catch(err=>{
        setError("Failed to log in")
      }) 
    setLoading(false)
  }

  return (
    <div className="contentLogin" >
      <Card>
        <Card.Body className="login-box">
          <h2 className="text-center mb-4 textbox">Bienvenido</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
      <div className="text-center mt-2 textbox">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
        </Card.Body>
      </Card>
    </div >
  )
}

export default Login;