import React, { useRef, useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/contexts/AuthContext";

export default function ForgotPassword() {
  const history = useNavigate()
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value).then(res=>{      
        setMessage("Check your inbox for further instructions")  
        history("/home")      
      }).catch(err=>{
        setError("Failed to Email in to reset password")
      }) 
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <Container className="login-back">
      <Card className='mt-4'>
        <Card.Body className="login-box">
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/">Login</Link>
          </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/">Sign Up</Link>
      </div>
        </Card.Body>
      </Card>
    </Container>
  )
}
