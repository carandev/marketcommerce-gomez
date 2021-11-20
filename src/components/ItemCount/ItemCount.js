import React, {useState} from 'react';
import './ItemCount.css'

const ItemCount = () => {
  let [number, setNumber] = useState(0)
  return (
    <div className={"counter_container"}>
      <p>Nombre del producto</p>
      <form className={"counter_form"}>
        <button onClick={() => setNumber(++number)}>+</button>
        <p>{number}</p>
        <button onClick={() => setNumber(--number)}>-</button>
      </form>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
