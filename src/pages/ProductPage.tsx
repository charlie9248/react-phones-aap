import React from 'react'
import Product from '../components/Product';
import {useCartContext} from '../context/CartContext';
import {Row} from 'react-bootstrap'

const ProductPage = () => {

  const {products} = useCartContext()
  return (
    <Row>
      {products.map(item => <Product key={item.id}  item={item}/>)}
    </Row>
  )
}

export default ProductPage
