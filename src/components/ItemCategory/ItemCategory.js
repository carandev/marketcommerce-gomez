import React from 'react';
import './ItemCategory.css'
import {NavLink} from "react-router-dom";

const ItemCategory = () => {
  const style = ({isActive}) => isActive ? 'category_active category_link' : 'category_link'
  return (
    <>
      <nav>
        <ul className={'category_ul'}>
          <li>
            <NavLink to={'/'} className={style}>
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink to={'/category/portatil'} className={style}>
              Portatil
            </NavLink>
          </li>
          <li>
            <NavLink to={'/category/celular'} className={style}>
              Celular
            </NavLink>
          </li>
          <li>
            <NavLink to={'/category/teclado'} className={style}>
              Teclado
            </NavLink>
          </li>
          <li>
            <NavLink to={'/category/mouse'} className={style}>
              Mouse
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ItemCategory;
