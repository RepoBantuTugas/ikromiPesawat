import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../styles/images/logo.png";
import "../styles/register.css";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value.replace(/\D/g, "").slice(0, 13);
    setPhoneNumber(phoneNumber);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://tiketku-api-development.up.railway.app/auth/register",
        user
      )
      .then((response) => {
        const data = {
          email,
          token: response.data.data.token,
        };
        // Handle successful registration
        console.log(response.data.data);
        nav("/verifikasi-otp", { state: data });
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const user = {
    email: email,
    phone: phoneNumber,
    fullname: name,
    password: password,
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="d-flex align-items-center justify-content-center bg_color display-none">
          <img src={logo} alt="logo" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center ">
          <div className="form-container w-75">
            <h3 className="form-heading fw-bold">Daftar</h3>
            <Form
              className="register-form width-form mt-4"
              onSubmit={handleSubmit}
            >
              <div className="form-group mb-3" controlId="formBasicText">
                <label htmlFor="name">Nama</label>
                <Form.Control
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  type="text"
                  placeholder="Nama Lengkap"
                />
              </div>
              <div className="form-group mb-3" controlId="formBasicEmail">
                <label htmlFor="email">Email</label>
                <Form.Control
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  placeholder="Contoh: johndoe@gmail.com"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phoneNumber">Nomor Telepon</label>
                <Form.Control
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  type="text"
                  placeholder="Masukkan Nomor Telepon"
                />
              </div>
              <Form.Group className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <Form.Control
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  type="password"
                  placeholder="Buat Password"
                />
              </Form.Group>
              <Button
                type="submit"
                className="custom-button-rgs text-light w-100"
              >
                Daftar
              </Button>
              <div className="login-link-container d-flex justify-content-center mt-3">
                <span>Sudah punya akun?</span>
                <Link to="/login" className="login-link">
                  Masuk di sini
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
