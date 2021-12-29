import React, {useContext, useState} from 'react';
import styled from './FormBuyStyle.module.css'
import {CartContext} from "../../context/CartContext";
import {addDoc, collection} from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const FormBuy = ({ total }) => {

  const [buyerData, setBuyerData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const { cartItems, setCartItems } = useContext(CartContext)

  const [buyData, setBuyData] = useState({
    'buyer': buyerData,
    'products': cartItems[0],
    total
  })

  const [orderId, setOrderId] = useState()
  const [showId, setShowId] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()

    const { id } = await addDoc(collection(db, "orders"), buyData)

    setOrderId(id)
    setShowId(true)

    setCartItems([])

  }

  const handleChange = event => {
    const {name, value} = event.target

    setBuyerData(lastValue => ({...lastValue, [name]: value}))

    setBuyData(lastValue => ({...lastValue, 'buyer': buyerData}))
  }

  return (
    <>
      {
        showId ?
        <p>El id de su compra es: {orderId}</p>
        :
        <>
          <h1>Datos de compra</h1>
          <form onSubmit={handleSubmit} className={styled.form}>
            <label>
              Nombre
              <input
                type="text"
                name='name'
                value={buyerData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Teléfono
              <input
                type="text"
                name='phone'
                value={buyerData.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Correo
              <input
                type="text"
                name='email'
                value={buyerData.email}
                onChange={handleChange}
              />
            </label>
            <button>Completar Compra</button>
          </form>
        </>
      }
    </>
  );
};

export default FormBuy;
