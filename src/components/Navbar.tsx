import React from "react";
import { NavLink } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { Navbar as NavbarBs, Nav } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const { openCart ,quantity } = useCartContext();
  return (
    <NavbarBs sticky="top" className="bg-white  shadow-sm mb-3">
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink} className="links">
          Home
        </Nav.Link>
        <Nav.Link to="/cart" as={NavLink} className="links">
          Cart
        </Nav.Link>
      </Nav>

      <div icon-container>
        <MdAddShoppingCart
          onClick={() => openCart()}
          className="m-4 icon_svg"
        />

        <div className="icon">{quantity()}</div>
      </div>
    </NavbarBs>
  );
};

export default Navbar;
