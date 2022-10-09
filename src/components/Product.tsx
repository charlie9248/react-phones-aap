import React from "react";
import { ProductType } from "../Types";
import { Col, Card } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import {MdAddShoppingCart} from 'react-icons/md'
import {BsCartCheck} from 'react-icons/bs'

interface ProductProps {
  item: ProductType;
}

const Product = ({ item }: ProductProps) => {
  const { addToCart, hadleIncrement, handleDetails } = useCartContext();
  return (
    <Col className="m-auto" sm={1} md={4} lg={4}>
      <Card
        onClick={() => {
          handleDetails(item.id);
        }}
        className="shadow-sm crd"
        style={{ width: "70%", margin: "20px" }}
        bg="light"
      >
        <Link to={`/details`}>
          <Card.Body className="crd-body">
            <Card.Img
              className="p-5 crd-image"
              alt={item.title}
              src={item.img}
            />
            <button disabled={item.inCart ? true : false} onClick={(e) => addToCart(e, item.id)} className="crd-btn">
              {item.inCart ?  <BsCartCheck /> : <MdAddShoppingCart/>}
            </button>
          </Card.Body>
        </Link>

        <Card.Footer className="d-flex justify-content-between">
          <span>{item.title}</span>
          <span>R{item.price}</span>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Product;
