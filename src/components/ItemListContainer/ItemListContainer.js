import React, {useEffect, useState} from 'react';
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore"
import db from "../../firebase/firebaseConfig"

const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const {categoryId} = useParams()

  const getProducts = async () => {
    const products = await getDocs(collection(db, 'products'))
    setItems([])
    if (categoryId === undefined) {
      products.forEach(product => setItems(lastItems => [...lastItems, [product.data(), product.id]]))
    } else {
      let temporalItems = []
      products.forEach(item => item.data().category === categoryId && temporalItems.push([item.data(), item.id]))
      setItems(temporalItems)
    }
  }

  useEffect(() => {
    getProducts()
  }, [categoryId])

  return (
    <ItemList items={items}/>
  )
};

export default ItemListContainer;
