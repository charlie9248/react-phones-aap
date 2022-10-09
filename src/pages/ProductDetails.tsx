import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import {Link} from 'react-router-dom'

const ProductDetails = () => {
  const { datailProduct , addToCart } = useCartContext();
  console.log(datailProduct);
  return (
    <Row >
      <Col className="text-center m-3">
        <Card style={{ height:'80vh',}}>
          <Card.Body>
            <Card.Img  style={{width : '400px' , height:'50vh', objectFit : 'cover'}}
              className="p-5 crd-image "
              alt={datailProduct.title}
              src={datailProduct.img}
            />
          </Card.Body>
        </Card>
      </Col>
      <Col>
      <h2>{datailProduct.title}</h2>
      <h2>{datailProduct.company}</h2>
      <div >
      <p>{datailProduct.info}</p>

      <div>
        <h5>Price   R{datailProduct.price}</h5>
      </div>

      </div>
      <div className="my-5">
        <button disabled={datailProduct.inCart ? true : false} onClick={(e) => addToCart(e, datailProduct.id)} className="btn btn-outline-success">Add To Cart</button>
        <button className="btn btn-outline-warning btn-one"><Link style={{textDecoration : 'none' ,color : 'black',}} to={`/`}>Go Back To Shopping</Link></button>
      </div>
      </Col>
    </Row>
  );
};

export default ProductDetails;
