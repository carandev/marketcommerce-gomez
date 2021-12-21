import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import {Link, useParams} from "react-router-dom";
import styled from "./ItemDetailContainer.module.css";
import {collection, query, getDocs, where} from "firebase/firestore";
import db from "../../firebase/firebaseConfig";


const ItemDetailContainer = () => {

  let { itemId } = useParams()
  let [item, setItem] = useState({})

  const getItem = async () => {
    const q = query(collection(db, "products"), where("id", "==", parseInt(itemId)));

    const querySnapshot = await getDocs(q);
    setItem(querySnapshot.docs[0].data())
  }

  useEffect(() => {
    getItem()
  }, [itemId])

  return (
    <main className={styled.main}>
      <ItemDetail item={item}/>
    </main>
  );
};

export default ItemDetailContainer;
