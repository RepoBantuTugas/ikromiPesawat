import React, { useState } from "react";
import { Container, Navbar, Form, Button } from "react-bootstrap";
import "../styles/otp.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import logo from "../styles/images/logo.png";
import axios from "axios";

const Otp = () => {
  const loc = useLocation();
  const nav = useNavigate();
  const { email, token } = loc.state;
  const [otp, setOtp] = useState();

  const substringAwal = email.substring(0, 3);
  const substringAkhir = email.slice(-11);

  const handleCodeOTPChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(token);
    const data = {
      otp,
    };
    axios
      .post(
        `https://tiketku-production.up.railway.app/register/verifyAccount?token=${token}`,
        data
      )
      .then((response) => {
        // Handle successful registration
        console.log(response.message);
        alert("berhasil terverifikasi");
        nav("/login");
      })
      .catch((error) => {
        // Handle error
        console.log(error);
        // alert("Password Salah / Email Belum Terdaftar !");
      });
  };

  return (
    <>
      <Navbar bg="light" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" className="size-logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>
        <Link to="/register">
          <p className="fs-2 ms-4 txt-color">
            <IoArrowBack />
          </p>
        </Link>
        <h2 className="text-center mb-5 fw-bold">Masukkan OTP</h2>
        <div className="d-flex justify-content-center align-items-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Text>
                Ketik 6 digit kode yang dikirimkan ke{" "}
                <b>
                  {substringAwal}***{substringAkhir}
                </b>
              </Form.Text>
              <div className="mt-4 mb-5 text-center">
                <Form.Control
                  size="lg"
                  type="number"
                  placeholder="Masukkan 6 digit kode"
                  onChange={handleCodeOTPChange}
                  maxLength="6"
                  pattern="\d*"
                />
                <Form.Text>Kirim ulang OTP dalam 60 detik</Form.Text>
              </div>
            </Form.Group>
            <Button
              className="custom-button-otp text-light w-100"
              type="submit"
            >
              Simpan
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Otp;
