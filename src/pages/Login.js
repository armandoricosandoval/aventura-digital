import React, { useRef, useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { useAuth } from "../firebase/contexts/AuthContext";

const Login = ({ state }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, loginwithGoogle, logout } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    await login(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        localStorage.setItem("userinfo", JSON.stringify(res.user));
        localStorage.setItem("user", JSON.stringify(res.user.email));
        localStorage.setItem("token", JSON.stringify(res.user.accessToken));
        history("/perfil");
      })
      .catch((err) => {
        setError("Failed to log in");
      });
    setLoading(false);
  }

  async function loginByGoogle() {
    await loginwithGoogle()
    .then((res)=>{   
        localStorage.setItem("userinfo", res.user.UserImpl);
        localStorage.setItem("user", JSON.stringify(res.user.email));
        localStorage.setItem("token", JSON.stringify(res.user.accessToken));
        history("/perfil");
    }).catch((err) => {
      setError("Failed to log in");
      logout()
    });
  }

  return (
    <Container className="login-back">
      <Card>
        <Card.Body className="login-box">
          <h2 className="text-center mb-4 textbox">Bienvenido</h2>
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
            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Log In
            </Button>
          </Form>
          <button className="google-plus w-100 mt-4" onClick={()=>loginByGoogle()}>
            <i className="fa fa-google-plus fa-lg"></i>
            log in with Google
          </button>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="text-center mt-2 ">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
