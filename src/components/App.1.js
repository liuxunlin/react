import React, { Component } from 'react';
 
class Com extends Component {
  constructor (props) {
    super(props);
    console.log('1', this); 
  }
  btnClickFn () {
    console.log('2', this);
  }
  render() {
    return(
      <div>
        <button onClick = { this.btnClickFn.bind(this) }>存在this的指向问题</button>
      </div>
    )
  }
}

export default Com;