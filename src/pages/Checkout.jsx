import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Datapemesanan from "../components/Datapemesanan";
import Datapenumpang from "../components/DataPenumpang";
// import Matahari from "../styles/images/matahari.png";
import "../styles/checkout.css";
import {
  Form,
  Alert,
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import axios from "axios";

const Checkout = () => {
  const loc = useLocation();
  const { dataPost, flight_id } = loc.state;

  const elementAdult = [];
  const elementKid = [];
  const elementinfant = [];

  const [name, setName] = useState("");

  useEffect(() => {
    console.log(dataPost, flight_id);
  }, []);
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };
  for (let count = 1; count <= dataPost.price.adult_count; count++) {
    elementAdult.push(
      <div className="dataPenumpang">
        <Card className="border-0">
          <Card.Header className="bg-dark text-light">
            Data Diri Penumpang {count} - Adult
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Title
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    handleChange(e, count - 1);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Nama Lengkap
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    handleChangeName(e, count - 1);
                  }}
                />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <Form.Text>Punya Nama Keluarga?</Form.Text>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    onClick={toggleInput}
                  />
                </div>
              </Form.Group>

              {showInput && (
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                    Nama Keluarga
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              )}

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Tanggal Lahir
                </Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => {
                    handleChangeDate(e, count - 1);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Kewarganegaraan
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    handleChangeNational(e, count - 1);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  KTP/Paspor
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    handleChangeKtp(e, count - 1);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Negara Penerbit
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Berlaku Sampai
                </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
  for (let count = 1; count <= dataPost.price.child_count; count++) {
    elementKid.push(
      <div className="dataPenumpang">
        <Card className="border-0">
          <Card.Header className="bg-dark text-light">
            Data Diri Penumpang {count} - Kid
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Title
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    handleChangeKid(e, count - 1);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Nama Lengkap
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    handleChangeNameKid(e, count - 1);
                  }}
                />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <Form.Text>Punya Nama Keluarga?</Form.Text>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    onClick={toggleInput}
                  />
                </div>
              </Form.Group>

              {showInput && (
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                    Nama Keluarga
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              )}

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Tanggal Lahir
                </Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => {
                    handleChangeDateKid(e, count - 1);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Kewarganegaraan
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    handleChangeNationalKid(e, count - 1);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  KTP/NIK
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    handleChangeKtpKid(e, count - 1);
                  }}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
  for (let count = 1; count <= dataPost.price.infant_count; count++) {
    elementinfant.push(
      <div className="dataPenumpang">
        <Card className="border-0">
          <Card.Header className="bg-dark text-light">
            Data Diri Penumpang {count} - Infant
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Title
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    handleChangeInf(e, count - 1);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Nama Lengkap
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    handleChangeNameInf(e, count - 1);
                  }}
                />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <Form.Text>Punya Nama Keluarga?</Form.Text>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    onClick={toggleInput}
                  />
                </div>
              </Form.Group>

              {showInput && (
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                    Nama Keluarga
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              )}

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Tanggal Lahir
                </Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => {
                    handleChangeDateInf(e, count - 1);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Kewarganegaraan
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    handleChangeNationalInf(e, count - 1);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  NIK
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    handleChangeKtpInf(e, count - 1);
                  }}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }

  const [data, setData] = useState([]);
  const [datakid, setDatakid] = useState([]);
  const [datainf, setDatainf] = useState([]);
  function handleCreateOrder(e) {
    e.preventDefault();
    // console.log("halo")
    // console.log(dataPost)

    function addObjectFromArray(masterArray, objectArray) {
      if (objectArray.length !== 0) {
        for (let i = 0; i < objectArray.length; i++) {
          masterArray.push(objectArray[i]);
        }
      }
    }

    const combinated = [];
    addObjectFromArray(combinated, data);
    addObjectFromArray(combinated, datakid);
    addObjectFromArray(combinated, datainf);
    console.log(combinated);
    const order = {
      adult: dataPost.price.adult_count,
      child: dataPost.price.child_count,
      infant: dataPost.price.infant_count,
      flight_id,
      passengers: combinated,
      seat_class: dataPost.info.seat_class,
    };
    axios
      .post("https://tiketku-development.up.railway.app/order", order, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);

        // nav to ....
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(order)
  }
  function handleChange(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // console.log(e.target.value,index)
    // data = {...data,}
    const newData = { title: e.target.value, age_group: "adult" };
    const updatedObject = { ...data[index], ...newData };
    const updatedMaster = [...data];
    updatedMaster[index] = updatedObject;
    setData(updatedMaster);

    // setData((prevFormData) => ({ ...prevFormData, index: e.target.value }));
  }
  function handleChangeKid(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // datakid[index] = {"title" : e.target.value,"age_group" : "kid"}
    const newData = { title: e.target.value, age_group: "child" };
    const updatedObject = { ...datakid[index], ...newData };
    const updatedMaster = [...datakid];
    updatedMaster[index] = updatedObject;
    setDatakid(updatedMaster);

    // setData((prevFormData) => ({ ...prevFormData, index: e.target.value }));
  }
  function handleChangeInf(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // datainf[index] = {"title" : e.target.value,"age_group" : "infant"}
    const newData = { title: e.target.value, age_group: "infant" };
    const updatedObject = { ...datainf[index], ...newData };
    const updatedMaster = [...datainf];
    updatedMaster[index] = updatedObject;
    setDatainf(updatedMaster);

    // setData((prevFormData) => ({ ...prevFormData, index: e.target.value }));
  }
  function handleChangeName(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // newData[index] = {...newData,"daffa":e.target.value}
    // console.log(e.target.value,index)
    // data[index] = {...data[index],"fullname" : e.target.value}

    // setData({...data,"fullname" : e.target.value})
    // setName(e.target.value)
    const newData = { fullname: e.target.value };
    const updatedObject = { ...data[index], ...newData };
    const updatedMaster = [...data];
    updatedMaster[index] = updatedObject;
    setData(updatedMaster);
    // setName('');
    // setName('')

    // setData([...data,data[index] = newData])
  }
  function handleChangeNameKid(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // newData[index] = {...newData,"daffa":e.target.value}
    // console.log(e.target.value,index)
    // datakid[index] = {...datakid[index],"fullname" : e.target.value}

    const newData = { fullname: e.target.value };
    const updatedObject = { ...datakid[index], ...newData };
    const updatedMaster = [...datakid];
    updatedMaster[index] = updatedObject;
    setDatakid(updatedMaster);
  }
  function handleChangeNameInf(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // newData[index] = {...newData,"daffa":e.target.value}
    // console.log(e.target.value,index)
    // datainf[index] = {...datainf[index],"fullname" : e.target.value}
    const newData = { fullname: e.target.value };
    const updatedObject = { ...datainf[index], ...newData };
    const updatedMaster = [...datainf];
    updatedMaster[index] = updatedObject;
    setDatainf(updatedMaster);
  }
  function handleChangeDate(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // newData[index] = {...newData,"daffa":e.target.value}
    // data[index] = {...data[index],"birthdate" : e.target.value}
    const newData = { birthdate: e.target.value };
    const updatedObject = { ...data[index], ...newData };
    const updatedMaster = [...data];
    updatedMaster[index] = updatedObject;
    setData(updatedMaster);
  }
  function handleChangeDateKid(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // newData[index] = {...newData,"daffa":e.target.value}
    // datakid[index] = {...datakid[index],"birthdate" : e.target.value}
    const newData = { birthdate: e.target.value };
    const updatedObject = { ...datakid[index], ...newData };
    const updatedMaster = [...datakid];
    updatedMaster[index] = updatedObject;
    setDatakid(updatedMaster);
  }
  function handleChangeDateInf(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // newData[index] = {...newData,"daffa":e.target.value}
    // datainf[index] = {...datainf[index],"birthdate" : e.target.value}
    const newData = { birthdate: e.target.value };
    const updatedObject = { ...datainf[index], ...newData };
    const updatedMaster = [...datainf];
    updatedMaster[index] = updatedObject;
    setDatainf(updatedMaster);
  }
  function handleChangeNational(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // newData[index] = {...newData,"daffa":e.target.value}
    // data[index] = {...data[index],"nationality" : e.target.value}
    const newData = { nationality: e.target.value };
    const updatedObject = { ...data[index], ...newData };
    const updatedMaster = [...data];
    updatedMaster[index] = updatedObject;
    setData(updatedMaster);
  }
  function handleChangeNationalKid(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // newData[index] = {...newData,"daffa":e.target.value}
    // datakid[index] = {...datakid[index],"nationality" : e.target.value}
    const newData = { nationality: e.target.value };
    const updatedObject = { ...datakid[index], ...newData };
    const updatedMaster = [...datakid];
    updatedMaster[index] = updatedObject;
    setDatakid(updatedMaster);
  }
  function handleChangeNationalInf(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // newData[index] = {...newData,"daffa":e.target.value}
    // datainf[index] = {...datainf[index],"nationality" : e.target.value}
    const newData = { nationality: e.target.value };
    const updatedObject = { ...datainf[index], ...newData };
    const updatedMaster = [...datainf];
    updatedMaster[index] = updatedObject;
    setDatainf(updatedMaster);
  }
  function handleChangeKtp(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // newData[index] = {...newData,"daffa":e.target.value}
    // console.log(e.target.value,index)
    // data[index] = {...data[index],"ktp" : e.target.value}
    const newData = { ktp: e.target.value };
    const updatedObject = { ...data[index], ...newData };
    const updatedMaster = [...data];
    updatedMaster[index] = updatedObject;
    setData(updatedMaster);
  }
  function handleChangeKtpKid(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // newData[index] = {...newData,"daffa":e.target.value}
    // console.log(e.target.value,index)
    // data[index] = {...data[index],"ktp" : e.target.value}
    const newData = { ktp: e.target.value };
    const updatedObject = { ...datakid[index], ...newData };
    const updatedMaster = [...datakid];
    updatedMaster[index] = updatedObject;
    setDatakid(updatedMaster);
  }
  function handleChangeKtpInf(e, index) {
    // setData(e.target.value)
    // const newData = [...data]
    // newData[index] = {...newData,"daffa":e.target.value}
    // console.log(e.target.value,index)
    // data[index] = {...data[index],"ktp" : e.target.value}
    const newData = { ktp: e.target.value };
    const updatedObject = { ...datainf[index], ...newData };
    const updatedMaster = [...datainf];
    updatedMaster[index] = updatedObject;
    setDatainf(updatedMaster);
  }
  return (
    <>
      <Container className="bg warning mt-5">
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item active>
                <Link
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "#7126B5" }}
                >
                  Isi Data Diri
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                <Link
                  to="/Payment"
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "#7126B5" }}
                >
                  Bayar
                </Link>
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
            Selesaikan dalam 00:15:00
          </Alert>
        </Row>
        <Row className="gap-4">
          <Col>
            <Row className="border py-4 px-4">
              <Datapemesanan />
            </Row>
            <Row className="border py-4 px-4 mt-3">
              {/* <Datapenumpang /> */}
              <div className="dataPenumpang">
                <h5 className="fw-bold mb-4">Isi Data Penumpang</h5>
                {/* ini untuk looping adult */}
                <form onSubmit={handleCreateOrder}>
                  {elementAdult}
                  {elementKid}
                  {elementinfant}
                  <Button type="submit" className="w-100 my-3 button-save">
                    Simpan
                  </Button>
                </form>
              </div>
            </Row>
          </Col>
          <Col>
            <div className="mt-3">
              <h5 className="fw-bold">Detail Penerbangan</h5>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">{dataPost.departure.departure_time}</h5>
                <h6 className="fw-bold" style={{ color: "#7126B5" }}>
                  Keberangkatan
                </h6>
              </div>
              <p className="mb-0">{dataPost.departure.date}</p>
              <p>{dataPost.departure.airport_name}</p>
            </div>

            <hr />

            <Row className="d-flex align-items-center">
              <Col md={1}>
                {/* Logo maskapai */}
                {/* <img src={Matahari} alt="" /> */}
              </Col>
              <Col md="auto">
                <h6 className="fw-bold">
                  {dataPost.info.airline_name} - {dataPost.info.seat_class}
                </h6>
                <h6 className="fw-bold mb-4">{dataPost.info.airplane_model}</h6>
                <h6 className="fw-bold">Informasi:</h6>
                <p className="mb-0">Baggage {dataPost.info.free_baggage} kg</p>
                <p className="mb-0">
                  Cabin baggage {dataPost.info.cabin_baggage} kg
                </p>
                <p>In Flight Entertainment</p>
              </Col>
            </Row>

            <hr />

            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">{dataPost.arrival.arrival_time}</h5>
                <h6 className="fw-bold" style={{ color: "#7126B5" }}>
                  Kedatangan
                </h6>
              </div>
              <p className="mb-0">{dataPost.arrival.date}</p>
              <p className="fw-bold">{dataPost.arrival.airport_name}</p>
            </div>

            <hr />

            <div>
              <h5 className="fw-bold">Rincian Harga</h5>
              <div className="d-flex justify-content-between align-items-center">
                <p>{dataPost.price.adult_count} Adults</p>
                <p>IDR {dataPost.price.adult_price}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>{dataPost.price.child_count} Baby</p>
                <p>IDR {dataPost.price.child_price}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>{dataPost.price.infant_count} Baby</p>
                <p>IDR {dataPost.price.infant_price}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Tax</p>
                <p>IDR {dataPost.price.tax}</p>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold txt-primary">Total</h5>
              <h5 className="fw-bold" style={{ color: "#7126B5" }}>
                IDR {dataPost.price.total_price}
              </h5>
            </div>
            <br />
            <Link to="/Payment" className="w-100 pay">
              Lanjut Bayar
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
