import React from "react";
import img_destination1 from "../styles/images/img_destination1.png";
import { Card } from "react-bootstrap";
import "../styles/home.css";

function CardFavDestination() {
  return (
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
          <h6 className="price">Mulai dari IDR 950.000 </h6>
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
          <h6 className="price">Mulai dari IDR 950.000 </h6>
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
          <h6 className="price">Mulai dari IDR 950.000 </h6>
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
          <h6 className="price">Mulai dari IDR 950.000 </h6>
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
          <h6 className="price">Mulai dari IDR 950.000 </h6>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardFavDestination;
