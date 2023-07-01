import React, { useEffect, useState } from "react";
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
import DetailPesanan from "../components/DetailPesanan";
import "../styles/history.css";
import HeaderLogin from "../components/HeaderLogin";
import { Link } from "react-router-dom";
import axios from "axios";

const History = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);

  const [showFilter, setShowFilter] = useState(false);
  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);

  const [riwayat, setRiwayat] = useState([]);
  const [dataById, setDataById] = useState([]);
  const [id, setId] = useState("");
  console.log(id);

  const handleId = (id) => {
    setId(id);
  };

  const getData = () => {
    axios
      .get(`https://tiketku-development.up.railway.app/order`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setRiwayat(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getDataDetail = (id) => {
    axios
      .get(`https://tiketku-development.up.railway.app/order/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setDataById(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(dataById?.flight_detail?.passengers, "data passenger");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getDataDetail(id);
  }, [id]);

  // const elementPassenger = [];
  // for (let i = 1; i <= dataById?.flight_detail?.passengers.length; i++) {
  //   elementPassenger.push(
  //     <p className="mb-0 fw-medium info">
  //       <p>Penumpang {i}:</p>
  //       <p>
  //         {dataById?.flight_detail?.passengers?.map((item) => item.title)}{" "}
  //         {dataById?.flight_detail?.passengers?.map((item) => item.fullname)}
  //       </p>

  //       <p>
  //         KTP : {dataById?.flight_detail?.passengers?.map((item) => item.ktp)}
  //       </p>
  //     </p>
  //   );
  // }

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
            <DetailPesanan data={riwayat} handleId={handleId} />
          </Col>

          <Col>
            <div className="mt-3">
              <div className="issued d-flex align-items-center justify-content-between">
                <h5 className="fw-bold">Detail Pesanan</h5>
                <Button
                  variant={
                    dataById.status === "PAID"
                      ? "success"
                      : dataById.status === "UNPAID"
                      ? "warning"
                      : "danger"
                  }
                >
                  {dataById.status}
                </Button>
              </div>
              <h6>
                Booking Code:
                <b className="total-color"> {dataById.booking_code}</b>{" "}
              </h6>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-bold">
                  {dataById?.flight_detail?.departure?.time}
                </h6>
                <h6 className="text-color">Keberangkatan</h6>
              </div>
              <p className="mb-0">{dataById?.flight_detail?.departure?.date}</p>
              <p>
                {dataById?.flight_detail?.departure?.airport_name} -{" "}
                {dataById?.flight_detail?.departure?.city}
              </p>
            </div>

            <hr />
            <Col xs={1} className="d-flex align-items-center">
              <Col md="auto">
                <h6 className="fw-bold">
                  {dataById?.flight_detail?.airplane?.airline} -{" "}
                  {dataById?.flight_detail?.airplane?.seat_class}
                </h6>
                <h6 className="fw-bold mb-4">
                  {dataById?.flight_detail?.airplane?.flight_number}
                </h6>
                <h6 className="fw-bold">Informasi:</h6>
                {dataById.booking_code === undefined
                  ? console.log("kosong")
                  : dataById.flight_detail.passengers.map((item, index) => (
                      <>
                        <p className="mb-0 fw-medium info">
                          Penumpang {index + 1}: {item.fullname}
                        </p>
                        <p>ID: {item.ktp} </p>
                      </>
                    ))}
              </Col>
            </Col>

            <hr />

            <div className="div">
              <div className="d-flex justify-content-between align-items-center">
                <h6>{dataById?.flight_detail?.arrival?.time}</h6>
                <h6 className="text-color">Kedatangan</h6>
              </div>
              <p className="mb-0">{dataById?.flight_detail?.arrival?.date}</p>
              <p className="fw-bold">
                {dataById?.flight_detail?.arrival?.airport_name} -{" "}
                {dataById?.flight_detail?.arrival?.city}
              </p>
            </div>

            <hr />

            <div>
              <h5 className="fw-bold">Rincian Harga</h5>
              <div className="d-flex justify-content-between align-items-center mb-0">
                <p>{dataById?.price_detail?.adult_count} Adults</p>
                <p>{dataById?.price_detail?.adult_price}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-0">
                <p>{dataById?.price_detail?.child_count} Child</p>
                <p>{dataById?.price_detail?.child_price}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-0">
                <p>{dataById?.price_detail?.infant_count} Baby</p>
                <p>{dataById?.price_detail?.infant_price}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Tax </p>
                <p>{dataById?.price_detail?.tax}</p>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center">
              <h5>Total</h5>
              <h4 className="total-color">
                {dataById?.price_detail?.total_price}
              </h4>
            </div>

            <Button
              as={Link}
              className="my-4 w-100"
              variant={
                dataById.status === "PAID"
                  ? "success"
                  : dataById.status === "UNPAID"
                  ? "warning"
                  : "danger"
              }
            >
              {dataById.status === "PAID"
                ? "CETAK TIKET"
                : dataById.status === "UNPAID"
                ? "LANJUT BAYAR"
                : "TIKET DIBATALKAN"}
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
