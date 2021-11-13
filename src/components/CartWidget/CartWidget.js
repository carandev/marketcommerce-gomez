import React, { Component } from 'react'
import { Icon } from '@mui/material'

export default class CardWidget extends Component {
  render() {
    const styles = {
      display: 'flex',
      alignItems: 'center'
    }
    return (
      <div style={styles}>
        <Icon>shopping_cart</Icon>
        <p>{this.props.number}</p>
      </div>
    )
  }
}

