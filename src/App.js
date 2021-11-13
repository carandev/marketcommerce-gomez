import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

export default class App extends Component {
  render() {
    return (
      <>
				<NavBar/>
        <ItemListContainer greeting="Me está gustando React"/>
      </>
    )
  }
}

