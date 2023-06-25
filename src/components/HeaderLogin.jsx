// import Button react js
import Button from "react-bootstrap/Button";

// import grid react js
import { Container, Row, Col } from "react-bootstrap";

// import form and some navbar library
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import logo Tiketku
import logo from "../styles/images/logo.png";
import icon_masuk from "../styles/images/fi_log-in.png";
import icon_history from "../styles/images/icon_history_checkout.png";
import icon_notif from "../styles/images/icon_notif.png";
import icon_user from "../styles/images/icon_user.png";

// import css
import "../styles/headerlogin.css";

import React from "react";
import { Link } from "react-router-dom";

function HeaderLogin() {
  return (
    <>
      {/* First Line Navbar */}
      <Navbar bg="light" expand="lg" className="customText">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Navbar.Brand href="#">
                <div className="logo">
                  <img src={logo} alt="Logo Tiket" />
                </div>
              </Navbar.Brand>

              <Form className="d-flex align-content-center align-items-lg-center">
                <Form.Control
                  type="search"
                  placeholder="Cari di sini ..."
                  className="custom-form me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <div className="container_menu">
              <Link to={"#"}>
                <img src={icon_history} alt="icon_history" />
              </Link>
              <Link to={"#"}>
                <img src={icon_notif} alt="icon_notif" />
              </Link>
              <Link to={"/account"}>
                <img src={icon_user} alt="icon_user" />
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Last Line Navbar */}
    </>
  );
}

export default HeaderLogin;
