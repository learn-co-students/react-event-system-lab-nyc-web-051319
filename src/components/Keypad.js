// Code Keypad Component Here

import React from 'react'

class Keypad extends React.Component {

  text = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.text} />
      </div>
    )
  }
}

export default Keypad
