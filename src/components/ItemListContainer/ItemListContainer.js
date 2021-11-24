import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  let [items, setItems] = useState([])

  useEffect(() => {
    setTimeout(() => fetch('/items.json')
        .then(res => res.json())
        .then(res => setItems(res)),
      2000)
  }, [])

  return (
    <ItemList items={items}/>
  )
};

export default ItemListContainer;
