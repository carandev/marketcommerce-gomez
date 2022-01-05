import React, {useEffect, useState} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import NotFound from "../../pages/NotFound"
import { ImSpinner5 } from 'react-icons/all'
import {useParams} from "react-router-dom"
import styled from "./ItemDetailContainer.module.css"
import {doc, getDoc} from "firebase/firestore"
import db from "../../firebase/firebaseConfig"


const ItemDetailContainer = () => {

  const { itemId } = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  const getItem = async () => {
    const docRef = doc(db, "products", itemId)
    const docSnap = await getDoc(docRef)

    setItem(docSnap.data())
    setLoading(false)
  }

  useEffect(() => {
    getItem()
  }, [itemId])

  return (
    <main className={styled.main}>
      {loading ? <ImSpinner5 size={40} color="#8df"/> :
        item === undefined ?
        <NotFound product/>
        :
        <ItemDetail item={item} id={itemId}/>
      }
    </main>
  )
}

export default ItemDetailContainer
