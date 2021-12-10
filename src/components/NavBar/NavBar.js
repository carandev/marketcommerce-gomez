import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import styled from './navBar.module.css'
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className={styled.header}>
        <Link to={'/'}>
          <img src="/img/logo.png" alt={"Logotipo de Market Commerce"}/>
        </Link>
        <nav>
          <li><a href="sign-up.html">Crear tu cuenta</a></li>
          <li><a href="login.html">Ingresa</a></li>
          <li><a href="my-shopping.html">Mis compras</a></li>
          <li><CartWidget/></li>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

