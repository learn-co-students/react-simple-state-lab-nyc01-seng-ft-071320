// import React, { Component } from 'react'

// class Cell extends Component {
//     constructor(props) {
//         super()
//         this.state = { color: props.value }
//     }

//     clickHandler = () => {
//         this.setState({
//             color: '#FFF'
//         })
//     }

//     render() {
//         return (
//             <div    
//                 className="cell" 
//                 style={{color: this.state.color}}>
//                 onClick={this.clickHandler}
//             </div>
//         )
//     }


// }
// export default Cell

import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }
  
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
  
}
