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

  const [emailRepeat, setEmailRepeat] = useState('')

  const [orderId, setOrderId] = useState()
  const [showId, setShowId] = useState(false)
  const [showErrorEmail, setShowErrorEmail] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()

    if (emailRepeat === buyerData.email) {
      const { id } = await addDoc(collection(db, "orders"), buyData)

      setOrderId(id)
      setShowId(true)

      setCartItems([])
    } else {
      setShowErrorEmail(true)
    }
  }

  const handleChange = event => {
    const {name, value} = event.target

    setBuyerData(lastValue => ({...lastValue, [name]: value}))

    setBuyData(lastValue => ({...lastValue, 'buyer': buyerData}))
  }

  const handleRepeat = event => {
    setEmailRepeat(event.target.value)
  }

  return (
    <>
      {
        showId ?
        <p>El id de su compra es: {orderId}</p>
        :
        <>
          <h1 className={styled.h1}>Datos de compra</h1>
          <form onSubmit={handleSubmit} className={styled.form}>
            <label className={styled.label}>
              Nombre
              <input
                type="text"
                name='name'
                value={buyerData.name}
                onChange={handleChange}
                className={styled.input}
                required
              />
            </label>
            <label className={styled.label}>
              Teléfono
              <input
                type="number"
                name='phone'
                value={buyerData.phone}
                onChange={handleChange}
                className={styled.input}
              />
            </label>
            <label className={styled.label}>
              Correo
              <input
                type="email"
                name='email'
                value={buyerData.email}
                onChange={handleChange}
                className={styled.input}
                required
              />
            </label>
            <label className={styled.label}>
              Repetir correo
              <input
                type="email"
                name='emailRepeat'
                onChange={handleRepeat}
                className={styled.input}
                required
              />
            </label>
            {showErrorEmail && <p className={styled.error}>El correo debe ser igual</p>}
            <button className={styled.button}>Completar Compra</button>
          </form>
        </>
      }
    </>
  );
};

export default FormBuy;
