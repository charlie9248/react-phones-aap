import React from 'react'
import {Row  , Col} from 'react-bootstrap';
const CartHeading = () => {
  return (
    <Row className="d-none d-lg-flex  font-weight-bold">
      <Col >Image</Col>
      <Col >Name</Col>
      <Col >Price</Col>
      <Col >Remove</Col>
      <Col >Count</Col>
      <Col >Total</Col>
    </Row>
  )
}

export default CartHeading
