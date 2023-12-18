import React, { useRef, useState } from "react"
import { Alert, Button, Card, Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "../firebase/contexts/AuthContext"

export default function Signup() {
  const emailRef = useRef() 
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [succes,setSucces] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    } 
      setError("")
      setLoading(true)
     await signup(emailRef.current.value, passwordRef.current.value)
      .then(res=>{
       setSucces("Felicitaciones Ahora tienes una cuenta , Dirigete a Login")
      })
      .catch(err=>{
        setError("error",err)
      }) 
   
    setLoading(false)
  }

  return (
    <Container className="login-back">
      <Card>
        <Card.Body  className="login-box">
          <h2 className="text-center mb-4 textbox">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {succes && <Alert variant="success">{succes}</Alert>}
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
        Already have an account? <Link to="/login">Log In</Link>
      </div>
        </Card.Body>
      </Card>
    </Container >
  )
}
