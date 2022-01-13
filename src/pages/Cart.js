import {useContext, useEffect, useState} from 'react'
import {CartContext} from '../context/CartContext'
import styled from "./Cart.module.css";
import Item from "../components/Item/Item";
import {FaSadCry} from "react-icons/all";
import {Link} from "react-router-dom";
import FormBuy from "../components/FormBuy/FormBuy";
import formatNumberToCurrency from "../changeCurrency"

const Cart = () => {
  const {cartItems, clear} = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [finishBuy, setFinishBuy] = useState(false)

  useEffect(() => {
    let totalTemporal = 0
    cartItems.forEach(([item]) => {
      totalTemporal += item.price * item.quantity
    })

    setTotal(formatNumberToCurrency(totalTemporal))

  }, [cartItems])

  const handleSubmit = event => {
    event.preventDefault()

    setFinishBuy(true)
  }

  return (
    <main className={styled.main}>
      {
        cartItems.length > 0 ?
          <ul className={styled.cartContainer}>
            {cartItems.map(item => (
              <Item key={item[1]} item={item[0]} id={item[1]} cart/>
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
        {
          finishBuy ?
            <FormBuy total={total}/>
            :
            <>
                <div className={styled.price}>
                  {cartItems.map(([item, id]) => (
                    <span key={id}>
                  <span>{item.name} x{item.quantity}</span> <span>${item.price}</span></span>
                  ))}
                </div>
                <p>
                Total: {total}
                </p>
                <div className={styled.buttonsContainer}>
                  <button
                    onClick={clear}
                    className={styled.button}
                  >
                    Eliminar productos
                  </button>
                  <button
                    className={styled.button}
                    onClick={handleSubmit}
                  >
                    Terminar compra
                  </button>
                </div>
              </>
        }
      </div>
    </main>
  )
}

export default Cart

