import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import HeaderLogin from "../components/HeaderLogin";
import "../styles/search_result.css";
import arrow_left from "../styles/images/arrow_left.png";
import arrow_up_down from "../styles/images/arrow_up_down.png";
import transit_icon from "../styles/images/fi_box.png";
import fasilitas_icon from "../styles/images/fi_heart.png";
import harga_icon from "../styles/images/fi_dollar-sign.png";
import arrow_accordion from "../styles/images/arrow_accordion.png";

import Button from "react-bootstrap/Button";
import Loading from "../components/search-result/Loading";
import Empty from "../components/search-result/Empty";
// import CardResult from "../components/search-result/CardResult";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardResult from "../components/search-result/CardResult";

function SearchResult(props) {
  const [tokentoSearchResult, setTokentoSearchResult] = useState(
    props.tokenLogin ? props.tokenLogin : undefined
  );

  useEffect(() => {
    setTokentoSearchResult(props.tokenLogin);
  }, [props]);

  const loc = useLocation();
  const data = loc.state;
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      {tokentoSearchResult === undefined || tokentoSearchResult === null ? (
        <Header />
      ) : (
        <HeaderLogin />
      )}

      <Container>
        <Row>
          {/* Title */}
          <div>
            <h6 className="title_searchresult">Pilih Penerbangan</h6>
          </div>

          {/* Schedule selected */}
          <div>
            <div className="container_result_data_selected">
              <img
                className="icon_arrow_left"
                src={arrow_left}
                alt="Arrow Icon"
              />
              {data.map((data) => (
                <p className="text_result_data_selected">
                  {data.departure_airport.iata} - {data.arrival_airport.iata} -{" "}
                  {data.info.seat_class}
                </p>
              ))}

              <Button variant="success" className="button_ubah_pencarian">
                <p className="text_button_ubah_pencarian">Ubah Pencarian</p>
              </Button>
            </div>
          </div>

          {/* Day selected */}
          <div>
            <div className="container_result_date">
              <div className="wrapper">
                <p className="hari">Selasa</p>
                <p className="tanggal">01/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Rabu</p>
                <p className="tanggal">02/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Kamis</p>
                <p className="tanggal">03/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Jumat</p>
                <p className="tanggal">04/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Sabtu</p>
                <p className="tanggal">05/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Minggu</p>
                <p className="tanggal">06/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Senin</p>
                <p className="tanggal">07/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Selasa</p>
                <p className="tanggal">08/03/2023</p>
              </div>
            </div>
          </div>

          {/* Filter */}
          <div>
            <div className="box_filter">
              <Button className="button_filter">
                <img
                  className="icon_arrow_updown"
                  src={arrow_up_down}
                  alt="Icon Arrow Up Down"
                />
                <p className="text_filter">Termurah</p>
              </Button>
            </div>
          </div>

          {/* Menu Filter */}
          <div>
            <div className="box_menu_filter">
              <h5>Filter</h5>
              <p>
                <img
                  className="icon_transit"
                  src={transit_icon}
                  alt="Icon Transit"
                />
                Transit
              </p>
              <p>
                <img
                  className="icon_fasilitas"
                  src={fasilitas_icon}
                  alt="Icon Fasilitas"
                />{" "}
                Fasilitas
              </p>
              <p>
                <img className="icon_harga" src={harga_icon} alt="IconHarga" />
                Harga
              </p>
            </div>
          </div>

          {/* <Loading /> */}
          {/* <Empty /> */}

          {/* {data === undefined || data === null ? <Empty /> : <CardResult />} */}

          {/* First Line  Accordion Result*/}
          {console.log(data, "ini datat")}
          {data === undefined || data === null || data.length === 0 ? (
            <Empty />
          ) : (
            <div className="container_accordion">
              {data?.map((data) => (
                <Accordion className="box_accordion">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <div className="mt-3">
                        <div className="issued d-flex align-items-center justify-content-between">
                          <h5 className="fw-bold">
                            <img
                              src={data.airline.logo}
                              alt="logo_airplane"
                              className="logo_airplane"
                            />
                            {data.airline.name} - {data.info.seat_class}
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="fw-bold me-3">
                            {data.departure_time}
                          </h6>
                          <img
                            src={arrow_accordion}
                            alt="icon_arrow_accordion"
                            className="me-3"
                          />
                          <h6 className="fw-bold me-5">{data.arrival_time}</h6>
                          <h6 className="text-color">{data.info.price}</h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="fw-bold me-4">
                            {data.departure_airport.iata}
                          </h6>
                          <p className="ms-2 me-2">{data.duration}</p>
                          <h6 className="fw-bold ms-4">
                            {data.arrival_airport.iata}
                          </h6>
                          <Button
                            type="submit"
                            className="custom-button-lgn text-light w-10"
                          >
                            Pesan
                          </Button>
                        </div>
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="mt-3">
                        <div className="issued d-flex align-items-center justify-content-between">
                          <h5 className="fw-bold">Detail Pesanan</h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="fw-bold">{data.departure_time}</h6>
                          <h6 className="text-color">Keberangkatan</h6>
                        </div>
                        <p className="mb-0">{data.date}</p>
                        <p>
                          {data.departure_airport.name} -{" "}
                          {data.departure_airport.city}
                        </p>
                      </div>

                      <hr />
                      <Col xs={1} className="d-flex align-items-center">
                        <Col md="auto">
                          <h6 className="fw-bold">
                            {data.airline.name} - {data.info.seat_class}
                          </h6>
                          <h6 className="fw-bold mb-4">
                            {data.airplane_model}
                          </h6>

                          <h6 className="fw-bold">
                            <img
                              src={data.airline.logo}
                              alt="logo_airplane"
                              className="logo_airplane"
                            />
                            Informasi:
                          </h6>
                          <p>Baggage {data.info.free_baggage} kg</p>
                          <p>Cabin Baggage {data.info.cabin_baggage} kg</p>
                          <p>In Flight Entertainment</p>
                        </Col>
                      </Col>

                      <hr />

                      <div className="div">
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="fw-bold">{data.arrival_time}</h6>
                          <h6 className="text-color">Kedatangan</h6>
                        </div>
                        <p className="mb-0">{data.date}</p>
                        <p className="fw-bold">
                          {data.arrival_airport.name} -{" "}
                          {data.arrival_airport.city}
                        </p>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          )}
          {/* Last Line Accordion Result */}
        </Row>
      </Container>
    </>
  );
}

export default SearchResult;
