import React, { Component } from 'react'

export default class CounterApp extends Component {
    state = {
        count: 0
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }
    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    handleRest=()=>{
        this.setState({count:0})
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleIncrement}>increment</button>
                <button onClick={this.handleDecrement}>decrement</button>
                <button onClick={this.handleRest}>reset</button>

            </div>
        )
    }
}
