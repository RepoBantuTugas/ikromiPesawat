import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Button,
  Alert,
} from "react-bootstrap";
import successImage from "../styles/images/success.png";
import "../styles/stylepaymentsuccess.css";

const Dashboard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item active>
                <Link
                  to="/Checkout"
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "#7126B5" }}
                >
                  Isi Data Diri
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item
                active
                className="fw-bold"
                style={{ color: "#7126B5" }}
              >
                Bayar
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                <Link
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "#7126B5" }}
                >
                  Selesai
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert
              className="text-center text-light border-0"
              style={{ background: "#73CA5C", borderRadius: "10px" }}
            >
              Terima kasih atas pembayaran transaksi
            </Alert>
          </Col>
        </Row>
        <hr />
        <Row className="mt-5 text-center">
          <div className="mb-5">
            <img src={successImage} alt=" " />
          </div>
          <div>
            <p>
              <span className="custom-text">Selamat!</span>
              <br />{" "}
              <span className="bold-text">
                Transaksi Pembayaran Tiket Berhasil!
              </span>
            </p>
          </div>
        </Row>
        <Row className="mt-3 text-center justify-content-center">
          <div>
            <Button
              type="submit"
              size="md"
              className="custom-button-lgn text-light w-40"
              as={Link}
              to="/"
            >
              Terbitkan Tiket
            </Button>{" "}
          </div>
          <div>
            <Button
              type="submit"
              size="md"
              className="custom-button-lgn-two text-light w-40 my-2"
              as={Link}
              to="/detail-penerbangan"
            >
              Cari Penerbangan Lain
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
