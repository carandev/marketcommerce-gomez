import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "./ItemCategoryStyle.module.css";

const ItemCategory = () => {

  const linkActive = ({ isActive }) => (
    isActive ? `${styled.activeLink} ${styled.link}` : styled.link
  )

  return (
      <nav className={styled.nav}>
          <li>
            <NavLink
              to={'/'}
              className={linkActive}
            >
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/category/portatil'}
              className={linkActive}
            >
              Portatil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/category/celular'}
              className={linkActive}
            >
              Celular
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/category/teclado'}
              className={linkActive}
            >
              Teclado
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/category/mouse'}
              className={linkActive}
            >
              Mouse
            </NavLink>
          </li>
      </nav>
  );
};

export default ItemCategory;
