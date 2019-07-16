// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  hello = () => {
    console.log('Entering password...')
  }

  render(){
    return <input onKeyUp={this.hello} type="password" />
  }

}

export default Keypad
