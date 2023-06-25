import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HeaderLogin from "../components/HeaderLogin";
import { Link, useNavigate} from "react-router-dom";

import { Card, Nav } from "react-bootstrap";

// import mui library
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";
import CachedIcon from "@mui/icons-material/Cached";
import ButtonMui from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import ModalDeparture from "../components/search-booking/ModalDeparture";
import ModalReturn from "../components/search-booking/ModalReturn";

// import Button react js
import Button from "react-bootstrap/Button";

// import grid react js
import { Container, Row, Col } from "react-bootstrap";

// import banner diskon
import banner_home from "../styles/images/img_banner.png";

// import logo search
import search_logo from "../styles/images/fi_search.png";

import img_destination1 from "../styles/images/img_destination1.png";
import takeoff_icon from "../styles/images/takeoff.png";
import landing_icon from "../styles/images/landing.png";
import date_icon from "../styles/images/date.png";
import passenger_icon from "../styles/images/passenger.png";
import seat_class from "../styles/images/seat_class.png";

// import css
// import "../styles/home.css";
import "../styles/Responsive/styleEkstraDesktop.css";
import "../styles/Responsive/styleDesktop.css";
import "../styles/Responsive/styleTablet.css";
import "../styles/Responsive/styleMobile.css";
import ModalPassenger from "../components/search-booking/ModalPassenger";

import axios from "axios";


