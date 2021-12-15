import React, {useContext, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import {FaShoppingCart} from "react-icons/all";
import styled from "./CartWidget.module.css";

const CartWidget = () => {

  const {cartItems} = useContext(CartContext)
  const [numberItems, setNumberItems] = useState(0)

  useEffect(() => {
    let numberTemporal = 0
    cartItems.forEach(item => {
      numberTemporal += item.quantity
    })
    setNumberItems(numberTemporal)
  }, [cartItems])

  const linkActive = ({isActive}) => (
    isActive ? `${styled.linkCart} ${styled.activeLink}` : styled.linkCart
  )

  return (
    <NavLink to={"/cart"} className={linkActive}>
      {numberItems > 0 && <>
        <FaShoppingCart color="#fff" size={25}/>
        <p>{numberItems}</p></>
      }
    </NavLink>
  );
};

export default CartWidget;


