import React from 'react'
import { Col, Row } from 'react-bootstrap';
import {ProductType} from '../Types';
import {useCartContext} from '../context/CartContext';
import  {BsTrashFill} from 'react-icons/bs'

interface CartType {
  item : ProductType
}

const Cart = ({item} : CartType) => {

  const  {hadleIncrement , handleDecrement ,  removeFromCart , total} = useCartContext();
  return (
    <>
    <Row>
      <Col><img alt='image' src={item.img}  style={{width : '80px' , height : '80px'}}/></Col>
      <Col>{item.company}</Col>
      <Col>{item.price}</Col>
      <Col><BsTrashFill onClick={() => removeFromCart(item.id)}/></Col>
      <Col ><div onClick={() => handleDecrement(item.id)} className='btn'>-</div> <div className='btn'>{item.count}</div> <div onClick={() => hadleIncrement(item.id)} className='btn'>+</div></Col>
      <Col>{item.total}</Col>
    </Row>
    <hr />
    </>
  )
}

export default Cart
