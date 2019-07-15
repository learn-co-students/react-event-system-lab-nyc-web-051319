import React, { Component } from 'react'
// Code Keypad Component Here


export default class Keypad extends Component {

  passwordLog = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.passwordLog} type="password" />
    )
  }
}
