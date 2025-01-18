import React, { Component } from 'react'

export default class HelloCC extends Component {
    constructor() {
        super()
        this.ct = new Date().toString()
    }
    render() {
        return (
            <>
                <h1>Hello From Class Component</h1>
                <h2>{this.ct}</h2>
            </>
        )
    }
}
