import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {
    
    createArray = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        return (
          <button onClick={ this.createArray }>Coords</button>
        )
      }
}