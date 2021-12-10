import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import Item from "../Item/Item";
import styled from "./cart.module.css";


const Cart = () => {
  const {cartItems} = useContext(CartContext)

  return (
     <ul className={styled.cartContainer}>
       {cartItems.map(item => (
         <Item key={item.id} item={item} cart/>
       ))}
     </ul>
  )
}

export default Cart

