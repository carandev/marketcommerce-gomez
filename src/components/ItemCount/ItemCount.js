import React, {useContext, useEffect} from 'react';
import styled from './itemCount.module.css'
import {CartContext} from "../../context/CartContext";

const ItemCount = ({item, stock, setShowCount, ...props}) => {

  const { cartItems, addItem } = useContext(CartContext)

  useEffect(() => {
    const temporalItem = cartItems.find(itemCart => itemCart[1] === props.id)
    props.setNumber(temporalItem ? parseInt(temporalItem[0].quantity) : 1)
  }, [item, cartItems, props])


  const addNumber = () => {
    if (props.number < stock) {
      props.setNumber(lastValue => lastValue + 1)
    }
  }

  const lessNumber = () => {
    if (props.number > 1) {
      props.setNumber(lastValue => lastValue - 1)
    }
  }

  return (
    <div className={styled.counter_container}>
      <div className={styled.counter_input}>
        <button
          className={styled.button}
          onClick={lessNumber}
        >
          -
        </button>
        <p className={styled.number}>{props.number}</p>
        <button
          className={styled.button}
          onClick={addNumber}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          if (props.number <= stock) {
            addItem(item, props.number, props.id)
            setShowCount(false)
          }
        }
        }
        className={styled.buttonAddToCart}
      >
        Agregar al carrito
      </button>
      {stock < props.number ? <span className={'error'}>Solo hay {stock} productos</span>: <></>}
    </div>
  );
};

export default ItemCount;
