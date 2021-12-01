import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {

  let { id } = useParams()

  let [item, setItem] = useState({})

  useEffect(() => {
    setTimeout(() => {
      fetch('/items.json')
        .then(res => res.json())
        .then(res => res.forEach(itemIn => itemIn.id==id && setItem(itemIn)))
    }, 2000)
  }, [])

  return (
    <>
      <ItemDetail item={item}/>
    </>
  );
};

export default ItemDetailContainer;
