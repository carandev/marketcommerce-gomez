import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {
  let [items, setItems] = useState([])
  let { categoryId } = useParams()

  useEffect(() => {
    setTimeout(() => fetch('/items.json')
        .then(res => res.json())
        .then(res => {
          if (categoryId === undefined){
            setItems(res)
          }else {
            let temporalItems = []
            res.forEach(item => item.category === categoryId && temporalItems.push(item))
            setItems(temporalItems)
          }
        }),
      2000)
  }, [categoryId])

  return (
      <ItemList items={items}/>
  )
};

export default ItemListContainer;
