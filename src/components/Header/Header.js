import React, { useEffect, useState } from 'react';
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";
import ItemCategory from "../ItemCategory/ItemCategory";
import HeaderStyle from "./HeaderStyle.module.css";
import {FaShoppingBag, HiMenu} from "react-icons/all";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 800) {
      setShowMenu(true)
    }
  }, [])

  const handleMenu = () => {
    setShowMenu(lastValue => !lastValue)
    const header = document.querySelector('header')
    header.classList.toggle(HeaderStyle.headerActive)
  }

  return (
    <header className={HeaderStyle.header}>
      <div className={HeaderStyle.logoContainer}>
        <Link to={'/'} className={HeaderStyle.linkLogo}>
          <FaShoppingBag color="#fff" size={30}/>
          <span>Market Commerce</span>
        </Link>
        {window.innerWidth < 800 && <HiMenu color="#fff" size={25} onClick={handleMenu}/>}
      </div>
      {
        showMenu &&
        <>
          <ItemCategory setShowMenu={setShowMenu}/>
          <CartWidget/>
        </>
        
      }
    </header>
  );
};

export default Header;
