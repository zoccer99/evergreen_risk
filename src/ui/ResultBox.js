import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export const ResultBox = (props) => {
  const [url, setUrl] = useState();
  const generatePersonalLink = () => {
    const id = uuidv4(); //mit >DB anbindung zum Überprüfen zum vorhandensein des Links
    const url = `/myresult/${id}?risk=${props.calculatedRisk}&yin=${props.yin}&yang=${props.yang}&return=${props.return}&volality=${props.volality}`;
    setUrl(url);
  };

  return (
    <Card className="w-75">
      <Card.Body>
        <Container>
          <Row>
            <h2 className="text-center">
              ermittelte Risikokennzahl: {props.calculatedRisk}
            </h2>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center">Yin: {props.yin}</h3>
            </Col>
            <Col>
              <h3 className="text-center">Yang: {props.yang}</h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 className="text-center">erwarteter Ertrag: {props.return}</h3>
            </Col>
            <Col>
              <h3 className="text-center">erwartete Volatilität: {props.volality}</h3>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Button className="evergreen_button w-75" onClick={() => generatePersonalLink()} >
              Persönlichen Link erstellen
            </Button>
            {url && <a className="text-center" href={url}>{url}</a>}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};
