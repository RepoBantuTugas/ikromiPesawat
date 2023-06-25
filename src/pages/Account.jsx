import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Form,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiArrowLeft, FiEdit3, FiLogOut, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/account.css";
import axios from "axios";
import BasicAlerts from "../components/toast/BasicAlert";
import { Toast } from "bootstrap";

const notify = () => toast("Wow so easy!");

const Account = () => {
  const linkStyle = {
    color: "var(--primary-color)",
    textDecoration: "none",
  };

  // First Line Get User Detail
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const user = {
    fullname: name,
    email: email,
    phone: phone,
  };
  useEffect(() => {
    axios
      .get("https://tiketku-api-development.up.railway.app/user/getDetail", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setName(response.data.data.fullname);
        setPhone(response.data.data.phone);
        setEmail(response.data.data.email);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .put(
        "https://tiketku-api-development.up.railway.app/user/updateProfile",
        user,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>;

        window.location.reload();
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
  // Last Line Get User Detail
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={{ span: 10, offset: 1 }}>
            <h4>Akun</h4>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3 rounded" md={{ span: 10, offset: 1 }}>
            <Link to={"/"}>
              <Button className="back-button p-3">
                <FiArrowLeft className="me-2" /> Beranda
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="shadow-sm border-bottom pb-4" />
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <ListGroup variant="flush">
              <ListGroup.Item action className="pb-3">
                <Link to={"/account"} style={linkStyle}>
                  <FiEdit3 className="link-style me-3" />
                  Ubah Profile
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action className="mt-4 pb-3">
                <Link to={"/account-settings"} style={linkStyle}>
                  <FiSettings className="link-style me-3" />
                  Pengaturan Akun
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action className="mt-4 border-bottom pb-3">
                <Link to={"/logout"} style={linkStyle}>
                  <FiLogOut className="link-style me-3" />
                  Keluar
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={{ span: 5, offset: 1 }}>
            <Card>
              <Card.Body className="p-4">
                <h5>Ubah Data Profil</h5>
                <Row>
                  <Col className="personal-info rounded-top p-3 mt-3">
                    Data Diri
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Form onSubmit={handleSubmit} onClick={notify}>
                    <Form.Group className="mb-3" controlId="formFullName">
                      <Form.Label>Nama Lengkap</Form.Label>
                      <Form.Control
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                      <Form.Label>Nomor Telepon</Form.Label>
                      <Form.Control
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </Form.Group>
                    <div className="text-center">
                      <Button className="save-button px-4 py-2" type="submit">
                        Simpan
                      </Button>
                    </div>
                  </Form>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Account;
