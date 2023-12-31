import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/Lupasandi.css";


const Lupasandi  = () => {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="d-flex align-items-center justify-content-center bg_color display-none">
        </Col>
        <Col className="d-flex align-items-center justify-content-center ">
          <div className="w-75">
            <h3 className="fw-bold">Reset Password</h3>
            <Form className="width-form mt-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Masukan password baru </Form.Label>
                <Form.Control type="password" placeholder="Password baru" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div class="d-flex justify-content-between">
                  <Form.Label>Ulangi password baru</Form.Label>
                </div>
                <Form.Control type="password" placeholder="Ulangi password" />
              </Form.Group>
              <Button type="submit" className="custom-button-rst text-light w-100">
                Simpan
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Lupasandi;