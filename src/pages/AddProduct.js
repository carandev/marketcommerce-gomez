import React from 'react'
import FormAddProduct from '../components/FormAddProduct/FormAddProduct'
import styled from './addProductStyle.module.css'

const AddProduct = () => {
  return (
    <main className={styled.main}>
      <FormAddProduct/>
    </main>
  )
}

export default AddProduct

