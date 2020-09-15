import React from 'react'

class Cell extends React.Component {

  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  changeColor = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    console.log(this.state.color)
    return <div onClick={this.changeColor} className="cell" style={{backgroundColor: `${this.state.color}`}}></div>
  }
}

export default Cell
