import React, { Component } from 'react'

class ASRowReview extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.fresh}</td>
                <td>{this.props.weathered}</td>
            </tr>
        );
    }
}

export default ASRowReview;