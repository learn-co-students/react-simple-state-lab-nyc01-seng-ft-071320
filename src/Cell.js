import React from 'react';

class Cell extends React.Component {

  constructor(props){
    super();

    this.state = {
      color: props.value
    }
  }

  clickHandler = () => {
    const newColor = '#333'
    this.setState({
      color: newColor
    })
  }

  render() {
    return(
      <div onClick={this.clickHandler} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
}

export default Cell;