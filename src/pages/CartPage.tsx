import React, { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import Cart from "../components/Cart";
import CartHeading from "../components/CartHeading";

interface userNamesTypes {
  name  : string,
  surname : string
}
const CartPage = () => {
  const { cartItems, total ,getTotal } = useCartContext();
  return (
    <div className="cart-container">
      {cartItems.length > 0 && <CartHeading />}
      {cartItems.length == 0 ? (
        <h2 className="text">No Items to be displayed</h2>
      ) : (
        cartItems.map((item) => {
          return <Cart key={item.id} item={item} />;
          
        })
      )}

      <div className="total_">{cartItems.length > 0 && <div className="count_total">Total  : {getTotal}</div>}</div>

      <br />
      
      {cartItems.length >  0 && <form action="https://sandbox.payfast.co.za​/eng/process" method="POST" className="form">
          <input
            type="hidden"
            name="merchant_id"
            value="10027409"
          />
          <input
            type="hidden"
            name="merchant_key"
            value="phkj70u0y1fbp"
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

    </div>
  );
};

export default CartPage;
