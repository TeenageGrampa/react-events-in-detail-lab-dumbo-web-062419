// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{

    // constructor(){
    //     super()
    //     this.state = {
    //         coordinates: []
    //     }
    // }

    handleClick = (event) => {
        const coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    

    render(){
        return (
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}