import React, {useState} from 'react'
import { collection, addDoc } from 'firebase/firestore'
import db from '../../firebase/firebaseConfig'
import styled from "./FormStyle.module.css"

const FormAddProduct = () => {

  const [products, setProducts] = useState({
    name: '',
    price: 0,
    description: '',
    category: '',
    stock: 0,
    img: ''
  })

  const addProducts = async () => {
    await addDoc(collection(db, "products"), products);
  }

  const handleSubmit = event => {
    event.preventDefault()
    addProducts()

    setProducts(
      {
          name: '',
          price: 0,
          description: '',
          category: '',
          stock: 0,
          img: ''
        }
    )

  }

  const handleChange = event => {
    let {value, name} = event.target

    setProducts(lastValue => ({...lastValue, [name]: value}))

  }

  return (
    <form 
      onSubmit={handleSubmit}
      className={styled.form}
    >
      <h1 className={styled.h1}>Añadir Producto</h1>
      <label className={styled.label}>
        Nombre:
        <input 
          type="text" 
          name="name"
          onChange={handleChange}
          value={products.name}
          className={styled.input}
        /> 
      </label>
      <label className={styled.label}>
        Precio:
        <input 
          type="number"
          name="price"
          onChange={handleChange}
          value={products.price}
          className={styled.input}
      /> 
      </label>
      <label className={styled.label}>
        Descripción:
        <textarea 
          type="text" 
          name="description"
          onChange={handleChange}
          value={products.description}
          className={styled.input}
          rows={10}
        /> 
      </label>
      <label className={styled.label}>
        Categoria:
        <input 
          type="text"
          name="category"
          onChange={handleChange}
          value={products.category}
          className={styled.input}
      /> 
      </label>
      <label className={styled.label}>
        Url de la imagen:
        <input 
          type="text"
          name="img"
          onChange={handleChange}
          value={products.img}
          className={styled.input}
      /> 
      </label>
      <label className={styled.label}>
        Stock:
        <input 
          type="number"
          name="stock"
          onChange={handleChange}
          value={products.stock}
          className={styled.input}
      /> 
      </label>
      <button className={styled.button}>Guardar</button>
    </form>
  )
}

export default FormAddProduct

