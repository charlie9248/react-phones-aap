import React from 'react'
import {Offcanvas, OffcanvasHeader} from 'react-bootstrap'
import {useCartContext} from '../context/CartContext'
import SideBarItem from './SideBarItem';


const SideBarCart = ({isOpen} : {isOpen : boolean}) => {

    const {cartItems  , closeCart , total ,getTotal} = useCartContext();

    

    console.log(cartItems)
    console.log(isOpen)
  return (
    <Offcanvas className='side' show={isOpen} onHide={closeCart} placement={'end'}>
      <OffcanvasHeader className='side-header'>
      {cartItems.length == 0 ? (
        <h2 className="text">No Items to be displayed</h2>
      ) : (
        cartItems.map((item) => {
          return <SideBarItem key={item.id} item={item}/>;
        })
      )}
      </OffcanvasHeader>

      {cartItems.length >  0 && <form action="https://sandbox.payfast.co.za​/eng/process" method="POST" className="form">
          <input
            type="hidden"
            name="merchant_id"
            value='10027409'
          />
          <input
            type="hidden"
            name="merchant_key"
            value='phkj70u0y1fbp'
          />
          <input
            type="hidden"
            name="return_url"
            value="http://localhost:3000/cart"
          />
          <input
            type="hidden"
            name="cancel_url"
            value="http://localhost:3000/"
          />
          <input type="hidden" name="name_first" value="Tshepo" />
          <input type="hidden" name="name_last" value="Rapuleng" />
          <input
            type="hidden"
            name="email_address"
            value="mothibelirapuleng@gmail.com"
          />
          <input type="hidden" name="cell_number" value="0000000000" />
          <input type="hidden" name="amount" value={getTotal} />
          <input type="hidden" name="item_name" value="TestItem" />
   
          <button className="cart__checkOutButton">
            PROCEED TO CHECKOUT
          </button>
        </form> }
      
    </Offcanvas>
  )
}

export default SideBarCart
