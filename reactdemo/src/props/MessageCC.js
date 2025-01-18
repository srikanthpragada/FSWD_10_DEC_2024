import React, { Component } from 'react'

export default class MessageCC extends Component {
    constructor(props) {
        super()
        this.props = props
    }
    render() {
        return (
            <h1 style={{ color: this.props.color }}>{this.props.message}</h1>
        )
    }
}
