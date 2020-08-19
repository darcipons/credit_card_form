import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import './CardForm.css';

const CardForm = () => {
  const initialInputState = { cardName: '', cardNumber: '' };
  const [input, setInput] = useState(initialInputState);
  const {cardName, cardNumber} = input;

  const handleInputChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input)
  };
  

  return (
    <div className='card_form'>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="password" name="cardNumber" onChange={handleInputChange} value={cardNumber}/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Card Name</Form.Label>
            <Form.Control type="text" name="cardName" onChange={handleInputChange} value={cardName}/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Col sm={8}>
            <Form.Label>Expiration Date</Form.Label>
          </Col>
         
          <Col sm>
            <Form.Label>CVV</Form.Label>
          </Col>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Control as="select" defaultValue="Month">
              <option>Month</option>
              <option>Jan</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Control as="select" defaultValue="Year">
              <option>Year</option>
              <option>2020</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Control type="text"/>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CardForm;
