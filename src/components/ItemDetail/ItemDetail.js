import React from 'react';
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
  const onAdd = () => console.log('No sé qué hacer en esta función :)')

  return (
    <main className={'item_detail__main'}>
      <img src={item.img} alt="Imagen del producto"/>
      <div className="details">
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
        <div>
          <h2>$ {item.price}</h2>
          <ItemCount stock={item.stock} onAdd={onAdd}/>
        </div>
      </div>
    </main>
  );
};

export default ItemDetail;
