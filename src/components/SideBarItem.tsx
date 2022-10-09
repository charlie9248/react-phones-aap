import React from "react";
import { ProductType } from "../Types";
import { useCartContext } from "../context/CartContext";

interface SideBarProps {
  item: ProductType;
}

const SideBarItem = ({ item }: SideBarProps) => {
  const { hadleIncrement, handleDecrement , removeFromCart } = useCartContext();
  return (
    <>
    <div className="d-flex justify-content-between side-cart">
      <div
        onClick={() => handleDecrement(item.id)}
        className="btn"
      >
        -
      </div>
      <img alt="src" width="100px" height="100px" src={item.img} />
      <div onClick={() => hadleIncrement(item.id)} className="btn">
        +
      </div>
    </div>
    <div className="d-flex justify-content-between side-cart">
      <div
        onClick={() => handleDecrement(item.id)}
      >
        Price : {item.price}
      </div>
      <button className="btn btn-danger" onClick={()=> removeFromCart(item.id)}>Remove</button>
      <div onClick={() => hadleIncrement(item.id)}>
        count :{item.count}
      </div>

     
    </div>
    <div className="hr"></div>
    </>
  );
};

export default SideBarItem;
