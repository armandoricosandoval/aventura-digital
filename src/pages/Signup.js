import React, { useRef, useState } from "react"
import { Alert, Button, Card, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../firebase/contexts/AuthContext"

export default function Signup({state}) {
  const emailRef = useRef() 
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
 
      setError("")
      setLoading(true)
     await signup(emailRef.current.value, passwordRef.current.value)
      .then(res=>{
        history("/login")
      })
      .catch(err=>{
        setError("error",err)
        console.log(err)
      }) 
   
    setLoading(false)
  }

  return (
    <Container className="login-back">
      <Card>
        <Card.Body  className="login-box">
          <h2 className="text-center mb-4 textbox">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>          
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-5" type="submit">
              Sign Up
            </Button>
          </Form>
      <div className="w-100 text-center mt-2">
        Already have an account? <Button variant="link" onClick={()=>state(true)}>Log In</Button>
      </div>
        </Card.Body>
      </Card>
    </Container >
  )
}
