import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import moneyBlush from "../assets/pictures/Moneyverse Business Balance.svg";

export const StartScreen = () => {
  return (
    <Container>
      <Row>
        <h1>Ermittle jetzt deine Risikorate!</h1>
      </Row>
      <Row className="justify-content-center">
        <Image src={moneyBlush} className="fluid w-50" />
      </Row>
    </Container>
  );
};
