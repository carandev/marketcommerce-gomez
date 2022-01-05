import React from 'react'
import styled from './NotFound.module.css'

const NotFound = ({product}) => {
  return (
    <main className={styled.main}>
      <h1>404 <br/> {product ? 'Producto no encontrado' : 'Página no encontrada'}</h1>
    </main>
  )
}

export default NotFound