function Home(props) {
  // First line HeaderLogin
  console.log(props, "propsku");
  const [tokentoHome, setTokentoHome] = useState(
    props.tokenLogin ? props.tokenLogin : undefined
  );

  useEffect(() => {
    setTokentoHome(props.tokenLogin);
  }, [props]);

  console.log(tokentoHome, "tokennn");
  // Last line HeaderLogin

  // First Line Get User Detail
  const [name, setName] = useState();

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
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // First Fetch airport
  const [airport, setAirport] = useState([]);

  useEffect(() => {
    axios
      .get("https://tiketku-api-development.up.railway.app/airport")
      .then((response) => {
        setAirport(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log(airport);
  }, [airport]);
  // Last Fetch airport

  // First Passenger
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [infants, setInfants] = useState(0);
  const [isDivVisible, setDivVisible] = useState(false);
  const nav = useNavigate()
  const handleDivClick = () => {
    setDivVisible(!isDivVisible);
  };
  // Last Passenger

  // First Modal Date Departure & Return
  const [datedep, setDatedep] = useState();
  const [dateret, setDateret] = useState();

  const [showDeparture, setShowDeparture] = useState();
  const handleCloseDeparture = () => setShowDeparture(false);
  const handleOpenDeparture = () => setShowDeparture(true);
  const dateDeparture = () => setDatedep();

  const [showReturn, setShowReturn] = useState();
  const handleCloseReturn = () => setShowReturn(false);
  const handleOpenReturn = () => setShowReturn(true);

  const handleDateSelectDep = (date) => {
    setDatedep(date);
  };
  const handleDateSelectRet = (date) => {
    setDateret(date);
  };
  // Last Modal Date Departure & Return

  // First Button Switch return
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  // Last Button Switch return
  const [selectedValue, setSelectedValue] = useState();
  const [selectedValueCityFrom, setSelectedValueCityFrom] = useState();
  const [selectedValueCityTo, setSelectedValueCityTo] = useState();
  const handleMenuItemClick = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
  };
  const handleMenuItemClickCityFrom = (event) => {
    const { value } = event.target;
    setSelectedValueCityFrom(value);
  };
  const handleMenuItemClickCityTo = (event) => {
    const { value } = event.target;
    setSelectedValueCityTo(value);
  };
  const handleSearchFlight = (e) =>{
    console.log(dataPost)
    e.preventDefault();
    axios
      .post("https://tiketku-development.up.railway.app/flight/search", dataPost)
      .then((response) => {
        // Handle successful registration
        // console.log(response.data.data.flights);
        nav("/search_result",{ state: response.data.data.flights })
      })
      .catch((error) => {
        // Handle error
        // alert("Password Salah / Email Belum Terdaftar !");
        console.log(error)
      });
  }
  let dataPost = {
    date : datedep,
    adult : adults,
    child : kids,
    infant: infants,
    seat_class :selectedValue,
    arrival_airport_city: selectedValueCityTo,
    departure_airport_city:  selectedValueCityFrom

  }
  return (
    <>
      {tokentoHome === undefined || tokentoHome === null ? (
        <Header />
      ) : (
        <HeaderLogin />
      )}

      <Container>
        <Row>
          <div>
            <img src={banner_home} alt="Banner Home" className="banner_home" />
          </div>
        </Row>
        <Row>
          <div>
            {/* First Line Form Booking Destinasi */}
            <div className="frame_booking">
              <div>
                <h6 className="title_form">
                  Hello <span className="nama_user">{name}</span> ! Pilih Jadwal
                  Penerbangan spesial di Tiketku!
                </h6>
              </div>
              <form onSubmit={handleSearchFlight}>
              <div className="content_form">
                {/* tambah flex biar rapi */}
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <img
                    className="takeoff_icon"
                    src={takeoff_icon}
                    alt="Takeoff Icon"
                  />
                  <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="from-select-label-id">From</InputLabel>
                    <Select
                      labelId="from-select-label"
                      id="from-select"
                      // value={age}
                      label="From"
                      // onChange={handleChange}
                      value={selectedValueCityFrom} onChange={handleMenuItemClickCityFrom}
                    >
                      {airport.map((item) => (
                        <MenuItem value={item.city}>
                          {item.city} - {item.airport_iata}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Dari mana anda?</FormHelperText>
                  </FormControl>

                  <CachedIcon sx={{ fontSize: 32, marginLeft: 5 }} />

                  <img
                    className="landing_icon"
                    src={landing_icon}
                    alt="Landing Icon"
                  />

                  <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="to-select-label-id">To</InputLabel>
                    <Select
                      labelId="to-select-label"
                      id="to-select"
                      // value={age}
                      label="To"
                      // onChange={handleChange}
                      value={selectedValueCityTo} onChange={handleMenuItemClickCityTo}
                    >
                      {airport.map((item) => (
                        <MenuItem value={item.city}>
                          {item.city} - {item.airport_iata}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Mau kemana anda?</FormHelperText>
                  </FormControl>

                  <img
                    className="passenger_icon"
                    src={passenger_icon}
                    alt="Passenger Icon"
                  />
                  {/* First Line Passenger */}
                  <div
                    className="passenger_wrap"
                    style={{
                      alignSelf: "start",
                      marginTop: "8px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      onClick={handleDivClick}
                      style={{
                        maxWidth: "250px",
                        height: "fit-content",

                        marginLeft: "20px",
                      }}
                      sx={{ m: 1, minWidth: 300 }}
                    >
                      <div
                        style={{
                          borderBottom: "1px solid blue",
                        }}
                      >
                        <p>
                          {adults} Dewasa, {kids} Anak, {infants} Bayi
                        </p>
                      </div>

                      <FormHelperText>Berapa Penumpang?</FormHelperText>
                    </div>
                    {isDivVisible && (
                      <div
                        style={{
                          backgroundColor: "white",
                          marginLeft: "15px",
                          position: "absolute",
                          top: "65px",
                          zIndex: "9999",
                        }}
                      >
                        <form>
                          <label>Adult</label>
                          <div
                            className="counter"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Button
                              onClick={() => {
                                setAdults(adults + 1);
                              }}
                              variant="success"
                            >
                              +
                            </Button>{" "}
                            <input
                              value={adults}
                              style={{
                                height: "30px",
                                margin: "3px",
                                textAlign: "center",
                                fontSize: "20px",
                                width: "60px",
                              }}
                              type="text"
                            />
                            <Button
                              onClick={() => {
                                setAdults(adults - 1);
                              }}
                              variant="success"
                            >
                              -
                            </Button>{" "}
                          </div>
                          <label>Kid</label>
                          <div
                            className="counter"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Button
                              onClick={() => {
                                setKids(kids + 1);
                              }}
                              variant="success"
                            >
                              +
                            </Button>{" "}
                            <input
                              value={kids}
                              style={{
                                height: "30px",
                                margin: "3px",
                                textAlign: "center",
                                fontSize: "20px",
                                width: "60px",
                              }}
                              type="text"
                            />
                            <Button
                              onClick={() => {
                                setKids(kids - 1);
                              }}
                              variant="success"
                            >
                              -
                            </Button>{" "}
                          </div>
                          <label>Infant</label>
                          <div
                            className="counter"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Button
                              onClick={() => {
                                setInfants(infants + 1);
                              }}
                              variant="success"
                            >
                              +
                            </Button>{" "}
                            <input
                              value={infants}
                              style={{
                                height: "30px",
                                margin: "3px",
                                textAlign: "center",
                                fontSize: "20px",
                                width: "60px",
                              }}
                              type="text"
                            />
                            <Button
                              onClick={() => {
                                setInfants(infants - 1);
                              }}
                              variant="success"
                            >
                              -
                            </Button>{" "}
                          </div>
                          <button onClick={handleDivClick}>Submit</button>
                        </form>
                      </div>
                    )}
                  </div>
                  {/* last Line Passenger */}
                </div>

                <div>
                  <img className="date_icon" src={date_icon} alt="Date Icon" />
                  {/* First Line Modal Departure */}
                  <Button
                    onClick={handleOpenDeparture}
                    className="button_departure"
                  >
                    Departure : {datedep}
                  </Button>
                  <ModalDeparture
                    show={showDeparture}
                    onClose={handleCloseDeparture}
                    onSelectDate={handleDateSelectDep}
                  />

                  {/* Last Line Modal Departure */}

                  {/* Switch untuk mengaktifkan return */}
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    size="small"
                    className="button_switch"
                  />

                  {/* First Line Modal Return */}
                  <Button
                    onClick={handleOpenReturn}
                    disabled={!checked}
                    className="button_return"
                  >
                    Return : {dateret}
                  </Button>
                  <ModalReturn
                    show={showReturn}
                    onClose={handleCloseReturn}
                    onSelectDate={handleDateSelectRet}
                  />
                  {/* Last Line Modal Return */}

                  <span className="span_seat_class">
                    <img
                      className="seat_class_icon"
                      src={seat_class}
                      alt="Seat Class Icon"
                    />

                    <FormControl sx={{ m: 1 }} className="seat_class_box">
                      <InputLabel id="return-select-label-id">
                        Seat Class
                      </InputLabel>
                      <Select
                        labelId="return-select-label"
                        id="return-select"
                        // value={age}
                        label="Seat Class"
                        // onChange={handleChange}
                        value={selectedValue} onChange={handleMenuItemClick}
                      >
                        <MenuItem value={"ECONOMY"}>Economy</MenuItem>
                        <MenuItem value={"PREMIUM ECONOMY"}>
                          Premium Economy
                        </MenuItem>
                        <MenuItem value={"BUSINESS"}>Business</MenuItem>
                        <MenuItem value={"FIRST CLASS"}>First Class</MenuItem>
                      </Select>
                      <FormHelperText>Kelas Penerbangan</FormHelperText>
                    </FormControl>
                  </span>
                  <div className="container_search">
                    {/* <Link to={"/search_result"}>
                      
                    </Link> */}
                    <ButtonMui
                        variant="contained"
                        type="submit"
                        size="large"
                        sx={{ m: 2, minWidth: 30 }}
                        className="button_search_booking"
                      >
                        CARI PENERBANGAN
                      </ButtonMui>
                  </div>
                </div>
              </div>
              </form>
              
            </div>
            {/* First Line Form Booking Destinasi */}
          </div>
        </Row>
        <Row>
          <div className="wrap_destination">
            {/* Title Destinasi */}
            <h6 className="title_destinasi">Destinasi Favorit</h6>

            {/* First Line Kategori Destinasi */}
            <div className="kategori">
              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Semua</p>
              </Button>
              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Asia</p>
              </Button>
              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Asia</p>
              </Button>

              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Amerika</p>
              </Button>
              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Australia</p>
              </Button>
              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Eropa</p>
              </Button>
              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Afrika</p>
              </Button>
            </div>
            {/* last Line Kategori Destinasi */}

            {/* Card Fav Destination */}
            <div className="card-destination">
              <Card className="card-kategori">
                <Card.Img
                  className="img_kategori"
                  variant="top"
                  src={img_destination1}
                />
                <Card.Body>
                  <h6 className="destination">Jakarta - Bangkok</h6>
                  <h6 className="airline">AirAsia</h6>
                  <h6 className="date">20 - 30 Maret 2023</h6>
                  <h6 className="price">
                    Mulai dari <br />
                    IDR 950.000
                  </h6>
                </Card.Body>
              </Card>

              <Card className="card-kategori2">
                <Card.Img
                  className="img_kategori"
                  variant="top"
                  src={img_destination1}
                />
                <Card.Body>
                  <h6 className="destination">Jakarta - Bangkok</h6>
                  <h6 className="airline">AirAsia</h6>
                  <h6 className="date">20 - 30 Maret 2023</h6>
                  <h6 className="price">
                    Mulai dari <br />
                    IDR 950.000
                  </h6>
                </Card.Body>
              </Card>

              <Card className="card-kategori3">
                <Card.Img
                  className="img_kategori"
                  variant="top"
                  src={img_destination1}
                />
                <Card.Body>
                  <h6 className="destination">Jakarta - Bangkok</h6>
                  <h6 className="airline">AirAsia</h6>
                  <h6 className="date">20 - 30 Maret 2023</h6>
                  <h6 className="price">
                    Mulai dari
                    <br />
                    IDR 950.000
                  </h6>
                </Card.Body>
              </Card>

              <Card className="card-kategori4">
                <Card.Img
                  className="img_kategori"
                  variant="top"
                  src={img_destination1}
                />
                <Card.Body>
                  <h6 className="destination">Jakarta - Bangkok</h6>
                  <h6 className="airline">AirAsia</h6>
                  <h6 className="date">20 - 30 Maret 2023</h6>
                  <h6 className="price">
                    Mulai dari <br />
                    IDR 950.000
                  </h6>
                </Card.Body>
              </Card>

              <Card className="card-kategori5">
                <Card.Img
                  className="img_kategori"
                  variant="top"
                  src={img_destination1}
                />
                <Card.Body>
                  <h6 className="destination">Jakarta - Bangkok</h6>
                  <h6 className="airline">AirAsia</h6>
                  <h6 className="date">20 - 30 Maret 2023</h6>
                  <h6 className="price">
                    Mulai dari <br /> IDR 950.000
                  </h6>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Home;
