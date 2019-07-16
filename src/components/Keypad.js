// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

  logPassword = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input className="keypad" type="password" onKeyUp={this.logPassword}></input>
    )
  }
}