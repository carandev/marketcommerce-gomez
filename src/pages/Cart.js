import {useContext, useEffect, useState} from 'react'
import {CartContext} from '../context/CartContext'
import styled from "./Cart.module.css";
import Item from "../components/Item/Item";
import {FaSadCry} from "react-icons/all";
import {Link} from "react-router-dom";

const Cart = () => {
  const {cartItems, clear} = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let totalTemporal = 0
    cartItems.forEach(item => {
      totalTemporal += item.price * item.quantity
    })
    setTotal(totalTemporal)
  }, [cartItems])

  return (
    <main className={styled.main}>
      {
        cartItems.length > 0 ?
          <ul className={styled.cartContainer}>
            {cartItems.map(item => (
              <Item key={item.id} item={item} cart/>
            ))}
          </ul>
          :
          <div className={styled.emptyCartContainer}>
            <p className={styled.emptyCart}>
              No hay productos en el carrito
              <FaSadCry/>
            </p>
            <Link to='/' className={styled.button}>
              Volver a la tienda
            </Link>
          </div>
      }
      <div className={styled.dataContainer}>
        <div className={styled.price}>
          {cartItems.map(item => (
            <span key={item.id}>
              <span>{item.name} x{item.quantity}</span> <span>${item.price}</span></span>
          ))}
        </div>
        <p>Total: {total}</p>
        <button
          onClick={clear}
          className={styled.button}
        >
          Eliminar productos
        </button>
      </div>
    </main>
  )
}

export default Cart

