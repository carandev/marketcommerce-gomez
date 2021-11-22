import {Icon} from "@mui/material";
import React from 'react';


const CartWidget = ({ number }) => {

  const styles = {
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <a href={"shopping_cart.html"} style={styles}>
      <Icon>shopping_cart</Icon>
      <p>{number}</p>
    </a>
  );
};

export default CartWidget;


