import { render } from "enzyme"
import React from "react"

class Cell extends React.Component {
    
    state = {
        color: this.props.value
    }

    clickHandler = () => {
        this.setState({color: '#333'})

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