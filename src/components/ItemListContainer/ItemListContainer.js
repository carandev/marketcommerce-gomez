import React, { Component } from 'react'

export default class ItemListContainer extends Component {
  render() {
    const styles = {
      color: "#0d0630",
      textAlign: "center"
    }

    return <h1 style={styles}>{this.props.greeting}</h1>

  }
}

