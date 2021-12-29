import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import styled from "./ItemDetailContainer.module.css";
import {doc, getDoc} from "firebase/firestore";
import db from "../../firebase/firebaseConfig";


const ItemDetailContainer = () => {

  let { itemId } = useParams()
  let [item, setItem] = useState({})

  const getItem = async () => {
    const docRef = doc(db, "products", itemId);
    const docSnap = await getDoc(docRef);
    /* const q = query(collection(db, "products"), where("id", "==", parseInt(itemId)));

    const querySnapshot = await getDocs(q); */
    setItem(docSnap.data())
  }

  useEffect(() => {
    getItem()
  }, [itemId])

  return (
    <main className={styled.main}>
      <ItemDetail item={item} id={itemId}/>
    </main>
  );
};

export default ItemDetailContainer;
