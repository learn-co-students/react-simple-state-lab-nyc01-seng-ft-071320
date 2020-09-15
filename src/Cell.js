import React, { Component } from 'react';

export default class Cell extends Component {
constructor(props){
    super()
    this.state = {
        color: props.value
    }
}

colorChange = () => {
    this.setState({
        color: '#333'
    })
}
render(){
   return(
    <div
        onClick={this.colorChange} 
        style={{backgroundColor: this.state.color}} 
        className = "cell">
    </div>
   )
}




}