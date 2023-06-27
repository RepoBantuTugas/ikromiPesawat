import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { BsArrowLeftShort, BsFunnel, BsSearch } from "react-icons/bs";
import DetailPesanan from "../components/Detailpesanan";
import "../styles/history.css";
import HeaderLogin from "../components/HeaderLogin";
import { Link } from "react-router-dom";

const History = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);

  const [showFilter, setShowFilter] = useState(false);
  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);

  return (
    <>
      <HeaderLogin />
      <Container className="mt-5">
        <Row>
          <Col>
            <h5>Riwayat Pemesanan</h5>
          </Col>
        </Row>

        <Row className="mt-3">
          <div className="d-flex flex-row align-items-center gap-4 justify-content-center">
            <Button className="w-100 text-start">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <BsArrowLeftShort size={24} />
                Beranda
              </Link>
            </Button>
            <Button
              variant="light"
              className="line-btn-fltr d-flex flex-row gap-2"
              onClick={handleShowFilter}
            >
              <BsFunnel size={20} />
              Filter
            </Button>
            <BsSearch
              size={20}
              onClick={handleShowSearch}
              style={{ cursor: "pointer" }}
            />
          </div>
        </Row>

        <Row className="mt-4">
          <Col>
            <DetailPesanan />
          </Col>

          <Col>
            <div className="mt-3">
              <div className="issued d-flex align-items-center justify-content-between">
                <h5 className="fw-bold">Detail Pesanan</h5>
                <Button>Issued</Button>
              </div>
              <h6>
                Booking Code:
                <b className="total-color"> 6723y2GHK</b>{" "}
              </h6>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-bold">19:10</h6>
                <h6 className="text-color">Keberangkatan</h6>
              </div>
              <p className="mb-0">5 Maret 2023</p>
              <p>Soekarno Hatta - Terminal 1A Domestik</p>
            </div>

            <hr />
            <Col xs={1} className="d-flex align-items-center">
              <Col md="auto">
                <h6 className="fw-bold">Jet Air - Economy</h6>
                <h6 className="fw-bold mb-4">JT - 203</h6>
                <h6 className="fw-bold">Informasi:</h6>
                <p className="mb-0 fw-medium info">
                  Penumpang 1: Mr. Harry Potter
                </p>
                <p>ID: 1234567</p>
                <p className="mb-0 fw-medium info">
                  Penumpang 1: Miss Hermione
                </p>
                <p>ID: 789658</p>
              </Col>
            </Col>

            <hr />

            <div className="div">
              <div className="d-flex justify-content-between align-items-center">
                <h6>21:10</h6>
                <h6 className="text-color">Kedatangan</h6>
              </div>
              <p className="mb-0">5 Maret 2023</p>
              <p className="fw-bold">Melbourne International Airport</p>
            </div>

            <hr />

            <div>
              <h5 className="fw-bold">Rincian Harga</h5>
              <div className="d-flex justify-content-between align-items-center mb-0">
                <p>IDR 9.550.000</p>
                <p>2 Adults</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-0">
                <p>1 Baby</p>
                <p>IDR 0</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Tax</p>
                <p>IDR 300.000</p>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center">
              <h5>Total</h5>
              <h4 className="total-color">IDR 9.850.000</h4>
            </div>

            <Button
              as={Link}
              to={"/ticket"}
              type="submit"
              className="my-4 w-100"
            >
              Cetak Tiket
            </Button>
          </Col>
        </Row>

        <Modal show={showSearch} onHide={handleCloseSearch} centered>
          <Modal.Header closeButton>
            <Modal.Title className="w-100">
              <InputGroup>
                <InputGroup.Text>
                  <BsSearch />
                </InputGroup.Text>
                <Form.Control placeholder="Masukkan nomor penerbangan" />
              </InputGroup>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-row align-items-center justify-content-between">
              <h6>Pencarian terkini</h6>
              <h6 style={{ color: "var(--error)" }}>Hapus</h6>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={showFilter} onHide={handleCloseFilter} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="date" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={handleCloseFilter}
              style={{
                fontSize: "14px",
                backgroundColor: "var(--darkblue-04)",
                border: "none",
              }}
            >
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default History;
