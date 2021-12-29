import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";
import ItemCategory from "../ItemCategory/ItemCategory";
import HeaderStyle from "./HeaderStyle.module.css";
import {FaShoppingBag} from "react-icons/all";

const Header = () => {
  return (
    <header className={HeaderStyle.header}>
      <Link to={'/'} className={HeaderStyle.linkLogo}>
        <FaShoppingBag color="#fff" size={50}/>
        <span>Market Commerce</span>
      </Link>
      <ItemCategory/>
      <nav>
        <CartWidget/>
      </nav>
    </header>
  );
};

export default Header;
