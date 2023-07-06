import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "../components/GoogleLogin";

const Login = (props) => {
  const nav = useNavigate();
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://tiketku-production.up.railway.app/auth/login", user)
      .then((response) => {
        // Handle successful registration
        console.log(response.data);

        nav("/");
        props.tokenLoginFromApp(response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
      })
      .catch((error) => {
        // Handle error
        alert("Password Salah / Email Belum Terdaftar !");
      });

    console.log(user);
  };

  const user = {
    email: email,
    password: password,
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="d-flex align-items-center justify-content-center bg_color display-none"></Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h3 className="fw-bold">Masuk</h3>
            <Form className="width-form mt-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email/No Telepon</Form.Label>
                <Form.Control
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  placeholder="Contoh: johndoe@gmail.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div class="d-flex justify-content-between">
                  <Form.Label>Password</Form.Label>
                  <Link to="/Lupasandi" className="txt-color fw-bold">
                    Lupasandi
                  </Link>
                </div>

                <Form.Control
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  type="password"
                  placeholder="Masukan Password"
                />
              </Form.Group>
              <Button
                type="submit"
                className="custom-button-lgn text-light w-100"
              >
                Masuk
              </Button>
              <div className="d-flex justify-content-center mt-3">
                <Form.Text>
                  Belum punya Akun?
                  <Link to="/register" className="txt-color">
                    Daftar di sini
                  </Link>
                </Form.Text>
              </div>
              <Row>
                <Col className="text-center">
                  <GoogleLogin buttonText="Login with Google 🚀" />
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
