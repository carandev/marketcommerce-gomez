import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <header className="header">
        <img src="/img/logo.png" alt={"Logotipo de Market Commerce"}/>
        <nav>
          <li><a href="#">Crear tu cuenta</a></li>
          <li><a href="#">Ingresa</a></li>
          <li><a href="#">Mis compras</a></li>
          <li><CartWidget number="5"/></li>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

