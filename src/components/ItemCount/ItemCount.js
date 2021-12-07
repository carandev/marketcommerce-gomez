import React, {useState} from 'react';
import styled from './itemCount.module.css'

const ItemCount = ({stock, initial = 1, onAdd}) => {
  let [number, setNumber] = useState(initial)

  const addNumber = () => {
    if (number < stock) {
      setNumber(lastValue => lastValue + 1)
    }
  }

  const lessNumber = () => {
    if (number > 1) {
      setNumber(lastValue => lastValue - 1)
    }
  }

  return (
    <div className={styled.counter_container}>
      <div className={styled.counter_input}>
        <button
          onClick={lessNumber}
        >
          -
        </button>
        <input
          onChange={input => setNumber(input.target.value)}
          type="text"
          value={number}
        />
        <button
          onClick={addNumber}
        >
          +
        </button>
      </div>
      <button
        onClick={() => number <= stock ? onAdd(number) : null}
        className={'addToCart'}
      >
        Agregar al carrito
      </button>
      {stock < number ? <span className={'error'}>Solo hay {stock} productos</span>: <></>}
    </div>
  );
};

export default ItemCount;
