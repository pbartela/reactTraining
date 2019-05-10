import React, { Component } from 'react'

export default class Second extends Component {
    render() {
        return (
            <div>
                {this.props.title}
                {this.props.children}
            </div>
        )
    }
}
