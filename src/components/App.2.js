import React, { Component } from 'react';
 
class Com extends Component {
  constructor (props) {
    super(props);
    console.log('1', this); 
  }
  btnClickFn (id) {
    console.log( id , this);
  }
  render() {
    const _this = this;
    return(
      <div>
        <button onClick = { function () {
          return _this.btnClickFn(11)
        }}>事件中传参函数写法</button>
        <button onClick = { () => this.btnClickFn('12')
        }>react</button>
      </div>
    )  
  }
}

export default Com;