import React from 'react';

export default class Cell extends React.Component{
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    clickListener = () => {
        this.setState({
            color: "#333"
        })
    }

    render(){
        return(
        <div onClick={this.clickListener} className="cell" style={{backgroundColor: this.state.color}}></div>
        )
    }





}
