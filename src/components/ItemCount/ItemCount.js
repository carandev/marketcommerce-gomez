import React, {useState} from 'react';
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
  let [number, setNumber] = useState(initial)

  return (
    <div className={"counter_container"}>
      <div className="counter_input">
        <button onClick={() => setNumber(--number)}>-</button>
        <input onChange={input => setNumber(input.target.value)} type="text" value={number}/>
        <button onClick={() => setNumber(++number)}>+</button>
      </div>
      <button onClick={() => onAdd(number)} className={'addToCart'}>Agregar al carrito</button>
      {stock < number ? <span className={'error'}>Solo hay {stock} productos</span>: <></>}
    </div>
  );
};

ItemCount.defaultProps = {
  initial: 0
}

export default ItemCount;
