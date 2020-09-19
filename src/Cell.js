import { render } from "enzyme"
import React from "react"

class Cell extends React.Component {
    
    state = {
        color: this.props.value
    }

    clickHandler = (e) => {
        console.log("clicked", e.target.style.backgroundColor)
        e.target.style.backgroundColor = '#333'
        let clickedColor = '#333'
        this.setState({color: clickedColor})

    }
    
    render() {
        console.log(this.state)
        return(
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.clickHandler}>
            </div>
        )
    }
}



export default Cell;