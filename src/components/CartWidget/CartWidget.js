import {Icon} from "@mui/material";
import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {CartContext} from "../../context/CartContext";

const CartWidget = () => {

  const {cartItems} = useContext(CartContext)

  const styles = {
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <Link to={"/cart"} style={styles}>
      <Icon>shopping_cart</Icon>
      <p>{cartItems.length}</p>
    </Link>
  );
};

export default CartWidget;


