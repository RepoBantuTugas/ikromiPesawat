import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Matahari from "../styles/images/Matahari.png";
import Payment from "../styles/images/Payment.png";
import "../styles/Payment.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Accordion,
  Alert,
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import axios from "axios";
import PaymentSuccess from "../../src/components/Paymentsucces";

const PaymentPage = () => {
  const loc = useLocation();
  const id = loc.state;
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`https://tiketku-development.up.railway.app/order/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const [show, setShow] = useState(false);
  const handlePayment = () => {
    axios
      .post(
        `https://tiketku-development.up.railway.app/payment`,
        {
          order_id: id,
          payment_type: "debit",
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setShow(true);
  };

  return (
    <>
      {show ? (
        <PaymentSuccess />
      ) : (
        <React.Fragment>
          <Container className="mt-5">
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
              <Alert
                className="text-center text-light border-0"
                style={{ background: "#FF0000", borderRadius: "10px" }}
              >
                Selesaikan Pembayaran sampai 10 Maret 2023 {data?.paid_before}
              </Alert>
            </Row>
            <br />
            <br />
            <Row className="gap-4">
              <Col>
                <Accordion
                  defaultActiveKey={["2"]}
                  alwaysOpen
                  className="panel-heading border-4 mb-3"
                >
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Credit Card</Accordion.Header>
                    <Accordion.Body>
                      <Card className="panel-default border-0">
                        <Card.Img variant="top" src={Payment} />
                        <Card.Body>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">
                              Card number
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="4480 0000 0000 0000"
                            />
                          </Form.Group>
                        </Card.Body>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Button
                  type="submit"
                  className="pay w-100"
                  onClick={handlePayment}
                >
                  Bayar
                </Button>
              </Col>
              <Col className="mb-5">
                <div className="mt-3">
                  <h5 className="fw-bold" style={{ color: "#7126B5" }}>
                    Booking Code: {data?.booking_code}
                  </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="fw-bold">
                      {data?.flight_detail.departure.time}
                    </h5>
                    <h6 className="fw-bold" style={{ color: "#7126B5" }}>
                      Keberangkatan
                    </h6>
                  </div>
                  <p className="mb-0">{data?.flight_detail.departure.date}</p>
                  <p>
                    {data?.flight_detail.departure.airport_name} -
                    {data?.flight_detail.departure.city}
                  </p>
                </div>

                <hr />

                <Row>
                  <Col md={1}>{/* <img src={Matahari} alt="" /> */}</Col>
                  <Col md="auto">
                    <h6 className="fw-bold">
                      {data?.flight_detail.airplane.airline} -{" "}
                      {data?.flight_detail.airplane.seat_class}
                    </h6>
                    <h6 className="fw-bold mb-4">
                      {" "}
                      {data?.flight_detail.airplane.flight_number}
                    </h6>
                    <h6 className="fw-bold">Informasi:</h6>
                    <h6 className="fw-bold">
                      <img
                        src={data?.flight_detail.airplane.logo}
                        alt="logo_airplane"
                        className="logo_airplane"
                      />
                    </h6>
                    <p className="mb-0">
                      Baggage {data?.flight_detail.airplane.baggage} kg
                    </p>
                    <p className="mb-0">
                      Cabin baggage {data?.flight_detail.airplane.cabin_baggage}{" "}
                      kg
                    </p>
                  </Col>
                </Row>

                <hr />

                <div className="div">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="fw-bold">
                      {data?.flight_detail.arrival.time}
                    </h5>
                    <h6 className="fw-bold" style={{ color: "#7126B5" }}>
                      Kedatangan
                    </h6>
                  </div>
                  <p className="mb-0">{data?.flight_detail.arrival.date}</p>
                  <p className="fw-bold">
                    {data?.flight_detail.arrival.airport_name} -{" "}
                    {data?.flight_detail.arrival.city}
                  </p>
                </div>

                <hr />

                <div>
                  <h5 className="fw-bold">Rincian Harga</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <p>{data?.price_detail.adult_count} Adults</p>
                    <p>{data?.price_detail.adult_price}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p>{data?.price_detail.child_count} Child</p>
                    <p>{data?.price_detail.child_price}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p>{data?.price_detail.infant_count} Baby</p>
                    <p>{data?.price_detail.infant_price}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p>Tax</p>
                    <p>{data?.price_detail.tax}</p>
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold">Total</h5>
                  <h5 className="fw-bold" style={{ color: "#7126B5" }}>
                    {data?.price_detail.total_price}
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      )}
    </>
  );
};

export default PaymentPage;
