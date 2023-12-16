import React, { useRef, useState } from "react"
import { Alert, Button, Card, Container, Form } from "react-bootstrap"
//import { useAuth } from "../firebase/contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

const Login =()=> {
  const emailRef = useRef()
  const passwordRef = useRef()
  //const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()   
      setError("")
      setLoading(true)
      /* await login(emailRef.current.value, passwordRef.current.value)
      .then(res=>{      
      console.log('res :', res);
        localStorage.setItem('user',JSON.stringify(res.user.email));
        localStorage.setItem('token',JSON.stringify(res.user.accessToken));
        history("/ListPostAll")
      }).catch(err=>{
      console.log('err :', err);
        setError("Failed to log in")
      }) */
    setLoading(false)
  }

  return (
    <Container>
      <Card className='mt-4'>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
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
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </Container >
  )
}

export default Login;