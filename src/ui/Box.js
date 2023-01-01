import React from "react";
import { Form } from "react-bootstrap";

export const Box = () => {
  return (
    <div>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.//Erklärung
      </p>
      <Form.Select aria-label="...">
        {props.answers.map((answer, index) => {
          return (
            <option key={index} value={answer}>
              {answer}
            </option>
          );
        })}
      </Form.Select>
    </div>
  );
};
