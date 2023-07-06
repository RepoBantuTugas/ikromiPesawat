import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { BsArrowLeftShort, BsFunnel, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import HeaderLogin from "../components/HeaderLogin";
import axios from "axios";

const Notifikasi = () => {
  const styles = {
    txtMute: {
      color: "#8a8a8a",
      fontSize: "15px",
    },
    txtDark: {
      color: "black",
    },
    customHr: {
      borderTop: "1px solid purple",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    },
  };

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleShowFilter = () => {
    setShowFilterModal(true);
  };

  const handleCloseFilter = () => {
    setShowFilterModal(false);
  };

  const handleShowSearch = () => {
    setShowSearchModal(true);
  };

  const handleCloseSearch = () => {
    setShowSearchModal(false);
  };

  const [dataNotif, setDataNotif] = useState([]);

  useEffect(() => {
    axios
      .get(`https://tiketku-production.up.railway.app/notif`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setDataNotif(response.data.data);
        console.log(response.data.data, "notifffff");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(dataNotif, "datanotif");

  return (
    <>
      <HeaderLogin />

      <Container className="h-100 mt-5">
        <Row>
          <Col>
            <h5>Notifikasi</h5>
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

        <hr style={styles.customHr} />

        <Row>
          <Col md={1} xs={2} className="d-flex justify-content-end">
            <div>
              {/* <img src={notifikationsIcon} alt="notifikasiIcon" /> */}
            </div>
          </Col>
          <Col xs={8}>
            {dataNotif.map((data) => (
              <p style={styles.txtMute}>
                {data?.title}
                <br />
                <span style={styles.txtDark} className="fw-bold fs-6">
                  {data?.description}
                </span>
                <hr style={styles.customHr} />
                <br />
              </p>
            ))}
          </Col>
          <Col xs={2}>
            <p style={styles.txtMute}></p>
          </Col>
        </Row>
        <hr style={styles.customHr} />
      </Container>

      {/* Filter Modal */}
      <Modal show={showFilterModal} onHide={handleCloseFilter}>
        <Modal.Header closeButton>
          <Modal.Title>Filter Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Filter by Category</Form.Label>
              <Form.Control as="select">
                <option>All</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Filter by Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFilter}>
            Close
          </Button>
          <Button variant="primary">Apply</Button>
        </Modal.Footer>
      </Modal>

      {/* Search Modal */}
      <Modal show={showSearchModal} onHide={handleCloseSearch}>
        <Modal.Header closeButton>
          <Modal.Title>Search Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Search Keyword</Form.Label>
              <Form.Control type="text" placeholder="Enter keyword" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSearch}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Notifikasi;
