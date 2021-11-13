import React, { Component } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css' 

export default class NavBar extends Component {
	render() {
		return (
			<>
      <header className="header">
        <img src="/img/logo.png"/>
				<nav>
						<li><a href="">Crear tu cuenta</a></li>
						<li><a href="">Ingresa</a></li>
						<li><a href="">Mis compras</a></li>
						<li><a href=""><CartWidget/></a></li>
				</nav>
      </header>
			</>
		)
	}
}
