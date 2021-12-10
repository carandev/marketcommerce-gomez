import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import Item from "../Item/Item";
import styled from "./cart.module.css";


const Cart = () => {
  const {cartItems, clear} = useContext(CartContext)

  return (
    <>
      <button onClick={clear}>Eliminar productos</button>
      <ul className={styled.cartContainer}>
        {cartItems.map(item => (
          <Item key={item.id} item={item} cart/>
        ))}
      </ul>
    </>
  )
}

export default Cart

