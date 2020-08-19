import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import CreditCard from './Card';
import './CardForm.css';

const CardForm = () => {
  const months = ['Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = ['Year', 2021, 2022, 2023, 2024, 2025];

  const initialInputState = { cardName: '', cardNumber: '' };
  const [input, setInput] = useState(initialInputState);
  const {cardName, cardNumber} = input;

  const handleInputChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input)
  };

  return (
    <div className='card_form'>
      <CreditCard input={input}/>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="text" name="cardNumber" onChange={handleInputChange} value={cardNumber}/>
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
              {
                months.map(month => <option key={month}>{month}</option>)
              }
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Control as="select" defaultValue="Year">
              {
                years.map(year => <option key={year}>{year}</option>)
              }
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
