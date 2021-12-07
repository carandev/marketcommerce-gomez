import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import styled from './navBar.module.css'

const NavBar = () => {
  return (
    <>
      <header className={styled.header}>
        <img src="/img/logo.png" alt={"Logotipo de Market Commerce"}/>
        <nav>
          <li><a href="sign-up.html">Crear tu cuenta</a></li>
          <li><a href="login.html">Ingresa</a></li>
          <li><a href="my-shopping.html">Mis compras</a></li>
          <li><CartWidget number="5"/></li>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

