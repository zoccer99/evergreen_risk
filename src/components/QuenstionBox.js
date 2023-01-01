import React, { useEffect, useState } from "react";
import { DropdownButton, Dropdown, Modal, Button, Form } from "react-bootstrap";

export const QuenstionBox = (props) => {
  useEffect(() => {
    props.result(props.answers[0]);
  }, []);

  const setResult = (val) => {
    props.result(val);
  };

  const nextButton = (index, modalState) => {
    let a = structuredClone(modalState);
    a[index] = false;
    a[index + 1] = true;

    console.log(a);
    props.next(a);
  };

  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.question}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.description}</p>
        <Form.Select
          aria-label="..."
          onChange={(e) => setResult(e.target.value)}
        >
          {props.answers.map((answer, index) => {
            return (
              <option key={index} value={answer}>
                {answer}
              </option>
            );
          })}
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="evergreen_button"
          onClick={() => nextButton(props.index, props.modalState)}
        >
          Weiter
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
